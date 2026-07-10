import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { homedir, tmpdir, userInfo } from 'node:os'
import path from 'node:path'
import {
  BASELINE_COMMIT,
  TOOL_SLUGS,
  extractLocalMedia,
  extractHeadings,
  hashText,
  pageRecord,
  parseFrontmatter,
  readJson,
  routeFromSource,
  splitFrontmatter,
  walkFiles
} from './geo-content.mjs'
import { canonicalizeRoute, LEGACY_ROUTE_PAIRS } from './subscription-route-map.mjs'

const root = process.cwd()
const baselineMode = process.argv.includes('--baseline')
const errors = []
const notes = []

function fail(message) {
  errors.push(message)
}

function pass(message) {
  notes.push(message)
}

function gitShow(source) {
  return execFileSync('git', ['show', `${BASELINE_COMMIT}:${source}`], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024
  })
}

function sameArray(left, right) {
  return JSON.stringify(left || []) === JSON.stringify(right || [])
}

function extractInternalLinks(raw) {
  const links = new Set()
  for (const match of raw.matchAll(/(?<!!)\[[^\]]*\]\(\s*<?([^\s)>]+)>?(?:\s+["'][^"']*["'])?\s*\)/g)) {
    links.add(match[1])
  }
  for (const match of raw.matchAll(/<a\b[^>]*?\bhref\s*=\s*["']([^"']+)["']/gi)) links.add(match[1])
  return [...links]
}

function resolveInternalRoute(link, currentRoute, routeSet) {
  if (!link || /^(?:[a-z]+:|\/\/)/i.test(link)) return null
  const url = new URL(link, `https://local.invalid${currentRoute}`)
  let route = decodeURIComponent(url.pathname).replace(/\.(?:md|html)$/, '')
  if (!route.startsWith('/')) route = `/${route}`
  if (routeSet.has(route)) return { route, fragment: url.hash.slice(1) }
  if (routeSet.has(`${route}/`)) return { route: `${route}/`, fragment: url.hash.slice(1) }
  if (route !== '/' && route.endsWith('/') && routeSet.has(route.slice(0, -1))) {
    return { route: route.slice(0, -1), fragment: url.hash.slice(1) }
  }
  return { route, fragment: url.hash.slice(1) }
}

function scanPrivacyDenyTokens() {
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
  const output = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024
  })
  const files = output.split('\0').filter(Boolean).filter((file) =>
    !file.startsWith('node_modules/') &&
    !file.startsWith('docs/.vitepress/dist/') &&
    !file.startsWith('docs/.vitepress/cache/')
  )
  for (const file of files) {
    const absolute = path.join(root, file)
    if (!existsSync(absolute)) continue
    const buffer = readFileSync(absolute)
    if (buffer.includes(0)) continue
    const lines = buffer.toString('utf8').split(/\r?\n/)
    for (const token of tokens) {
      const index = lines.findIndex((line) => line.includes(token.value))
      if (index >= 0) fail(`隐私 deny token：${file}:${index + 1} (${token.category})`)
    }
  }
}

const baselinePath = path.join(root, 'scripts/geo-baseline.json')
const requiredPath = path.join(root, 'scripts/geo-required-routes.json')

if (!existsSync(baselinePath)) fail('缺少 scripts/geo-baseline.json')
if (!existsSync(requiredPath)) fail('缺少 scripts/geo-required-routes.json')

const baseline = existsSync(baselinePath) ? readJson(baselinePath) : null
const required = existsSync(requiredPath) ? readJson(requiredPath) : null

