import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { homedir, tmpdir, userInfo } from 'node:os'
import path from 'node:path'
import { pageRecord, parseFrontmatter, walkFiles } from './geo-content.mjs'
import { canonicalizeRoute, LEGACY_ROUTE_PAIRS, TOOL_SLUGS } from './subscription-route-map.mjs'

const root = process.cwd()
const dist = path.join(root, 'docs/.vitepress/dist')
const origin = 'https://help.jegovpn.com'
const errors = []
const platformLabels = JSON.parse(readFileSync(path.join(root, 'docs/.vitepress/data/platform-labels.json'), 'utf8'))
const navigationSource = readFileSync(path.join(root, 'docs/.vitepress/navigation.ts'), 'utf8')
const sidebarLabels = new Map(
  [...navigationSource.matchAll(/\{\s*text:\s*(['"])(.*?)\1,\s*link:\s*(['"])(.*?)\3\s*\}/g)]
    .map((match) => [match[4], match[2]])
)

function fail(message) {
  errors.push(message)
}

function absolute(route) {
  return new URL(route, origin).href
}

function languageRoutes(route) {
  const isEnglish = route === '/en/' || route.startsWith('/en/')
  const zh = isEnglish ? route.replace(/^\/en(?=\/)/, '') : route
  const en = isEnglish ? route : route === '/' ? '/en/' : `/en${route}`
  return { zh: zh || '/', en }
}

function htmlPath(route) {
  if (route === '/') return path.join(dist, 'index.html')
  if (route.endsWith('/')) return path.join(dist, route.replace(/^\//, ''), 'index.html')
  return path.join(dist, `${route.replace(/^\//, '')}.html`)
}

function cleanPageTitle(title) {
  return title
    .replace(/^✨\s*/, '')
    .replace(/\s+-\s+(?:使用指南|工具软件|会员服务|使用条款|设备支持|iOS\/iPadOS)$/i, '')
    .replace(/\s+-\s+(?:User Guide|Tools & Software|Membership Service|Terms of Use|Device Support|iOS\/iPadOS)$/i, '')
    .trim()
}

function escapeHtmlText(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function attributes(tag) {
  const result = {}
  for (const match of tag.matchAll(/([:\w-]+)=(?:"([^"]*)"|'([^']*)')/g)) {
    result[match[1]] = match[2] ?? match[3]
  }
  return result
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((match) => attributes(match[0]))
}

function visibleTextLength(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&\w+;|&#\d+;/g, ' ')
    .replace(/\s+/g, '')
    .length
}

function scanBuildPrivacy() {
  let remote = ''
  try {
    remote = execFileSync('git', ['remote', 'get-url', 'origin'], { cwd: root, encoding: 'utf8' }).trim()
  } catch {}
  const tokens = [
    { value: root, category: 'workspace-path' },
    { value: homedir(), category: 'home-path' },
    { value: tmpdir(), category: 'temporary-path' },
    { value: userInfo().username, category: 'local-username' },
    { value: remote, category: 'raw-remote-url' }
  ].filter((token, index, all) =>
    token.value && token.value.length >= 3 && all.findIndex((entry) => entry.value === token.value) === index
  )
  for (const file of walkFiles(dist)) {
    const buffer = readFileSync(file)
    if (buffer.includes(0)) continue
    const lines = buffer.toString('utf8').split(/\r?\n/)
    for (const token of tokens) {
      const index = lines.findIndex((line) => line.includes(token.value))
      if (index >= 0) {
        fail(`构建产物隐私 deny token：${path.relative(dist, file)}:${index + 1} (${token.category})`)
      }
    }
  }
}

function scanBuildPublicationRisks() {
  const patterns = [
    ['公开页面内部治理语言', /机器可读|状态语义|数据接收方|发布阻断|owner-confirmed|machine-readable|status semantics|publication blocked/i]
  ]
  for (const file of walkFiles(dist)) {
    const buffer = readFileSync(file)
    if (buffer.includes(0)) continue
    const text = buffer.toString('utf8')
    for (const [category, pattern] of patterns) {
      if (pattern.test(text)) fail(`构建产物含高风险元数据：${path.relative(dist, file)} (${category})`)
    }
  }
}

if (!existsSync(dist)) fail('构建目录不存在；请先运行 npm run docs:build')

const sources = walkFiles(path.join(root, 'docs'))
  .filter((file) => file.endsWith('.md'))
  .map((file) => path.relative(root, file))
const pages = sources.map((source) => {
  const raw = readFileSync(path.join(root, source), 'utf8')
  const record = pageRecord(source, raw)
  return { ...record, frontmatter: parseFrontmatter(raw), route: canonicalizeRoute(record.route) }
})
const routeSet = new Set(pages.map((page) => page.route))
const htmlByRoute = new Map()

for (const page of pages) {
  const output = htmlPath(page.route)
  if (!existsSync(output)) {
    fail(`正式路由没有构建产物：${page.route}`)
    continue
  }
  const html = readFileSync(output, 'utf8')
  htmlByRoute.set(page.route, html)
  const links = tags(html, 'link')
  const metas = tags(html, 'meta')
  const canonicals = links.filter((link) => link.rel === 'canonical')
  const alternates = links.filter((link) => link.rel === 'alternate' && link.hreflang)
  const descriptions = metas.filter((meta) => meta.name === 'description')
  const expectedCanonical = absolute(page.route)
  const expectedLanguages = languageRoutes(page.route)

  if (canonicals.length !== 1 || canonicals[0].href !== expectedCanonical) {
    fail(`canonical 不唯一或不正确：${page.route}`)
  }
  for (const [hreflang, href] of [
    ['zh-Hans', absolute(expectedLanguages.zh)],
    ['en', absolute(expectedLanguages.en)],
    ['x-default', absolute(expectedLanguages.zh)]
  ]) {
    const matches = alternates.filter((link) => link.hreflang === hreflang && link.href === href)
    if (matches.length !== 1) fail(`hreflang ${hreflang} 缺失或不唯一：${page.route}`)
  }
  const expectedLang = page.locale === 'en' ? 'en' : 'zh-Hans'
  if (!new RegExp(`<html\\s+lang="${expectedLang}"`).test(html)) fail(`HTML lang 错误：${page.route}`)
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`title 缺失：${page.route}`)
  if (descriptions.length !== 1 || !descriptions[0].content?.trim()) fail(`description 缺失：${page.route}`)
  if ((html.match(/<h1\b/g) || []).length !== 1) fail(`H1 不唯一：${page.route}`)
  if ((!/<main\b/.test(html) && !/class="VPHome\b/.test(html)) || visibleTextLength(html) < 80) {
    fail(`静态正文不足：${page.route}`)
  }
  if (/noindex|nosnippet|noarchive/i.test(html)) fail(`存在意外索引限制：${page.route}`)
  if (page.route !== '/' && page.route !== '/en/') {
    const expectedBreadcrumb = sidebarLabels.get(page.route) || cleanPageTitle(page.title)
    const escapedBreadcrumb = escapeHtmlText(expectedBreadcrumb).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    if (!new RegExp(`<span aria-current="page">${escapedBreadcrumb}<\\/span>`).test(html)) {
      fail(`可见面包屑与侧边栏或页面短名称不一致：${page.route}`)
    }
  }
  if (page.frontmatter.platforms?.length) {
    const expectedPlatforms = page.frontmatter.platforms.map((platform) => platformLabels[platform]).join(' · ')
    const escapedPlatforms = expectedPlatforms.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    if (!new RegExp(`<dt>${page.locale === 'en' ? 'Applies to' : '适用平台'}<\\/dt><dd>${escapedPlatforms}<\\/dd>`).test(html)) {
      fail(`可见平台名称未使用正式大小写：${page.route}`)
    }
  }

  const jsonScripts = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)]
  if (jsonScripts.length !== 1) {
    fail(`JSON-LD 数量不是 1：${page.route}`)
    continue
  }
  try {
    const data = JSON.parse(jsonScripts[0][1])
    const graph = data['@graph'] || []
    for (const type of ['Organization', 'WebSite', 'BreadcrumbList']) {
      if (!graph.some((node) => node['@type'] === type)) fail(`JSON-LD 缺少 ${type}：${page.route}`)
    }
    const breadcrumbNode = graph.find((node) => node['@type'] === 'BreadcrumbList')
    if (page.route !== '/' && page.route !== '/en/') {
      const expectedBreadcrumb = sidebarLabels.get(page.route) || cleanPageTitle(page.title)
      if (breadcrumbNode?.itemListElement?.at(-1)?.name !== expectedBreadcrumb) {
        fail(`JSON-LD 面包屑与可见短名称不一致：${page.route}`)
      }
    }
    const pageNode = graph.find((node) => ['TechArticle', 'WebPage'].includes(node['@type']))
    if (!pageNode) fail(`JSON-LD 缺少页面实体：${page.route}`)
    else {
      if (pageNode.url !== expectedCanonical || pageNode.mainEntityOfPage?.['@id'] !== expectedCanonical) {
        fail(`JSON-LD 页面 URL 不一致：${page.route}`)
      }
      if (pageNode.inLanguage !== expectedLang) fail(`JSON-LD inLanguage 错误：${page.route}`)
      if (!pageNode.headline || !pageNode.description) fail(`JSON-LD 标题或摘要缺失：${page.route}`)
      if (!pageNode.dateModified) fail(`JSON-LD dateModified 缺失：${page.route}`)
    }
    const faqNodes = graph.filter((node) => node['@type'] === 'FAQPage')
    const isFaq = page.route === '/guide/faq' || page.route === '/en/guide/faq'
    if (isFaq && (faqNodes.length !== 1 || faqNodes[0].mainEntity?.length < 5)) {
      fail(`真实常见问题页面缺少五项 FAQPage 问答：${page.route}`)
    }
    if (!isFaq && faqNodes.length) fail(`非 FAQ 页面生成了 FAQPage：${page.route}`)
  } catch {
    fail(`JSON-LD 无法解析：${page.route}`)
  }
}

const adjacency = new Map(pages.map((page) => [page.route, new Set()]))
for (const page of pages) {
  const html = htmlByRoute.get(page.route)
  if (!html) continue
  for (const anchor of tags(html, 'a')) {
    if (!anchor.href) continue
    let url
    try {
      url = new URL(anchor.href, absolute(page.route))
    } catch {
      fail(`无法解析链接：${page.route}`)
      continue
    }
    if (url.origin !== origin) continue
    let targetRoute = decodeURIComponent(url.pathname).replace(/\.html$/, '')
    if (!routeSet.has(targetRoute) && routeSet.has(`${targetRoute}/`)) targetRoute = `${targetRoute}/`
    if (!routeSet.has(targetRoute) && targetRoute !== '/') {
      fail(`构建产物内部链接失效：${page.route} -> ${targetRoute}`)
      continue
    }
    adjacency.get(page.route).add(targetRoute)
    if (url.hash) {
      const fragment = decodeURIComponent(url.hash.slice(1))
      const targetHtml = htmlByRoute.get(targetRoute)
      const ids = new Set([...(targetHtml || '').matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]))
      if (!ids.has(fragment)) fail(`跨页或页内锚点失效：${page.route} -> ${targetRoute}#${fragment}`)
    }
  }
}

function reachableFrom(start) {
  const seen = new Set([start])
  const queue = [start]
  while (queue.length) {
    const current = queue.shift()
    for (const target of adjacency.get(current) || []) {
      if (!seen.has(target)) {
        seen.add(target)
        queue.push(target)
      }
    }
  }
  return seen
}

for (const [start, localePrefix] of [['/', 'zh-Hans'], ['/en/', 'en']]) {
  const reachable = reachableFrom(start)
  const expected = pages.filter((page) => page.locale === localePrefix)
  for (const page of expected) {
    if (!reachable.has(page.route)) fail(`页面无法从语言首页通过标准链接到达：${page.route}`)
  }
}

const requiredRelationships = [
  ['/guide/plugin-features', ['/guide/mode-selection', '/guide/node-selection', '/guide/proxy-strategy', '/guide/network-diagnostics', '/guide/network-diagnostics-node-speed']],
  ['/en/guide/plugin-features', ['/en/guide/mode-selection', '/en/guide/node-selection', '/en/guide/proxy-strategy', '/en/guide/network-diagnostics', '/en/guide/network-diagnostics-node-speed']],
  ['/guide/network-diagnostics', ['/guide/proxy-strategy']],
  ['/en/guide/network-diagnostics', ['/en/guide/proxy-strategy']],
  ['/guide/network-diagnostics-node-speed', ['/guide/network-diagnostics', '/guide/node-selection', '/guide/faq', '/guide/support']],
  ['/en/guide/network-diagnostics-node-speed', ['/en/guide/network-diagnostics', '/en/guide/node-selection', '/en/guide/faq', '/en/guide/support']],
  ['/guide/proxy-strategy', ['/guide/network-diagnostics']],
  ['/en/guide/proxy-strategy', ['/en/guide/network-diagnostics']],
  ['/subscription/', ['/subscription/devices/windows', '/subscription/devices/mac', '/subscription/devices/ios', '/subscription/devices/android', '/subscription/devices/linux', '/subscription/devices/harmony']],
  ['/en/subscription/', ['/en/subscription/devices/windows', '/en/subscription/devices/mac', '/en/subscription/devices/ios', '/en/subscription/devices/android', '/en/subscription/devices/linux', '/en/subscription/devices/harmony']]
]
for (const [source, targets] of requiredRelationships) {
  for (const target of targets) {
    if (!adjacency.get(source)?.has(target)) fail(`必需双向/上下文链接缺失：${source} -> ${target}`)
  }
}

for (const slug of TOOL_SLUGS) {
  if (!adjacency.get(`/subscription/clients/${slug}`)?.has('/subscription/')) fail(`中文工具页缺少订阅入口：${slug}`)
  if (!adjacency.get(`/en/subscription/clients/${slug}`)?.has('/en/subscription/')) fail(`英文工具页缺少订阅入口：${slug}`)
}

for (const [legacy, canonical] of LEGACY_ROUTE_PAIRS) {
  const output = htmlPath(legacy)
  if (!existsSync(output)) {
    fail(`基线旧路由缺少兼容产物：${legacy}`)
    continue
  }
  const html = readFileSync(output, 'utf8')
  if (!html.includes(`https://help.jegovpn.com${canonical}`) || !html.includes(`location.replace(${JSON.stringify(canonical)}`)) {
    fail(`基线旧路由跳转目标错误：${legacy} -> ${canonical}`)
  }
}

const robotsPath = path.join(dist, 'robots.txt')
if (!existsSync(robotsPath)) fail('robots.txt 未进入构建产物')
else {
  const robots = readFileSync(robotsPath, 'utf8')
  for (const agent of ['OAI-SearchBot', 'Claude-SearchBot', 'Googlebot', 'Bingbot', 'PerplexityBot']) {
    if (!new RegExp(`User-agent:\\s*${agent}[\\s\\S]*?Allow:\\s*\\/`, 'i').test(robots)) {
      fail(`robots.txt 未明确允许 ${agent}`)
    }
  }
  if (!robots.includes('Sitemap: https://help.jegovpn.com/sitemap.xml')) fail('robots.txt 缺少 sitemap 入口')
}

if (existsSync(dist)) {
  scanBuildPrivacy()
  scanBuildPublicationRisks()
}

const sitemapPath = path.join(dist, 'sitemap.xml')
if (!existsSync(sitemapPath)) fail('sitemap.xml 未进入构建产物')
else {
  const sitemap = readFileSync(sitemapPath, 'utf8')
  const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1])
  const byLocation = new Map(urlBlocks.map((block) => [block.match(/<loc>([^<]+)<\/loc>/)?.[1], block]))
  for (const page of pages) {
    const location = absolute(page.route)
    const block = byLocation.get(location)
    if (!block) {
      fail(`sitemap 缺少路由：${page.route}`)
      continue
    }
    if (!/hreflang="x-default"/.test(block)) fail(`sitemap 缺少 x-default：${page.route}`)
  }
  if (byLocation.size !== pages.length) fail(`sitemap URL 数 ${byLocation.size} 与正式页面数 ${pages.length} 不一致`)
}

if (errors.length) {
  for (const message of errors) console.error(`FAIL ${message}`)
  console.error(`\nGEO build verification failed with ${errors.length} error(s).`)
  process.exit(1)
}

console.log(`PASS ${pages.length} 个正式路由均具有 2xx 对应产物、静态正文和唯一 H1`)
console.log('PASS canonical、zh-Hans/en/x-default hreflang、语言和 JSON-LD 均逐页一致')
console.log('PASS robots.txt 与 sitemap.xml 构建入口有效')
console.log('PASS 构建产物隐私 deny tokens 为 0')
console.log('PASS 构建产物站点级高风险元数据为 0')
console.log('\nGEO build verification passed.')
