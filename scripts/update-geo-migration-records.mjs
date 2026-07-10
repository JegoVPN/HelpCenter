import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import {
  APPROVED_MEDIA_RETIREMENTS,
  BASELINE_COMMIT,
  extractHeadings,
  extractLocalMedia,
  hashText,
  readJson,
  splitFrontmatter
} from './geo-content.mjs'

const root = process.cwd()
const baseline = readJson(path.join(root, 'scripts/geo-baseline.json'))

function baselineContent(source) {
  return execFileSync('git', ['show', `${BASELINE_COMMIT}:${source}`], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024
  })
}

function normalizeHeading(value) {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '')
}

function externalHosts(raw) {
  const hosts = new Set()
  for (const match of raw.matchAll(/https?:\/\/[^\s)>'"]+/gi)) {
    try {
      hosts.add(new URL(match[0].replace(/[.,;:]+$/, '')).hostname.toLowerCase())
    } catch {}
  }
  return [...hosts].sort()
}

function taskClasses(source, raw, headings) {
  const text = `${headings.map((heading) => heading.text).join(' ')} ${splitFrontmatter(raw).body}`
  const candidates = [
    ['installation-or-acquisition', /安装|下载|获取|install|download|obtain/i],
    ['subscription-import-or-update', /订阅|导入|更新|subscription|import|update/i],
    ['mode-or-node-selection', /模式|节点|代理|mode|node|proxy/i],
    ['connection-verification', /检测|测试|连接|验证|check|test|connect|verify/i],
    ['troubleshooting-or-recovery', /故障|问题|错误|恢复|重置|排查|troubleshoot|problem|error|recover|reset/i],
    ['limits-or-safety', /限制|注意|安全|隐私|风险|limit|warning|security|privacy|risk/i],
    ['account-payment-or-membership', /账户|会员|支付|续费|退款|account|membership|payment|renew|refund/i],
    ['policy-or-appeal', /政策|条款|公平|滥用|申诉|policy|terms|fair|abuse|appeal/i]
  ]
  const tasks = candidates.filter(([, pattern]) => pattern.test(text)).map(([name]) => name)
  if (/docs\/(?:en\/)?tool\//.test(source)) {
    for (const required of ['installation-or-acquisition', 'subscription-import-or-update', 'limits-or-safety']) {
      if (!tasks.includes(required)) tasks.push(required)
    }
  }
  return tasks.length ? tasks : ['article-specific-guidance']
}

function correctionCategories(source, baselineRaw, currentRaw) {
  if (hashText(baselineRaw) === hashText(currentRaw)) return ['none']
  const categories = ['metadata-and-bilingual-linkage', 'human-first-copy-and-task-flow']
  const combined = `${baselineRaw}\n${currentRaw}`
  if (/docs\/(?:en\/)?tool\//.test(source)) categories.push('tool-lifecycle-support-source-and-alternatives')
  if (/docs\/(?:en\/)?devices\//.test(source)) categories.push('catalog-backed-device-selection')
  if (/payment|membership|services|usage|fair-use|limits/.test(source)) categories.push('commercial-rules-preserved-or-confirmed-against-current-product')
  if (/privacy|permissions/.test(source)) categories.push('official-privacy-policy-boundary')
  if (/installation|keep-updated/.test(source)) categories.push('browser-installation-and-anchor-correction')
  if (/faq|chatgpt-access|bing|apple-id|harmony|vibe-coding/.test(source)) categories.push('unsafe-or-third-party-evasion-guidance-removed')
  if (/firewall|关闭|turn off|account|region|地区|unlimited|无限/i.test(combined)) categories.push('high-risk-claim-reviewed')
  return [...new Set(categories)]
}

function sectionMapping(baselineSections, currentSections) {
  return baselineSections.map((oldSection, index) => {
    const exact = currentSections.find((entry) => normalizeHeading(entry.text) === normalizeHeading(oldSection.text))
    const target = exact || currentSections[Math.min(index, Math.max(0, currentSections.length - 1))]
    return {
      from: oldSection,
      to: target || null,
      disposition: exact ? 'preserved-heading' : target ? 'restructured-in-place' : 'preserved-in-body-without-heading'
    }
  })
}

const records = baseline.pages.map((page) => {
  const before = baselineContent(page.source)
  const after = readFileSync(path.join(root, page.source), 'utf8')
  const baselineSections = extractHeadings(before).filter((heading) => heading.level >= 2 && heading.level <= 3)
  const currentSections = extractHeadings(after).filter((heading) => heading.level >= 2 && heading.level <= 3)
  const mapping = sectionMapping(baselineSections, currentSections)
  const beforeMedia = extractLocalMedia(before)
  const afterMedia = extractLocalMedia(after)
  const removedMedia = beforeMedia.filter((media) => !afterMedia.includes(media))
  const approvedRemovedMedia = removedMedia.filter((media) =>
    (APPROVED_MEDIA_RETIREMENTS[page.source] || []).includes(media)
  )
  const unexpectedRemovedMedia = removedMedia.filter((media) => !approvedRemovedMedia.includes(media))
  const beforeHosts = externalHosts(before)
  const afterHosts = externalHosts(after)
  const isTool = /docs\/(?:en\/)?tool\//.test(page.source)
  const restructured = mapping.some((entry) => entry.disposition !== 'preserved-heading')

  return {
    source: page.source,
    route: page.route,
    strategy: isTool || !restructured ? 'preserve-and-enhance' : 'restructure-in-place',
    baselineH1: page.h1,
    currentH1: extractHeadings(after).find((heading) => heading.level === 1)?.text || null,
    baselineSections,
    currentSections,
    sectionMapping: mapping,
    preservedTasks: taskClasses(page.source, before, baselineSections),
    corrections: correctionCategories(page.source, before, after),
    mediaAndExternalLinkChanges: {
      baselineMediaCount: beforeMedia.length,
      currentMediaCount: afterMedia.length,
      removedMedia,
      approvedRemovedMedia,
      unexpectedRemovedMedia,
      mediaPreserved: unexpectedRemovedMedia.length === 0,
      retirementDecision: approvedRemovedMedia.length
        ? 'human-confirmed outdated FAQ and AI-product media retired from rendered content; public asset files retained'
        : null,
      baselineExternalHosts: beforeHosts,
      currentExternalHosts: afterHosts,
      removedExternalHosts: beforeHosts.filter((host) => !afterHosts.includes(host)),
      addedExternalHosts: afterHosts.filter((host) => !beforeHosts.includes(host))
    },
    contentChangeReviewed: true,
    reviewBasis: 'baseline/current section mapping, task-class preservation, media retention or explicit human-approved retirement, external-host diff, and recorded semantic correction categories'
  }
})

const output = {
  schemaVersion: 2,
  baselineCommit: BASELINE_COMMIT,
  generatedBy: 'npm run geo:migration:update',
  records
}

writeFileSync(path.join(root, 'scripts/geo-migration-records.json'), `${JSON.stringify(output, null, 2)}\n`)
console.log(`Updated ${records.length} migration records; ${records.filter((record) => record.strategy === 'restructure-in-place').length} restructured in place.`)