if (baseline) {
  if (baseline.baselineCommit !== BASELINE_COMMIT) fail('基线 commit 与实施契约不一致')
  const expected = {
    markdownPages: 92,
    zhPages: 46,
    enPages: 46,
    bilingualPairs: 46,
    zhToolPages: 18,
    enToolPages: 18,
    publicAssets: 333,
    referencedMedia: 264,
    toolReferencedMedia: 124
  }
  for (const [key, value] of Object.entries(expected)) {
    if (baseline.invariants?.[key] !== value) {
      fail(`基线 ${key} 应为 ${value}，实际为 ${baseline.invariants?.[key]}`)
    }
  }

  for (const page of baseline.pages || []) {
    const absolute = path.join(root, page.source)
    if (!existsSync(absolute)) {
      fail(`基线页面缺失：${page.source}`)
      continue
    }
    const committedHash = hashText(gitShow(page.source))
    if (committedHash !== page.sha256) fail(`基线清单内容哈希不可信：${page.source}`)

    const currentRaw = readFileSync(absolute, 'utf8')
    const current = pageRecord(page.source, currentRaw)
    if (current.route !== page.route) fail(`基线路由发生变化：${page.route}`)
    if (page.source.includes('/tool/') && current.h1 !== page.h1) {
      fail(`工具页 H1 发生变化：${page.source}`)
    }
    for (const media of page.media) {
      if (!current.media.includes(media)) fail(`基线媒体引用被移除：${page.source} -> ${media}`)
    }
    if (current.contentLength < page.contentLength * 0.75) {
      fail(`基线正文长度下降超过 25%：${page.source}`)
    }
  }

  for (const asset of baseline.publicAssets || []) {
    if (!existsSync(path.join(root, asset))) fail(`基线公开资产缺失：${asset}`)
  }

  for (const media of baseline.referencedMedia || []) {
    if (!existsSync(path.join(root, 'docs/public', media.replace(/^\//, '')))) {
      fail(`基线媒体路径失效：${media}`)
    }
  }

  for (const slug of TOOL_SLUGS) {
    for (const source of [`docs/tool/${slug}.md`, `docs/en/tool/${slug}.md`]) {
      if (!existsSync(path.join(root, source))) fail(`基线工具页缺失：${source}`)
    }
  }
  pass(`不可变基线：${baseline.pages?.length || 0} 页、${baseline.pairs?.length || 0} 对映射、${baseline.publicAssets?.length || 0} 个公开资产`)
}

if (required) {
  const pairs = required.requiredPairs || []
  if (pairs.length !== 9) fail(`mandatory route manifest 必须有 9 对，实际为 ${pairs.length}`)
  const keys = new Set()
  const sources = new Set()
  const routes = new Set()
  for (const pair of pairs) {
    if (!pair.translationKey || keys.has(pair.translationKey)) fail('mandatory translationKey 缺失或重复')
    keys.add(pair.translationKey)
    for (const locale of ['zh', 'en']) {
      const item = pair[locale]
      if (!item?.source?.endsWith('.md') || !item?.route?.startsWith('/')) {
        fail(`mandatory route 条目格式无效：${pair.translationKey}/${locale}`)
        continue
      }
      if (sources.has(item.source)) fail(`mandatory source 重复：${item.source}`)
      if (routes.has(item.route)) fail(`mandatory route 重复：${item.route}`)
      sources.add(item.source)
      routes.add(item.route)
      if (!baselineMode && !existsSync(path.join(root, item.source))) {
        fail(`mandatory 页面缺失：${item.source}`)
      }
    }
  }
  if (sources.size !== 18 || routes.size !== 18) fail('mandatory route manifest 必须固定 18 个唯一源文件和路由')
  pass(`mandatory route manifest：${pairs.length} 对、${sources.size} 个源文件、${routes.size} 条路由`)
}

const markdownFiles = walkFiles(path.join(root, 'docs'))
  .filter((file) => file.endsWith('.md'))
  .map((file) => path.relative(root, file))
const allMedia = new Set()
for (const source of markdownFiles) {
  const raw = readFileSync(path.join(root, source), 'utf8')
  for (const media of extractLocalMedia(raw)) allMedia.add(media)
}
for (const media of allMedia) {
  if (!existsSync(path.join(root, 'docs/public', media.replace(/^\//, '')))) {
    fail(`当前媒体路径失效：${media}`)
  }
}
pass(`当前源内容：${markdownFiles.length} 个 Markdown；${allMedia.size} 个独立本地媒体引用均存在`)

if (!baselineMode) {
  if (markdownFiles.length < 110) fail(`正式 Markdown 不得少于 110，实际为 ${markdownFiles.length}`)
  const requiredFields = [
    'title', 'description', 'translationKey', 'contentType', 'product', 'productArea', 'uiSurface',
    'locale', 'status', 'owner', 'reviewStatus', 'lastVerified', 'platforms', 'tools', 'appliesTo', 'sources'
  ]
  const contentTypes = new Set([
    'home', 'overview', 'feature-overview', 'how-to', 'diagnostic', 'subscription-management',
    'device-guide', 'tool-guide', 'troubleshooting', 'reference', 'billing', 'policy', 'support'
  ])
  const products = new Set(['browser-extension', 'subscription-service', 'both', 'general'])
  const statuses = new Set(['current', 'experimental', 'not-recommended', 'discontinued'])
  const reviewStatuses = new Set(['verified', 'needs-review', 'blocked'])
  const pages = markdownFiles.map((source) => {
    const raw = readFileSync(path.join(root, source), 'utf8')
    const record = pageRecord(source, raw)
    return {
      source,
      raw,
      frontmatter: parseFrontmatter(raw),
      record: { ...record, route: canonicalizeRoute(record.route) }
    }
  })
  const routeSet = new Set(pages.map((page) => page.record.route))
  const routeSources = new Map(pages.map((page) => [page.record.route, page.source]))
  const translationGroups = new Map()

  for (const page of pages) {
    for (const field of requiredFields) {
      if (!(field in page.frontmatter) || page.frontmatter[field] === '') fail(`frontmatter 缺少 ${field}：${page.source}`)
    }
    if (!contentTypes.has(page.frontmatter.contentType)) fail(`contentType 非法：${page.source}`)
    if (!products.has(page.frontmatter.product)) fail(`product 非法：${page.source}`)
    if (!statuses.has(page.frontmatter.status)) fail(`status 非法：${page.source}`)
    if (!reviewStatuses.has(page.frontmatter.reviewStatus)) fail(`reviewStatus 非法：${page.source}`)
    if (page.frontmatter.locale !== page.record.locale) fail(`locale 与路径不一致：${page.source}`)
    if (!Array.isArray(page.frontmatter.platforms) || !Array.isArray(page.frontmatter.sources)) {
      fail(`platforms/sources 必须是数组：${page.source}`)
    }
    const headings = extractHeadings(page.raw).filter((heading) => heading.level === 1)
    if (page.frontmatter.contentType !== 'home' && headings.length !== 1) fail(`源文件 H1 不唯一：${page.source}`)
    if (/^\s*(?:redirect|redirects):/m.test(splitFrontmatter(page.raw).frontmatterRaw)) fail(`页面不得是 redirect：${page.source}`)
    if (page.record.contentLength < 220) fail(`正文过薄：${page.source}`)

    const group = translationGroups.get(page.frontmatter.translationKey) || []
    group.push(page)
    translationGroups.set(page.frontmatter.translationKey, group)
  }

  for (const [key, group] of translationGroups) {
    const locales = new Set(group.map((page) => page.frontmatter.locale))
    if (group.length !== 2 || !locales.has('zh-Hans') || !locales.has('en')) {
      fail(`translationKey 未形成唯一中英对：${key}`)
    }
  }
  if (translationGroups.size < 55) fail(`双语关系不得少于 55 对，实际为 ${translationGroups.size}`)

  for (const page of pages) {
    for (const link of extractInternalLinks(page.raw)) {
      const target = resolveInternalRoute(link, page.record.route, routeSet)
      if (target && !routeSet.has(target.route)) fail(`内部页面链接失效：${page.source} -> ${target.route}`)
    }
  }

  if (required) {
    for (const pair of required.requiredPairs) {
      for (const locale of ['zh', 'en']) {
        const item = pair[locale]
        const page = pages.find((entry) => entry.source === item.source)
        if (!page || page.frontmatter.translationKey !== pair.translationKey || page.record.route !== item.route) {
          fail(`mandatory 页面元数据不一致：${pair.translationKey}/${locale}`)
        } else if (
          extractInternalLinks(page.raw).filter((link) => link.startsWith('/')).length <
          (pair.translationKey === 'network-diagnostics'
            ? 1
            : pair.translationKey === 'network-diagnostics-node-speed'
              ? 2
              : 3)
        ) {
          fail(`mandatory 页面缺少任务分流与相关链接：${item.source}`)
        }
      }
    }
  }

  const catalogPath = path.join(root, 'docs/.vitepress/data/tool-catalog.json')
  if (!existsSync(catalogPath)) fail('缺少唯一工具 catalog')
  else {
    const catalog = readJson(catalogPath)
    const slugs = catalog.tools?.map((tool) => tool.slug) || []
    if (slugs.length !== 18 || new Set(slugs).size !== 18 || !sameArray([...slugs].sort(), [...TOOL_SLUGS].sort())) {
      fail('工具 catalog 必须且只能包含 18 个基线 slug')
    }
    const lifecycleValues = new Set(['current', 'experimental', 'not-recommended', 'discontinued', null])
    const recommendationValues = new Set(['recommended', 'advanced', 'not-recommended', null])
    const securityValues = new Set(['verified', 'needs-review', 'blocked'])
    const supportValues = new Set(['supported', 'experimental', 'unsupported'])
    const supportEntries = Object.entries(catalog.jegoSupport || {})
    if (supportEntries.length !== 18 || new Set(supportEntries.map(([slug]) => slug)).size !== 18) {
      fail('工具 catalog 的 Jego 支持状态必须覆盖 18 个 slug')
    }
    for (const [slug, value] of supportEntries) {
      if (!TOOL_SLUGS.includes(slug) || !supportValues.has(value)) fail(`Jego 支持状态非法：${slug}`)
    }
    for (const slug of ['v2rayn', 'v2rayng', 'loon', 'oneclick']) {
      const tool = catalog.tools?.find((entry) => entry.slug === slug)
      if (catalog.jegoSupport?.[slug] !== 'unsupported' || tool?.recommendation !== 'not-recommended') {
        fail(`已确认的 Jego 不支持状态发生回退：${slug}`)
      }
      for (const locale of ['zh', 'en']) {
        const source = `docs/${locale === 'en' ? 'en/' : ''}tool/${slug}.md`
        const page = pages.find((entry) => entry.source === source)
        const description = String(page?.frontmatter.description || '')
        const statesUnsupported = locale === 'en' ? /Jego no longer supports/i.test(description) : /Jego 已不再支持/.test(description)
        if (!statesUnsupported || !/historical|历史/.test(description)) {
          fail(`已确认不支持工具的搜索摘要未说明历史状态：${source}`)
        }
      }
    }
    for (const tool of catalog.tools || []) {
      if (!lifecycleValues.has(tool.lifecycle)) fail(`工具 lifecycle 非法：${tool.slug}`)
      if (!recommendationValues.has(tool.recommendation)) fail(`工具 recommendation 非法：${tool.slug}`)
      if (!securityValues.has(tool.securityStatus)) fail(`工具 securityStatus 非法：${tool.slug}`)
      if (!Array.isArray(tool.platforms) || !Array.isArray(tool.subscriptionFormats)) fail(`工具平台/格式必须是数组：${tool.slug}`)
      if (tool.recommendation === 'recommended' && catalog.jegoSupport?.[tool.slug] !== 'supported') {
        fail(`推荐工具必须是 Jego 当前支持状态：${tool.slug}`)
      }
      for (const replacement of tool.replacements || []) {
        if (!TOOL_SLUGS.includes(replacement) || replacement === tool.slug) fail(`工具替代项非法：${tool.slug}`)
      }
      for (const locale of ['zh', 'en']) {
        const source = `docs/${locale === 'en' ? 'en/' : ''}tool/${tool.slug}.md`
        const page = pages.find((entry) => entry.source === source)
        if (!page) continue
        for (const field of [
          'tool', 'clientKind', 'minimumOs', 'architectures', 'subscriptionFormats', 'lifecycle',
          'recommendation', 'securityStatus', 'supportedVersions', 'replacements', 'officialSources',
          'jegoSupport'
        ]) {
          if (!(field in page.frontmatter)) fail(`工具页缺少 ${field}：${source}`)
        }
        for (const field of ['platforms', 'architectures', 'subscriptionFormats', 'supportedVersions', 'replacements', 'officialSources']) {
          if (!sameArray(page.frontmatter[field], tool[field])) fail(`工具页与 catalog 的 ${field} 不一致：${source}`)
        }
        for (const field of ['lifecycle', 'recommendation', 'securityStatus']) {
          if (page.frontmatter[field] !== tool[field]) fail(`工具页与 catalog 的 ${field} 不一致：${source}`)
        }
        if (page.frontmatter.jegoSupport !== catalog.jegoSupport[tool.slug]) {
          fail(`工具页与 catalog 的 Jego 支持状态不一致：${source}`)
        }
      }
    }
  }

  const deviceCatalogPages = {
    'docs/devices/android.md': ['zh', 'android'],
    'docs/en/devices/android.md': ['en', 'android'],
    'docs/devices/ios.md': ['zh', 'ios'],
    'docs/en/devices/ios.md': ['en', 'ios'],
    'docs/devices/mac.md': ['zh', 'macos'],
    'docs/en/devices/mac.md': ['en', 'macos'],
    'docs/devices/linux.md': ['zh', 'linux'],
    'docs/en/devices/linux.md': ['en', 'linux'],
    'docs/devices/harmony.md': ['zh', 'harmonyos'],
    'docs/en/devices/harmony.md': ['en', 'harmonyos']
  }
  for (const [source, [locale, platform]] of Object.entries(deviceCatalogPages)) {
    const page = pages.find((entry) => entry.source === source)
    if (!page) continue
    const expected = platform
      ? `<ToolCatalog locale="${locale}" platform="${platform}" recommended-only />`
      : `<ToolCatalog locale="${locale}" />`
    if (!page.raw.includes(expected)) fail(`设备页未从唯一 catalog 渲染：${source}`)
    if (/推荐使用下列软件|### Recommended Software|\*\*Recommended\*\*/.test(page.raw)) {
      fail(`设备页仍含第二份手工推荐表：${source}`)
    }
  }
  for (const [source, headings] of [
    ['docs/devices/windows.md', ['### 推荐客户端', '### 其他客户端', '### 历史教程']],
    ['docs/en/devices/windows.md', ['### Recommended clients', '### Other clients', '### Historical guides']]
  ]) {
    const raw = pages.find((entry) => entry.source === source)?.raw || ''
    if (/<details class="subscription-more-clients">|<ToolCatalog\b/.test(raw) || !headings.every((heading) => raw.includes(heading))) {
      fail(`Windows 设备页必须使用直接展开的分组列表，不得恢复折叠区或工具表格：${source}`)
    }
    if (raw.indexOf('subscription/clients/flclash') > raw.indexOf('subscription/clients/clashverge')) {
      fail(`Windows 推荐客户端必须将 FlClash 放在第一项：${source}`)
    }
  }

  const removedDraftPages = [
    'docs/subscription/index.md',
    'docs/en/subscription/index.md',
    'docs/subscription/management.md',
    'docs/en/subscription/management.md',
    'docs/devices/index.md',
    'docs/en/devices/index.md',
    'docs/tool/index.md',
    'docs/en/tool/index.md'
  ]
  for (const source of removedDraftPages) {
    if (existsSync(path.join(root, source))) fail(`未发布的重复入口必须删除：${source}`)
  }

  if (LEGACY_ROUTE_PAIRS.length !== 52) fail(`基线订阅旧路由兼容映射必须为 52 条，实际为 ${LEGACY_ROUTE_PAIRS.length}`)
  for (const [legacy, canonical] of LEGACY_ROUTE_PAIRS) {
    if (!/^\/(?:en\/)?(?:devices|tool)\//.test(legacy)) fail(`旧路由映射超出基线范围：${legacy}`)
    if (!/^\/(?:en\/)?subscription\//.test(canonical)) fail(`订阅正式路由未统一：${canonical}`)
  }

  for (const [source, locale] of [
    ['docs/devices/pc-mobile.md', 'zh-Hans'],
    ['docs/en/devices/pc-mobile.md', 'en']
  ]) {
    const page = pages.find((entry) => entry.source === source)
    if (!page) continue
    const expectedRoute = locale === 'en' ? '/en/subscription/' : '/subscription/'
    if (page.record.route !== expectedRoute) fail(`订阅入口正式路由不正确：${source} -> ${page.record.route}`)
    const { body } = splitFrontmatter(page.raw)
    const h2 = [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((match) => match[1].trim())
    const expectedHeadings = locale === 'en'
      ? ['Install by device', 'Avoid conflicts between the extension and client']
      : ['按设备安装', '避免浏览器插件和客户端冲突']
    if (h2.join('|') !== expectedHeadings.join('|')) fail(`订阅入口职责未收敛：${source}`)
    if (/<ToolCatalog\b/.test(body)) fail(`订阅入口不得展示客户端大列表：${source}`)
    const devicePrefix = locale === 'en' ? '/en/subscription/devices/' : '/subscription/devices/'
    for (const slug of ['windows', 'mac', 'ios', 'android', 'linux', 'harmony']) {
      if (!body.includes(`${devicePrefix}${slug}`)) fail(`订阅入口缺少设备入口 ${slug}：${source}`)
    }
    const guideLabel = locale === 'en' ? '<span>Proxy guide</span>' : '<span>翻墙指南</span>'
    if (body.split(guideLabel).length !== 7) fail(`六个设备入口必须明确标为翻墙指南：${source}`)
    if (/站内搜索仍可以直接找到现有的 18 篇客户端教程|Site search can still open any of the 18 existing client guides/.test(body)) {
      fail(`订阅入口不得恢复无用的站内搜索结尾：${source}`)
    }
    const panelImage = locale === 'en'
      ? '/images/jego-v1.5.10/subscription-panel-en.png'
      : '/images/jego-v1.5.10/subscription-panel-zh.png'
    if (!body.includes(panelImage)) fail(`订阅入口缺少对应语言的控制面板截图：${source}`)
    if (/^##\s+(?:复制和更新订阅|Copy and update the subscription|浏览器插件、系统代理和 TUN|Browser extension, system proxy, and TUN)\s*$/m.test(body)) {
      fail(`订阅入口不得恢复重复管理模块或技术化标题：${source}`)
    }
  }

  const migrationPath = path.join(root, 'scripts/geo-migration-records.json')
  if (!existsSync(migrationPath)) fail('缺少逐页迁移记录')
  else {
    const migration = readJson(migrationPath)
    const records = migration.records || []
    if (migration.schemaVersion !== 2) fail('逐页迁移记录 schema 必须为 2')
    if (records.length !== 92 || new Set(records.map((record) => record.source)).size !== 92) {
      fail('逐页迁移记录必须覆盖 92 个基线源文件')
    }
    for (const page of baseline?.pages || []) {
      const record = records.find((entry) => entry.source === page.source && entry.route === page.route)
      if (!record?.strategy) {
        fail(`逐页迁移记录缺失：${page.source}`)
        continue
      }
      if (!Array.isArray(record.currentSections) || !Array.isArray(record.sectionMapping)) {
        fail(`逐页迁移记录缺少章节映射：${page.source}`)
      }
      if (record.sectionMapping?.length !== record.baselineSections?.length) {
        fail(`逐页迁移记录未覆盖全部旧章节：${page.source}`)
      }
      if (!Array.isArray(record.preservedTasks) || record.preservedTasks.length === 0) {
        fail(`逐页迁移记录缺少任务保全：${page.source}`)
      }
      if (!Array.isArray(record.corrections) || record.corrections.length === 0 || record.contentChangeReviewed !== true) {
        fail(`逐页迁移记录缺少事实更正复核：${page.source}`)
      }
      if (record.mediaAndExternalLinkChanges?.mediaPreserved !== true || record.mediaAndExternalLinkChanges?.removedMedia?.length) {
        fail(`逐页迁移记录显示媒体未保全：${page.source}`)
      }
      if (/docs\/(?:en\/)?tool\//.test(page.source) && record.strategy !== 'preserve-and-enhance') {
        fail(`工具页必须 preserve-and-enhance：${page.source}`)
      }
    }
  }

  const officialPrivacySource = 'https://jegocloud.com/policy'
  for (const source of [
    'docs/policies/privacy.md',
    'docs/en/policies/privacy.md',
    'docs/guide/plugin-permissions-privacy.md',
    'docs/en/guide/plugin-permissions-privacy.md'
  ]) {
    const page = pages.find((entry) => entry.source === source)
    if (!page) continue
    if (page.frontmatter.reviewStatus !== 'verified' || page.frontmatter.lastVerified !== '2026-07-10') {
      fail(`隐私/权限页必须记录权威核验状态：${source}`)
    }
    if (!page.frontmatter.sources.includes(officialPrivacySource) || !page.raw.includes(officialPrivacySource)) {
      fail(`隐私/权限页缺少 Jego 官方政策来源：${source}`)
    }
  }
  const productFactsPath = path.join(root, 'docs/.vitepress/data/product-facts.json')
  const productFacts = existsSync(productFactsPath) ? readJson(productFactsPath) : null
  const expectedPermissions = ['storage', 'proxy', 'alarms', 'management']
  if (
    !productFacts ||
    !sameArray(Object.keys(productFacts.browserExtension?.permissions || {}), expectedPermissions) ||
    productFacts.browserExtension?.permissions?.alarms !== 'schedule-session-refresh' ||
    productFacts.browserExtension?.hostPermissions?.join('|') !== '<all_urls>' ||
    productFacts.browserExtension?.version !== '1.5.10' ||
    productFacts.browserExtension?.interfaceLanguageCount !== 20 ||
    productFacts.browserExtension?.modeBehavior?.rules?.matches?.join('|') !== 'domain|ipv4-address|ipv4-subnet' ||
    productFacts.browserExtension?.modeBehavior?.global !== 'all-browser-requests-use-current-node-except-local-addresses' ||
    productFacts.browserExtension?.permissionsReviewStatus !== 'verified' ||
    productFacts.networkDiagnostics?.reviewStatus !== 'verified' ||
    productFacts.networkDiagnostics?.title?.zhCN !== '网络诊断' ||
    productFacts.networkDiagnostics?.tabs?.map((entry) => entry.zhCN).join('|') !== '连接检测|节点测速|加密 DNS' ||
    productFacts.networkDiagnostics?.nodeTest?.visibleLatencyValue !== false ||
    productFacts.networkDiagnostics?.nodeTest?.canSwitchNodeOnPage !== false ||
    productFacts.networkDiagnostics?.nodeTest?.slowThresholdMs !== 2000 ||
    productFacts.subscriptionService?.deviceLimit !== 6 ||
    productFacts.commercialPolicy?.subscriptionResetDayOfMonth !== 1 ||
    productFacts.commercialPolicy?.subscriptionResetAfterRenewalOrUpgradePayment !== true ||
    productFacts.privacyPolicy?.reviewStatus !== 'verified' ||
    productFacts.privacyPolicy?.sources?.[0] !== officialPrivacySource ||
    productFacts.privacyPolicy?.diagnosticDetails !== null
  ) {
    fail('产品事实必须固定真实插件版本、正式翻译、20 种语言、诊断行为、6 台设备与流量恢复规则')
  }

  const permissionPages = pages.filter((page) => /^docs\/(?:en\/)?guide\/plugin-permissions-privacy\.md$/.test(page.source))
  for (const page of permissionPages) {
    const { body } = splitFrontmatter(page.raw)
    const expectedPermissionNames = ['storage', 'proxy', 'alarms', 'management', 'host_permissions', 'all URLs']
    if (!expectedPermissionNames.every((permission) => body.includes(permission))) {
      fail(`插件权限页必须包含四项扩展权限与 all URLs 网站访问权限：${page.source}`)
    }
    const hasAllHostsTableRow = page.frontmatter.locale === 'en'
      ? /^\| `host_permissions` · `all URLs` \| Get service configuration, run Connection Check, and run Node Test \|$/m.test(body)
      : /^\| `host_permissions` · `all URLs` \| 用于获取服务配置、连接检测和节点测速 \|$/m.test(body)
    if (!hasAllHostsTableRow) {
      fail(`插件权限表必须单独列出 host_permissions / all URLs：${page.source}`)
    }
    const hasSimpleIntro = page.frontmatter.locale === 'en'
      ? /Jego needs the browser permissions below to save your settings, switch the proxy, keep the connection updated, and run Diagnostics\./.test(body)
      : /无忧行需要下面这些浏览器权限，才能保存设置、切换代理、保持连接并使用网络诊断。/.test(body)
    if (!hasSimpleIntro) {
      fail(`插件权限页必须使用小白可直接理解的一句开场：${page.source}`)
    }
    if (/\b\d+\.\d+\.\d+\b/.test(body)) {
      fail(`插件权限公开正文不得写死版本号：${page.source}`)
    }
    if (/需要保密的内容|Details to keep private|验证码|API 密钥|完整日志|verification codes|API keys|complete logs|subscription URL may have leaked/i.test(body)) {
      fail(`插件权限页不得增加不完整的保密或客服提交清单：${page.source}`)
    }
    const hasPrivacyLinks = page.frontmatter.locale === 'en'
      ? body.includes("[Jego's official Privacy Policy](https://jegocloud.com/policy)") && body.includes('[Privacy and data](/en/policies/privacy)')
      : body.includes('[Jego 官方隐私政策](https://jegocloud.com/policy)') && body.includes('[隐私与数据说明](/policies/privacy)')
    if (!hasPrivacyLinks || /登录和付款|密码|订单号|交易 ID|Information used for sign-in and payment|password|order number|transaction ID/i.test(body)) {
      fail(`插件权限页只链接完整隐私说明，不解释账号、密码或付款后台字段：${page.source}`)
    }
  }

  const dangerousPatterns = [
    ['关闭系统安全防护', /关闭.{0,12}(?:系统)?防火墙|关闭增强保护|降低.{0,12}(?:防火墙|安全等级)|turn(?:ing)? off (?:the )?(?:system )?firewall|turn off Enhanced Protection|lower.{0,18}security level/i],
    ['无限流量或资源承诺', /无限流量|不限流量|unlimited (?:data )?traffic|unlimited global network resources/i],
    ['第三方账号/地区/限额规避', /购买现成的?账号|buy (?:an? )?(?:existing|ready-made) account|重新注册.{0,20}(?:Bing|账户)|register.{0,30}new (?:Bing )?account|Turkey.{0,30}(?:Premium|cheap)|对话限制.{0,40}新.*账户/i],
    ['绝对或无依据承诺', /100%|绝对安全|completely safe/i],
    ['未经核验的性能或连通承诺', /可以保证.{0,24}(?:连通|稳定)|确保.{0,36}(?:所有请求|稳定性)|全球最佳|最为稳定|全天候稳定|guarantee.{0,36}(?:connectivity|availability|all requests)|ensur(?:e|es|ing).{0,36}(?:all requests|stability)|best global|most stable option|24\/7 stable/i],
    ['任意站点或全协议承诺', /毫无限制|可访问任何网站|几乎支持目前所有协议|唯一免费.{0,20}工具|no restrictions|access any website|supports almost all current protocols|only free.{0,20}tool/i],
    ['未经核验的隐私安全背书', /无需担心.{0,12}隐私.{0,8}安全|don['’]?t need to worry.{0,20}privacy.{0,12}security/i],
    ['未经核验的流量计费结论', /(?:大陆|国内)流量不会消耗套餐流量|(?:mainland|domestic) traffic will not consume (?:package )?data/i],
    ['默认清除全部站点数据', /清(?:除|空)所有\s*(?:Cookies|Cookie|站点数据)|clear all (?:cookies|site data)/i],
    ['未经来源核验的无日志说法', /无日志|no[ -]?logs/i],
    ['高风险第三方分发或账号渠道', /rocketgirls|apkpure|archive\.org\/download\/clash|gist\.githubusercontent|proother\/Shadowrocket|file\.olo4/i]
  ]
  const safeNegativeContext = {
    '关闭系统安全防护': /不要|不关闭|不得|而不是|不构成|do not|don't|never|rather than|not advice|is not/i,
    '第三方账号/地区/限额规避': /不要|不得|不通过|do not|rather than|is not/i,
    '绝对或无依据承诺': /不用|不作|不得|不声称|does not|without making/i,
    '未经核验的性能或连通承诺': /不.{0,36}保证|不能写成|不声称|does not.{0,80}guarantee|do not guarantee|cannot guarantee|must not|not a guarantee/i,
    '任意站点或全协议承诺': /不继续发布|不使用|不声称|不保证|no longer publish|does not promise|does not guarantee|not publish/i,
    '未经核验的隐私安全背书': /不等于|不能|does not|cannot/i,
    '默认清除全部站点数据': /不要|不把|不得|do not|is not/i,
    '未经来源核验的无日志说法': /不声称|不得被当作|不能替代|does not claim|must not be interpreted|does not replace/i
  }
  for (const page of pages) {
    const body = splitFrontmatter(page.raw).body
    const lines = body.split(/\r?\n/)
    for (const [category, pattern] of dangerousPatterns) {
      const index = lines.findIndex((line) => {
        const inspected = line.replace(/<[^>]+>/g, ' ')
        return pattern.test(inspected) && !safeNegativeContext[category]?.test(inspected)
      })
      if (index >= 0) fail(`高风险表述：${page.source}:${index + 1} (${category})`)
    }
    if (/docs\/(?:en\/)?(?:tool|devices|guide)\//.test(page.source)) {
      const index = lines.findIndex((line) => /https?:\/\/[^\s)>]+\.(?:apk|exe|msi|dmg|zip|crx|ya?ml|json)(?:[?#)\s]|$)/i.test(line))
      if (index >= 0) fail(`可执行/配置直链待安全核验：${page.source}:${index + 1}`)
    }
  }

  const zhHome = pages.find((page) => page.source === 'docs/index.md')?.raw || ''
  const enHome = pages.find((page) => page.source === 'docs/en/index.md')?.raw || ''
  if (!/text:\s*最好用的免费代理工具/.test(zhHome) || !/tagline:[^\n]*(?:Chrome|Edge)[^\n]*小白/.test(zhHome)) {
    fail('中文首页必须保留产品定位、浏览器价值和小白友好表达')
  }
  if (!/text:\s*The Best Free VPN/.test(enHome) || !/tagline:[^\n]*(?:Chrome|Edge)[^\n]*first-time/i.test(enHome)) {
    fail('英文首页必须保留产品定位、浏览器价值和新手友好表达')
  }
  if (!/title:\s*20 种语言/.test(zhHome) || !/title:\s*20 Languages/.test(enHome)) {
    fail('中英文首页必须展示插件的 20 种语言支持')
  }

  const publicJargon = /机器可读|状态语义|数据接收方|所有者确认|业务所有者|发布阻断|证据边界|owner-confirmed|owner-controlled|machine-readable|status semantics|publication block|product owner|pending review/i
  for (const page of pages) {
    const { body } = splitFrontmatter(page.raw)
    if (publicJargon.test(body)) fail(`公开正文仍含内部治理语言：${page.source}`)
  }

  const pressurePhrases = /你想怎么使用|你想要做什么|想让.{0,24}[？?]|不知道选哪个[？?]|What (?:do|would) you (?:want|like) to do|Not sure which|Want to .{0,40}[?？]|不要着急|别急|do not worry|don['’]t panic/i
  for (const page of pages) {
    const { body } = splitFrontmatter(page.raw)
    if (/[?？]/.test(String(page.frontmatter.title)) || /[?？]/.test(String(page.frontmatter.description))) {
      fail(`标题或摘要仍以问题要求用户判断：${page.source}`)
    }
    if (pressurePhrases.test(body)) fail(`公开正文仍含设问压力或负向心理暗示：${page.source}`)

    let inFence = false
    for (const [index, line] of body.split(/\r?\n/).entries()) {
      if (/^\s*(?:```|~~~)/.test(line)) {
        inFence = !inFence
        continue
      }
      if (inFence || /^\s*import\s/.test(line)) continue
      const visible = line
        .replace(/\]\([^)]*\)/g, ']')
        .replace(/https?:\/\/[^\s)>]+/g, '')
        .replace(/<[^>]+>/g, ' ')
      if (/[?？]/.test(visible)) fail(`公开正文仍含面向用户的设问：${page.source}:${index + 1}`)
    }

    if (!/docs\/(?:en\/)?guide\/plugin-maintenance\.md$/.test(page.source) && /卸载|重装|重新安装|uninstall|reinstall|remove (?:Jego|the extension)/i.test(body)) {
      fail(`普通页面主动提示移除或重装插件：${page.source}`)
    }

    const genericPrivacyBurden = /密码[^。\n]{0,100}(?:Cookie|订阅地址)[^。\n]{0,100}(?:留在|只保留在)自己的(?:付款)?设备上|下面这些内容请留在自己的设备上|提交前请遮住密码|Keep passwords[^.\n]{0,140}(?:cookies|subscription URLs)[^.\n]{0,100}(?:on )?(?:your|their) own device|Keep the following on your own device|Before sending, hide passwords/i
    if (genericPrivacyBurden.test(body)) {
      fail(`公开正文不得加入密码、Cookie、订阅地址等泛化保密清单：${page.source}`)
    }
  }

  const zhUiPages = pages.filter((page) => /^docs\/guide\/(?:plugin-features|control-panel|network-diagnostics(?:-node-speed)?)\.md$/.test(page.source))
  for (const page of zhUiPages) {
    const { body } = splitFrontmatter(page.raw)
    if (/→\s*\*\*诊断\*\*|\*\*诊断\*\*页面|节点测试|网站\/连接检测|规则检查|测试所有节点/.test(body)) {
      fail(`中文插件教程未使用 cloud/locales 正式界面名称：${page.source}`)
    }
  }
  const diagnosticsPages = pages.filter((page) => /^docs\/(?:en\/)?guide\/network-diagnostics\.md$/.test(page.source))
  for (const page of diagnosticsPages) {
    const { body } = splitFrontmatter(page.raw)
    const h2 = [...body.matchAll(/^##\s+(.+?)(?:\s+\{#[^}]+\})?\s*$/gm)].map((match) => match[1].trim())
    const expected = page.frontmatter.locale === 'en'
      ? ['Current Acceleration Status', 'Connection Check', "Check a Website's Route"]
      : ['当前加速状态', '连接检测', '查询网址走向']
    if (h2.join('|') !== expected.join('|')) {
      fail(`网络诊断页必须按当前加速状态、连接检测与查询网址走向排列：${page.source}`)
    }
    const hasOutcomeCopy = page.frontmatter.locale === 'en'
      ? /To understand how the Jego proxy is working[\s\S]{0,300}changing the node or adjusting Proxy Rules/.test(body)
      : /想了解无忧行代理工作状态时[\s\S]{0,250}切换节点[\s\S]{0,60}调整代理策略/.test(body)
    if (!hasOutcomeCopy) {
      fail(`网络诊断开场必须说明代理工作状态、诊断顺序和解决动作：${page.source}`)
    }
    if (/三个工具|节点测速|加密 DNS|Three tools|Node Test|Encrypted DNS/i.test(body)) {
      fail(`网络诊断页不得混入节点测速或加密 DNS：${page.source}`)
    }
  }
  const nodeTestPages = pages.filter((page) => /^docs\/(?:en\/)?guide\/network-diagnostics-node-speed\.md$/.test(page.source))
  for (const page of nodeTestPages) {
    const { body } = splitFrontmatter(page.raw)
    const h2 = [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((match) => match[1].trim())
    const expected = page.frontmatter.locale === 'en'
      ? ['Start Node Test', 'Read the Node Test results', 'Choose a suitable node']
      : ['开始节点测速', '看懂测速结果', '选择合适的节点']
    if (h2.join('|') !== expected.join('|')) {
      fail(`节点测速页必须按开始测速、看懂结果和选择节点排列：${page.source}`)
    }
    const hasOutcomeCopy = page.frontmatter.locale === 'en'
      ? /To see which Jego nodes are currently available[\s\S]{0,350}help you choose a suitable node/.test(body)
      : /想了解哪些无忧行节点当前可用时[\s\S]{0,250}帮助你选择合适的节点/.test(body)
    const resultPhrases = page.frontmatter.locale === 'en'
      ? ['Green lightning', 'Yellow indicator', 'Failed', '10 relatively fastest', 'does not show milliseconds']
      : ['绿色闪电', '黄色标记', '失败', '相对较快的前 10 个', '不会显示毫秒']
    const hasResults = resultPhrases.every((phrase) => body.includes(phrase))
    if (!hasOutcomeCopy || !hasResults) {
      fail(`节点测速页必须说明用户会得到什么结果以及如何选择节点：${page.source}`)
    }
    if (/如果结果不理想|所有节点都失败|联系客服|订阅地址|完整日志|If the results are poor|Every node fails|contacting support|subscription URL|complete logs/i.test(body)) {
      fail(`节点测速页不得恢复负面问题表或额外支持负担：${page.source}`)
    }
  }

  const pluginMaintenancePages = pages.filter((page) => /^docs\/(?:en\/)?guide\/plugin-maintenance\.md$/.test(page.source))
  for (const page of pluginMaintenancePages) {
    const { body } = splitFrontmatter(page.raw)
    const h2 = [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((match) => match[1].trim())
    const expected = page.frontmatter.locale === 'en'
      ? ['Confirm and update the version', 'Open Jego after updating', 'Check the current working status', 'When you choose to reinstall Jego', 'Get more help']
      : ['确认并更新版本', '更新后重新打开无忧行', '确认当前工作状态', '需要重新安装时', '获得更多帮助']
    if (h2.join('|') !== expected.join('|')) {
      fail(`插件维护页必须按更新、重新加载、确认状态、主动重新安装和帮助排列：${page.source}`)
    }
    const hasOutcomeCopy = page.frontmatter.locale === 'en'
      ? /To keep Jego up to date[\s\S]{0,350}select Rules mode and Auto Select again[\s\S]{0,120}Diagnostics/.test(body)
      : /想让无忧行保持最新版本[\s\S]{0,250}重新选择规则模式和自动节点[\s\S]{0,100}网络诊断/.test(body)
    if (!hasOutcomeCopy) {
      fail(`插件维护开场必须先说明用户会完成更新、重新加载状态并确认工作状态：${page.source}`)
    }
    const reinstallHeading = page.frontmatter.locale === 'en' ? '## When you choose to reinstall Jego' : '## 需要重新安装时'
    const routineFlow = body.slice(0, body.indexOf(reinstallHeading))
    if (/卸载|重装|重新安装|uninstall|reinstall|remove (?:Jego|the extension)/i.test(routineFlow)) {
      fail(`插件维护普通流程不得主动提示移除或重新安装：${page.source}`)
    }
    if (/清(?:除|理).{0,12}Cookie|防火墙|其他.{0,12}(?:VPN|代理)|clear (?:cookies|site data)|firewall|other (?:VPN|proxy)/i.test(body)) {
      fail(`插件维护页不得恢复与正常更新无关的技术排查清单：${page.source}`)
    }
  }

  const keepUpdatedPages = pages.filter((page) => /^docs\/(?:en\/)?guide\/keep-updated\.md$/.test(page.source))
  for (const page of keepUpdatedPages) {
    const { body } = splitFrontmatter(page.raw)
    const h2 = [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((match) => match[1].trim())
    const expected = page.frontmatter.locale === 'en'
      ? ['Current extension version', 'Update Jego in Chrome', 'Update Jego in Edge', 'Update a manually installed version', 'Update a mobile subscription', 'After updating', 'Contact support']
      : ['当前插件版本', '在 Chrome 中更新', '在 Edge 中更新', '更新手动安装的版本', '更新手机订阅', '更新完成后', '联系支持']
    if (h2.join('|') !== expected.join('|')) {
      fail(`防止失联页必须按版本、Chrome、Edge、手动安装、手机订阅、完成确认和支持排列：${page.source}`)
    }
    const hasOutcomeCopy = page.frontmatter.locale === 'en'
      ? /Jego regularly updates both the browser extension and subscription content[\s\S]{0,300}latest nodes and connection settings/.test(body)
      : /无忧行会持续更新插件版本和订阅内容[\s\S]{0,220}新的节点与连接设置/.test(body)
    if (!hasOutcomeCopy) {
      fail(`防止失联开场必须先说明保持更新后用户能获得什么：${page.source}`)
    }
    const requiredContent = page.frontmatter.locale === 'en'
      ? ['1.5.9', 'chrome://extensions/', 'edge://extensions/', 'Chrome Web Store', 'Microsoft Edge Add-ons', 'https://jegocloud.com/static/app/', 'JegoV1.5.9.zip', 'every 24 hours', '/en/guide/plugin-maintenance']
      : ['1.5.9', 'chrome://extensions/', 'edge://extensions/', 'Chrome Web Store', 'Microsoft Edge 扩展商店', 'https://jegocloud.com/static/app/', 'JegoV1.5.9.zip', '每 24 小时', '/guide/plugin-maintenance']
    if (!requiredContent.every((phrase) => body.includes(phrase))) {
      fail(`防止失联页必须保留版本、商店、三种更新方式、地址组成、24 小时订阅建议和维护入口：${page.source}`)
    }
    const requiredMedia = [
      'image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5JRmsC6cdLC8T1CMokaN_2Fmsedge_3.png',
      'image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fomxd1Mr1qsuzHUduonWU_2Fchrome_1.png',
      'image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5C1uC1qTbxO3LKHO4oql_2Fmsedge_2.png',
      'image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FczhA5KDPiurdPyCanu1Z_2Fchrome_3.png',
      'image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbhAczGOlghKJxh3Y4N7u_2FQQBrowser_1.png',
      'image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FYHwAipQtF3QwJ7z85hyz_2F360se_2.png'
    ]
    if (!requiredMedia.every((media) => body.includes(media))) {
      fail(`防止失联页不得删除既有浏览器媒体：${page.source}`)
    }
    if (!body.includes('class="manual-browser-grid"') || !body.includes('class="manual-browser-item"')) {
      fail(`防止失联页的手动安装浏览器必须使用横向响应式布局：${page.source}`)
    }
    const hasChromiumCoverage = page.frontmatter.locale === 'en'
      ? /other Chromium-based browsers/.test(body)
      : /其他基于 Chromium（Chrome 内核）的浏览器/.test(body)
    if (!hasChromiumCoverage) {
      fail(`防止失联页必须说明安装包适用于其他 Chromium 浏览器：${page.source}`)
    }
    if (/反复尝试|搞不定|trying repeatedly|still can['’]?t solve/i.test(body)) {
      fail(`防止失联页不得恢复增加用户负担的支持表达：${page.source}`)
    }
  }
  const themeStyleSource = readFileSync(path.join(root, 'docs/.vitepress/theme/style.css'), 'utf8')
  if (!/\.manual-browser-grid\s*\{[\s\S]{0,180}grid-template-columns:\s*repeat\(4/.test(themeStyleSource)) {
    fail('手动安装浏览器在桌面端必须横向排列四项')
  }
  const modeDefinitionPages = pages.filter((page) => /^docs\/(?:en\/)?guide\/(?:mode-selection|plugin-features|usage)\.md$/.test(page.source))
  for (const page of modeDefinitionPages) {
    const { body } = splitFrontmatter(page.raw)
    if (/全局.{0,20}(?:临时|排查)|临时.{0,20}全局|Global.{0,30}(?:temporar|test one)|temporar.{0,30}Global/i.test(body)) {
      fail(`全局模式被擅自缩写成临时排查场景：${page.source}`)
    }
    const statesAllWebsites = page.frontmatter.locale === 'en'
      ? /Global[^\n]{0,80}all browser requests/i.test(body)
      : /全局[^\n]{0,50}全部浏览器请求/.test(body)
    const statesRuleTargets = page.frontmatter.locale === 'en'
      ? /Rules[^\n]{0,160}(?:domain|domains)[^\n]{0,120}IP/i.test(body)
      : /规则[^\n]{0,120}域名[^\n]{0,100}IP/.test(body)
    if (!statesAllWebsites || !statesRuleTargets || /支付相关|payment-related/i.test(body)) {
      fail(`全局模式必须直说全部浏览器请求经过节点、只保留本地地址例外：${page.source}`)
    }
    if (/免费版.{0,40}(?:旧版|旧版本)|(?:旧版|旧版本).{0,40}免费版|free.{0,60}(?:old|older|legacy)|(?:old|older|legacy).{0,60}free/i.test(body)) {
      fail(`免费版不得被误写成旧版本：${page.source}`)
    }
    if (/mode-selection\.md$/.test(page.source)) {
      const iconHeading = page.frontmatter.locale === 'en' ? /^## Browser icon state$/m : /^## 浏览器图标状态$/m
      if (!iconHeading.test(body)) fail(`浏览器图标状态必须是独立二级区块：${page.source}`)
      const hasFreeInterfaceCopy = page.frontmatter.locale === 'en'
        ? /^## Free version interface$/m.test(body) && /The member popup shows Rules \/ Global \/ Off\. The Free popup shows Connect \/ Off\./.test(body)
        : /^## 免费版界面$/m.test(body) && /会员版弹窗显示“规则 \/ 全局 \/ 关闭”，免费版显示“开启 \/ 关闭”。/.test(body)
      if (!hasFreeInterfaceCopy || /按钮和截图不一样|账号方案不同|When the buttons look different|Depending on the account plan/i.test(body)) {
        fail(`模式页必须直接说明免费版界面，不得暗示按钮与截图不一致：${page.source}`)
      }
      if (/节点测速页面会按需要提示切换到这个状态|Node Test may ask for this state before a test/i.test(body)) {
        fail(`关闭模式说明不得虚构节点测速会提示切换状态：${page.source}`)
      }
    }
  }

  for (const page of pages.filter((entry) => /^docs\/(?:en\/)?guide\/node-selection\.md$/.test(entry.source))) {
    const { body } = splitFrontmatter(page.raw)
    if (/客服建议你测试某个具体节点|Jego Support asked you to test a specific node/i.test(body)) {
      fail(`节点选择页不得虚构客服要求用户测试具体节点：${page.source}`)
    }
  }

  const proxyStrategyPages = pages.filter((page) => /^docs\/(?:en\/)?guide\/proxy-strategy\.md$/.test(page.source))
  for (const page of proxyStrategyPages) {
    const { body } = splitFrontmatter(page.raw)
    const hasNormalPath = page.frontmatter.locale === 'en'
      ? /Add a Proxy Rule[\s\S]*Proxy Server[\s\S]*Domain\/Host List[\s\S]*Save/.test(body)
      : /添加一条代理策略[\s\S]*代理线路[\s\S]*域名\/主机列表[\s\S]*保存/.test(body)
    if (!hasNormalPath) fail(`代理策略教程必须保留小白可顺读的添加与保存主流程：${page.source}`)
    if (/无法识别|已忽略|错误输入|输入清理|去重|Cleaned to host format|Couldn't parse|invalid input|normaliz|deduplicat|Ignored:/i.test(body)) {
      fail(`代理策略教程不得向普通用户展开插件内部输入清理与错误兼容逻辑：${page.source}`)
    }
  }

  const metaComponent = readFileSync(path.join(root, 'docs/.vitepress/theme/components/GeoPageMeta.vue'), 'utf8')
  if (/Content status|内容状态|Facts pending review|部分事实待复核|reviewLabel/.test(metaComponent)) {
    fail('普通用户页面不得展示内部内容审核状态')
  }
  const toolCatalogComponent = readFileSync(path.join(root, 'docs/.vitepress/theme/components/ToolCatalog.vue'), 'utf8')
  const navigationSource = readFileSync(path.join(root, 'docs/.vitepress/navigation.ts'), 'utf8')
  const publicUiSource = `${metaComponent}\n${toolCatalogComponent}\n${navigationSource}`
  if (/还在更新吗|适合谁|能使用 Jego 吗|怎么办|控制面板有什么|插件怎么用|Still maintained\?|Works with Jego\?|Website not opening\?|Jego not working\?/.test(publicUiSource)) {
    fail('公开组件不得使用向用户提问的表头或标签')
  }
  const zhPopupPage = pages.find((page) => page.source === 'docs/guide/plugin-features.md')?.raw || ''
  const enPopupPage = pages.find((page) => page.source === 'docs/en/guide/plugin-features.md')?.raw || ''
  if (!/^# 无忧行插件弹窗$/m.test(zhPopupPage) || !/^# Jego extension popup$/m.test(enPopupPage)) {
    fail('插件功能页必须明确定位为插件弹窗说明，与首次使用教程区分')
  }
  if (/^## 第一次使用，只要三步$/m.test(zhPopupPage) || /^## Get started in three steps$/m.test(enPopupPage)) {
    fail('插件弹窗页不得重复“开始使用无忧行”的首次使用流程')
  }
  if (
    !/text:\s*'开始使用无忧行',\s*link:\s*'\/guide\/usage'/.test(navigationSource) ||
    !/text:\s*'插件弹窗',\s*link:\s*'\/guide\/plugin-features'/.test(navigationSource) ||
    !/text:\s*'Start using Jego',\s*link:\s*'\/en\/guide\/usage'/.test(navigationSource) ||
    !/text:\s*'Extension popup',\s*link:\s*'\/en\/guide\/plugin-features'/.test(navigationSource)
  ) {
    fail('导航必须区分首次使用教程与插件弹窗说明')
  }
  if (
    !/text:\s*'防止失联',\s*link:\s*'\/guide\/keep-updated'/.test(navigationSource) ||
    !/text:\s*'Stay Connected',\s*link:\s*'\/en\/guide\/keep-updated'/.test(navigationSource)
  ) {
    fail('keep-updated 导航必须使用“防止失联”与“Stay Connected”')
  }
  const zhSubscriptionEntries = navigationSource.match(/\{ text: '订阅服务', link: '\/subscription\/' \}/g) || []
  const enSubscriptionEntries = navigationSource.match(/\{ text: 'Subscription service', link: '\/en\/subscription\/' \}/g) || []
  if (
    zhSubscriptionEntries.length !== 2 ||
    enSubscriptionEntries.length !== 2 ||
    /link:\s*'\/(?:en\/)?subscription\/#/.test(navigationSource) ||
    /text:\s*'(?:按设备安装|复制和更新订阅|连接方式说明|Install by device|Copy and update|Connection methods)'/.test(navigationSource)
  ) {
    fail('顶部和侧边导航的订阅服务域必须各只保留一个订阅服务入口，章节跳转留在页内目录')
  }
  for (const [prefix, entries] of [
    ['', [['windows', 'Windows 翻墙指南'], ['mac', 'macOS 翻墙指南'], ['ios', 'iPhone / iPad 翻墙指南'], ['android', 'Android 翻墙指南'], ['linux', 'Linux 翻墙指南'], ['harmony', 'HarmonyOS 翻墙指南'], ['us-apple-id', 'Apple ID 帮助']]],
    ['en/', [['windows', 'Windows proxy guide'], ['mac', 'macOS proxy guide'], ['ios', 'iPhone / iPad proxy guide'], ['android', 'Android proxy guide'], ['linux', 'Linux proxy guide'], ['harmony', 'HarmonyOS proxy guide'], ['us-apple-id', 'Apple ID help']]]
  ]) {
    for (const [slug, label] of entries) {
      const entry = `{ text: '${label}', link: '/${prefix}subscription/devices/${slug}' }`
      if (navigationSource.split(entry).length !== 2) {
        fail(`订阅侧边栏必须且只能出现一次带用途说明的设备子页面：/${prefix}subscription/devices/${slug}`)
      }
    }
  }
  if (/link:\s*'\/(?:en\/)?subscription\/clients\//.test(navigationSource)) {
    fail('订阅侧边栏不得重新列出 18 个客户端教程')
  }

  const reviewPath = path.join(root, 'GEO_CONTENT_REVIEW.md')
  if (!existsSync(reviewPath)) fail('缺少 GEO_CONTENT_REVIEW.md')
  else {
    const review = readFileSync(reviewPath, 'utf8')
    const openBlockers = [...review.matchAll(/^\| BR-\d+ .*\| open \|$/gm)]
    if (openBlockers.length) fail(`仍有 ${openBlockers.length} 个发布阻断内容审核项`)
  }

  scanPrivacyDenyTokens()
  pass(`完整数据模型：${pages.length} 页、${translationGroups.size} 对双语关系、18 个 catalog 工具`)
  pass(`源链接、frontmatter、H1、薄页、工具一致性、迁移记录和隐私 deny tokens 已检查`)
}

for (const message of notes) console.log(`PASS ${message}`)
if (errors.length) {
  for (const message of errors) console.error(`FAIL ${message}`)
  console.error(`\nGEO audit failed with ${errors.length} error(s).`)
  process.exit(1)
}

console.log(`\nGEO ${baselineMode ? 'baseline ' : ''}audit passed.`)
