import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'

export const BASELINE_COMMIT = '44b9e65738ebc5c87c88f2d7fbf8846efd31f8ea'
export const TOOL_SLUGS = [
  'clash-for-android',
  'clash-for-windows',
  'clashbox',
  'clashverge',
  'flclash',
  'guiforsing-box',
  'loon',
  'mihomo',
  'oneclick',
  'quantumult-x',
  'shadowrocket',
  'sing-box',
  'sing-boxforandroid',
  'sing-boxforapple',
  'surfboard',
  'surge',
  'v2rayn',
  'v2rayng'
]

export function toPosix(filePath) {
  return filePath.split(path.sep).join('/')
}

export function walkFiles(directory) {
  if (!statSync(directory, { throwIfNoEntry: false })?.isDirectory()) return []
  return readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name)
      return entry.isDirectory() ? walkFiles(entryPath) : [entryPath]
    })
    .sort()
}

export function routeFromSource(source) {
  const relative = toPosix(source).replace(/^docs\//, '').replace(/\.md$/, '')
  if (relative === 'index') return '/'
  if (relative === 'en/index') return '/en/'
  if (relative.endsWith('/index')) return `/${relative.slice(0, -'/index'.length)}/`
  return `/${relative}`
}

export function localeFromSource(source) {
  return toPosix(source).startsWith('docs/en/') ? 'en' : 'zh-Hans'
}

export function pairKeyFromSource(source) {
  return toPosix(source).replace(/^docs\/en\//, 'docs/').replace(/\.md$/, '')
}

export function splitFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return { frontmatterRaw: '', body: raw }
  const end = raw.indexOf('\n---', 4)
  if (end === -1) return { frontmatterRaw: '', body: raw }
  return {
    frontmatterRaw: raw.slice(4, end),
    body: raw.slice(end + 4).replace(/^\r?\n/, '')
  }
}

function scalar(value) {
  const trimmed = value.trim()
  if (trimmed === 'null' || trimmed === '~') return null
  if (trimmed === 'true') return true
  if (trimmed === 'false') return false
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed)
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const body = trimmed.slice(1, -1).trim()
    if (!body) return []
    return body.split(',').map((part) => scalar(part))
  }
  return trimmed.replace(/^(['"])(.*)\1$/, '$2')
}

export function parseFrontmatter(raw) {
  const { frontmatterRaw } = splitFrontmatter(raw)
  const result = {}
  for (const line of frontmatterRaw.split(/\r?\n/)) {
    if (!line || /^\s/.test(line) || line.trimStart().startsWith('#')) continue
    const match = line.match(/^([A-Za-z][\w-]*):(?:\s*(.*))?$/)
    if (match) result[match[1]] = scalar(match[2] ?? '')
  }
  return result
}

function stripInlineMarkup(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function extractHeadings(raw) {
  const { body } = splitFrontmatter(raw)
  const headings = []
  for (const line of body.split(/\r?\n/)) {
    const match = line.match(/^(#{1,6})\s+(.+?)\s*$/)
    if (match) headings.push({ level: match[1].length, text: stripInlineMarkup(match[2]) })
  }
  return headings
}

export function extractLocalMedia(raw) {
  const found = new Set()
  const add = (target) => {
    const value = target.trim().replace(/^<|>$/g, '').split(/[?#]/)[0]
    if (value.startsWith('/') && !value.startsWith('//')) found.add(value)
  }

  for (const match of raw.matchAll(/<(?:img|video|source)\b[^>]*?\b(?:src|poster)\s*=\s*["']([^"']+)["']/gi)) {
    add(match[1])
  }

  let cursor = 0
  while ((cursor = raw.indexOf('![', cursor)) !== -1) {
    const targetStart = raw.indexOf('](', cursor + 2)
    if (targetStart === -1) break
    let index = targetStart + 2
    while (/\s/.test(raw[index] || '')) index += 1
    if (raw[index] === '<') {
      const end = raw.indexOf('>', index + 1)
      if (end === -1) break
      add(raw.slice(index + 1, end))
      cursor = end + 1
      continue
    }
    const valueStart = index
    let depth = 0
    for (; index < raw.length; index += 1) {
      const character = raw[index]
      if (character === '(') depth += 1
      else if (character === ')' && depth > 0) depth -= 1
      else if ((character === ')' || /\s/.test(character)) && depth === 0) break
    }
    add(raw.slice(valueStart, index))
    cursor = index + 1
  }
  return [...found].sort()
}

export function hashText(raw) {
  return createHash('sha256').update(raw).digest('hex')
}

export function pageRecord(source, raw) {
  const frontmatter = parseFrontmatter(raw)
  const headings = extractHeadings(raw)
  const { body } = splitFrontmatter(raw)
  return {
    source: toPosix(source),
    route: routeFromSource(source),
    locale: localeFromSource(source),
    pairKey: pairKeyFromSource(source),
    title: String(frontmatter.title || headings.find((heading) => heading.level === 1)?.text || ''),
    h1: headings.find((heading) => heading.level === 1)?.text || null,
    contentLength: body.replace(/\s/g, '').length,
    headings: headings.filter((heading) => heading.level <= 3),
    media: extractLocalMedia(raw),
    sha256: hashText(raw)
  }
}

export function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'))
}
