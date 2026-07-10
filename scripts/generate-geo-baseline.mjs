import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { BASELINE_COMMIT, TOOL_SLUGS, pageRecord } from './geo-content.mjs'

const root = process.cwd()

function git(...args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trimEnd()
}

function filesAtCommit(prefix) {
  return git('ls-tree', '-r', '--name-only', BASELINE_COMMIT, '--', prefix)
    .split('\n')
    .filter(Boolean)
    .sort()
}

function contentAtCommit(source) {
  return execFileSync('git', ['show', `${BASELINE_COMMIT}:${source}`], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024
  })
}

const markdownSources = filesAtCommit('docs').filter((source) => source.endsWith('.md'))
const pages = markdownSources.map((source) => pageRecord(source, contentAtCommit(source)))
const publicAssets = filesAtCommit('docs/public')
const pairs = new Map()

for (const page of pages) {
  const pair = pairs.get(page.pairKey) || { pairKey: page.pairKey }
  pair[page.locale === 'en' ? 'en' : 'zh'] = page.source
  pairs.set(page.pairKey, pair)
}

const media = [...new Set(pages.flatMap((page) => page.media))].sort()
const toolPages = pages.filter((page) => /docs\/(?:en\/)?tool\//.test(page.source))
const toolMedia = [...new Set(toolPages.flatMap((page) => page.media))].sort()

const baseline = {
  schemaVersion: 1,
  baselineCommit: BASELINE_COMMIT,
  invariants: {
    markdownPages: pages.length,
    zhPages: pages.filter((page) => page.locale === 'zh-Hans').length,
    enPages: pages.filter((page) => page.locale === 'en').length,
    bilingualPairs: [...pairs.values()].filter((pair) => pair.zh && pair.en).length,
    zhToolPages: toolPages.filter((page) => page.locale === 'zh-Hans').length,
    enToolPages: toolPages.filter((page) => page.locale === 'en').length,
    publicAssets: publicAssets.length,
    referencedMedia: media.length,
    toolReferencedMedia: toolMedia.length
  },
  toolSlugs: TOOL_SLUGS,
  pages,
  pairs: [...pairs.values()].sort((a, b) => a.pairKey.localeCompare(b.pairKey)),
  publicAssets,
  referencedMedia: media,
  toolReferencedMedia: toolMedia
}

mkdirSync(path.join(root, 'scripts'), { recursive: true })
writeFileSync(path.join(root, 'scripts/geo-baseline.json'), `${JSON.stringify(baseline, null, 2)}\n`)

console.log(JSON.stringify(baseline.invariants, null, 2))
console.log('Baseline updated. Run npm run geo:migration:update separately for reviewed migration records.')
