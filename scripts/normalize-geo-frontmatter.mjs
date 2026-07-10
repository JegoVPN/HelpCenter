import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { readJson, walkFiles } from './geo-content.mjs'

const root = process.cwd()
const required = readJson(path.join(root, 'scripts/geo-required-routes.json'))
const catalog = readJson(path.join(root, 'docs/.vitepress/data/tool-catalog.json'))
const toolsBySlug = new Map(catalog.tools.map((tool) => [tool.slug, tool]))
const requiredKeys = new Map()
for (const pair of required.requiredPairs) {
  requiredKeys.set(pair.zh.source, pair.translationKey)
  requiredKeys.set(pair.en.source, pair.translationKey)
}

function normalizedSource(file) {
  return path.relative(root, file).split(path.sep).join('/')
}

function translationKey(source) {
  if (requiredKeys.has(source)) return requiredKeys.get(source)
  const relative = source.replace(/^docs\/en\//, '').replace(/^docs\//, '').replace(/\.md$/, '')
  if (relative === 'index') return 'home'
  return relative.replaceAll('/', '-')
}

function domain(source) {
  const relative = source.replace(/^docs\/en\//, '').replace(/^docs\//, '')
  if (relative === 'index.md') {
    return { contentType: 'home', product: 'both', productArea: 'home', uiSurface: null }
  }
  const [section, filename] = relative.replace(/\.md$/, '').split('/')
  if (section === 'tool') {
    return { contentType: filename === 'index' ? 'overview' : 'tool-guide', product: 'subscription-service', productArea: 'tools', uiSurface: null }
  }
  if (section === 'devices') {
    return { contentType: filename === 'index' ? 'overview' : 'device-guide', product: 'subscription-service', productArea: 'device-selection', uiSurface: null }
  }
  if (section === 'subscription') {
    return {
      contentType: filename === 'management' ? 'subscription-management' : 'overview',
      product: 'subscription-service',
      productArea: 'subscription-management',
      uiSurface: 'control-panel'
    }
  }
  if (section === 'troubleshooting') {
    return { contentType: 'troubleshooting', product: 'both', productArea: 'troubleshooting', uiSurface: null }
  }
  if (section === 'membership') {
    return { contentType: 'billing', product: 'both', productArea: 'account-billing', uiSurface: 'control-panel' }
  }
  if (section === 'abuse' || section === 'policies') {
    return { contentType: 'policy', product: 'general', productArea: 'policies', uiSurface: null }
  }
  if (section === 'guide') {
    const reference = new Set(['encrypted-dns', 'nodes', 'services'])
    const pluginPopup = new Set(['usage', 'mode-selection', 'node-selection', 'plugin-features'])
    const controlPanel = new Set([
      'proxy-strategy',
      'control-panel',
      'network-diagnostics',
      'network-diagnostics-node-speed'
    ])
    let contentType = reference.has(filename) ? 'reference' : 'how-to'
    if (filename === 'overview' || filename === 'plugin-features' || filename === 'control-panel') contentType = 'overview'
    if (filename === 'network-diagnostics' || filename === 'network-diagnostics-node-speed') contentType = 'diagnostic'
    if (filename === 'faq') contentType = 'troubleshooting'
    if (filename === 'support') contentType = 'support'
    return {
      contentType,
      product: reference.has(filename) ? 'general' : 'browser-extension',
      productArea: reference.has(filename)
        ? 'network-reference'
        : filename === 'support' || filename === 'faq'
          ? 'support'
          : filename === 'vibe-coding'
            ? 'scenario-tutorial'
            : 'browser-extension',
      uiSurface: pluginPopup.has(filename) ? 'plugin-popup' : controlPanel.has(filename) ? 'control-panel' : null
    }
  }
  return { contentType: 'overview', product: 'general', productArea: 'general', uiSurface: null }
}

function yamlValue(value) {
  if (value === null) return 'null'
  if (Array.isArray(value)) return `[${value.join(', ')}]`
  return String(value)
}

function explicitMetadata(source) {
  const relative = source.replace(/^docs\/en\//, '').replace(/^docs\//, '').replace(/\.md$/, '')
  const [section, filename] = relative.split('/')
  if (section === 'tool' && filename !== 'index') {
    const tool = toolsBySlug.get(filename)
    if (!tool) throw new Error(`工具 catalog 缺少：${filename}`)
    return {
      tool: filename,
      clientKind: null,
      platforms: tool.platforms,
      minimumOs: [],
      architectures: tool.architectures,
      subscriptionFormats: tool.subscriptionFormats,
      lifecycle: tool.lifecycle,
      recommendation: tool.recommendation,
      securityStatus: tool.securityStatus,
      supportedVersions: tool.supportedVersions,
      replacements: tool.replacements,
      officialSources: tool.officialSources,
      jegoSupport: catalog.jegoSupport[filename],
      lastVerified: tool.lastVerified,
      sources: tool.officialSources
    }
  }
  if (section === 'devices') {
    const platforms = {
      android: ['android'],
      harmony: ['harmonyos'],
      ios: ['ios', 'ipados'],
      linux: ['linux'],
      mac: ['macos'],
      'pc-mobile': ['windows', 'macos', 'linux', 'android', 'ios', 'harmonyos'],
      'us-apple-id': ['ios', 'ipados'],
      windows: ['windows']
    }
    return { platforms: platforms[filename] || [] }
  }
  if (section === 'guide') return { platforms: ['chrome', 'edge'] }
  return {}
}

let changed = 0
for (const file of walkFiles(path.join(root, 'docs')).filter((entry) => entry.endsWith('.md'))) {
  const source = normalizedSource(file)
  const raw = readFileSync(file, 'utf8')
  if (!raw.startsWith('---\n')) throw new Error(`页面缺少 frontmatter：${source}`)
  const end = raw.indexOf('\n---', 4)
  if (end === -1) throw new Error(`frontmatter 未闭合：${source}`)
  const currentFrontmatter = raw.slice(4, end)
  const fields = {
    translationKey: translationKey(source),
    ...domain(source),
    locale: source.startsWith('docs/en/') ? 'en' : 'zh-Hans',
    status: 'current',
    owner: 'docs',
    reviewStatus: 'needs-review',
    lastVerified: null,
    platforms: [],
    tools: /docs\/(?:en\/)?tool\/[^/]+\.md$/.test(source) && !source.endsWith('/index.md')
      ? [path.basename(source, '.md')]
      : [],
    appliesTo: [],
    sources: [],
    ...explicitMetadata(source)
  }
  let nextFrontmatter = currentFrontmatter
  const synchronizedToolFields = new Set([
    'platforms', 'architectures', 'subscriptionFormats', 'lifecycle', 'recommendation', 'securityStatus',
    'supportedVersions', 'replacements', 'officialSources', 'lastVerified', 'sources',
    'jegoSupport'
  ])
  for (const [key, value] of Object.entries(explicitMetadata(source))) {
    const fieldPattern = new RegExp(`^${key}:.*$`, 'm')
    if (synchronizedToolFields.has(key) && /docs\/(?:en\/)?tool\/[^/]+\.md$/.test(source) && fieldPattern.test(nextFrontmatter)) {
      nextFrontmatter = nextFrontmatter.replace(fieldPattern, `${key}: ${yamlValue(value)}`)
    } else if (new RegExp(`^${key}: \\[\\]$`, 'm').test(nextFrontmatter) && Array.isArray(value) && value.length) {
      nextFrontmatter = nextFrontmatter.replace(new RegExp(`^${key}: \\[\\]$`, 'm'), `${key}: ${yamlValue(value)}`)
    }
  }
  const missingLines = Object.entries(fields)
    .filter(([key]) => !new RegExp(`^${key}:`, 'm').test(currentFrontmatter))
    .map(([key, value]) => `${key}: ${yamlValue(value)}`)
  if (!missingLines.length && nextFrontmatter === currentFrontmatter) continue
  const next = `---\n${missingLines.join('\n')}${missingLines.length ? '\n' : ''}${nextFrontmatter}${raw.slice(end)}`
  writeFileSync(file, next)
  changed += 1
}

console.log(`Normalized GEO frontmatter in ${changed} file(s).`)
