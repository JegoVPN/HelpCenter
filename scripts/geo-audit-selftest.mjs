import { spawnSync } from 'node:child_process'
import { cpSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'

const root = process.cwd()
const temporaryRoot = mkdtempSync(path.join(tmpdir(), 'jego-geo-audit-'))
const sandbox = path.join(temporaryRoot, 'repo')

cpSync(root, sandbox, {
  recursive: true,
  filter(source) {
    const relative = path.relative(root, source)
    return !(
      relative === 'node_modules' ||
      relative.startsWith(`node_modules${path.sep}`) ||
      relative === path.join('docs', '.vitepress', 'cache') ||
      relative.startsWith(`${path.join('docs', '.vitepress', 'cache')}${path.sep}`) ||
      relative === path.join('docs', '.vitepress', 'dist') ||
      relative.startsWith(`${path.join('docs', '.vitepress', 'dist')}${path.sep}`)
    )
  }
})

function expectMissingFileFailure(label, relativePath) {
  const original = path.join(sandbox, relativePath)
  const hidden = `${original}.geo-selftest-hidden`
  renameSync(original, hidden)
  try {
    const result = spawnSync(process.execPath, ['scripts/geo-audit.mjs', '--baseline'], {
      cwd: sandbox,
      encoding: 'utf8'
    })
    if (result.status === 0) throw new Error(`${label} 未触发基线门禁`)
    console.log(`PASS ${label} 会被基线门禁阻止`)
  } finally {
    renameSync(hidden, original)
  }
}

function expectMutationFailure(label, relativePath, mutate) {
  const target = path.join(sandbox, relativePath)
  const original = readFileSync(target, 'utf8')
  const mutated = mutate(original)
  if (mutated === original) throw new Error(`${label} 的自测变更未命中目标文本`)
  writeFileSync(target, mutated)
  try {
    const result = spawnSync(process.execPath, ['scripts/geo-audit.mjs'], {
      cwd: sandbox,
      encoding: 'utf8'
    })
    if (result.status === 0) throw new Error(`${label} 未触发完整门禁`)
    console.log(`PASS ${label} 会被完整门禁阻止`)
  } finally {
    writeFileSync(target, original)
  }
}

function expectAddedFileFailure(label, relativePath, content, expectedMessage) {
  const target = path.join(sandbox, relativePath)
  writeFileSync(target, content)
  try {
    const result = spawnSync(process.execPath, ['scripts/geo-audit.mjs'], {
      cwd: sandbox,
      encoding: 'utf8'
    })
    const output = `${result.stdout || ''}\n${result.stderr || ''}`
    if (result.status === 0 || !output.includes(expectedMessage)) {
      throw new Error(`${label} 未触发指定完整门禁`)
    }
    console.log(`PASS ${label} 会被完整门禁阻止`)
  } finally {
    rmSync(target, { force: true })
  }
}

try {
  expectMissingFileFailure('删除基线页面', 'docs/guide/overview.md')
  expectMissingFileFailure('删除基线公开资产', 'docs/public/favicon.ico')
  expectMutationFailure('回退用户确认的 Jego 支持状态', 'docs/.vitepress/data/tool-catalog.json', (raw) =>
    raw.replace('"v2rayn": "unsupported"', '"v2rayn": "supported"')
  )
  expectMutationFailure('把 OneClick 改回仍在更新', 'docs/.vitepress/data/tool-catalog.json', (raw) =>
    raw.replace('"slug": "oneclick", "name": { "zh": "OneClick", "en": "OneClick" }, "platforms": ["ios", "ipados", "android"], "architectures": [], "subscriptionFormats": [], "lifecycle": "discontinued"', '"slug": "oneclick", "name": { "zh": "OneClick", "en": "OneClick" }, "platforms": ["ios", "ipados", "android"], "architectures": [], "subscriptionFormats": [], "lifecycle": "current"')
  )
  expectMutationFailure('删除官方隐私来源', 'docs/guide/plugin-permissions-privacy.md', (raw) =>
    raw.replace('sources: [https://jegocloud.com/policy]', 'sources: []')
  )
  expectMutationFailure('把小白引导改回设问', 'docs/guide/overview.md', (raw) =>
    raw.replace('## 无忧行的两种使用方式', '## 你想怎么使用无忧行？')
  )
  expectMutationFailure('把全局模式改成临时排查场景', 'docs/guide/mode-selection.md', (raw) =>
    raw.replace('全局模式会让全部浏览器请求经过当前无忧行节点，本地地址仍直接连接。', '全局模式只用于临时排查网站。')
  )
  expectMutationFailure('把免费版界面改回截图不一致提示', 'docs/guide/mode-selection.md', (raw) =>
    raw.replace('## 免费版界面', '## 按钮和截图不一样时')
  )
  expectMutationFailure('把节点测速状态提示塞回关闭模式', 'docs/guide/mode-selection.md', (raw) =>
    raw.replace('- 当前保存的节点不会参与连接。', '- 当前保存的节点不会参与连接；\n- 节点测速页面会按需要提示切换到这个状态。')
  )
  expectMutationFailure('在节点选择页虚构客服测试要求', 'docs/guide/node-selection.md', (raw) =>
    raw.replace('- 想用节点测速里带绿色闪电的线路。', '- 想用节点测速里带绿色闪电的线路；\n- 客服建议你测试某个具体节点。')
  )
  expectMutationFailure('把网络诊断改回非正式名称', 'docs/guide/network-diagnostics.md', (raw) =>
    raw.replace('**控制面板** → **网络诊断**', '**控制面板** → **诊断**')
  )
  expectMutationFailure('把其他工具重新塞回网络诊断主页面', 'docs/guide/network-diagnostics.md', (raw) =>
    raw.replace('## 查网址走向 {#route-check}', '## 节点测速\n\n节点测速说明。\n\n## 查网址走向 {#route-check}')
  )
  expectMutationFailure('把网络诊断开场改回功能流水账', 'docs/guide/network-diagnostics.md', (raw) =>
    raw.replace('想了解无忧行代理工作状态时，可以打开**网络诊断**。', '**网络诊断**包含以下功能。')
  )
  expectMutationFailure('把节点测速开场改回问题清单', 'docs/guide/network-diagnostics-node-speed.md', (raw) =>
    raw.replace('想了解哪些无忧行节点当前可用时，可以打开**节点测速**。', '当前节点连不上或感觉很慢时，可以打开**节点测速**。')
  )
  expectMutationFailure('把更新插件导航改回旧名称', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace("{ text: '更新插件', link: '/guide/keep-updated' }", "{ text: '保持更新', link: '/guide/keep-updated' }")
  )
  expectMutationFailure('把更新插件开场改回功能清单', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('无忧行会持续更新插件版本。', '**更新插件**包含以下更新功能。')
  )
  expectMutationFailure('回退 Chrome 商店版本记录', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('<strong>1.5.10</strong>', '<strong>1.5.9</strong>')
  )
  expectMutationFailure('回退 Edge 商店版本记录', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('<span>Microsoft Edge</span>\n    <strong>1.5.10</strong>', '<span>Microsoft Edge</span>\n    <strong>1.5.9</strong>')
  )
  expectMutationFailure('把手动安装浏览器改回纵排', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('class="manual-browser-grid"', 'class="manual-browser-list"')
  )
  expectMutationFailure('删除其他 Chromium 浏览器适用说明', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('，也适用于其他基于 Chromium（Chrome 内核）的浏览器', '')
  )
  expectMutationFailure('把 Edge CRX 安装改回 Load unpacked', 'docs/guide/installation.md', (raw) =>
    raw.replace('把 `.crx` 文件从访达或文件资源管理器拖到 Edge 的扩展管理页中。', '点击**加载解压缩的扩展**，选择 CRX 文件。')
  )
  expectMutationFailure('把 Chrome CRX 安装改回 Load unpacked', 'docs/guide/installation.md', (raw) =>
    raw.replace('把 `.crx` 文件从访达或文件资源管理器拖到 Chrome 的扩展程序管理页中。', '点击**加载已解压的扩展程序**，选择 CRX 文件。')
  )
  expectMutationFailure('删除 Edge CRX 安装视频', 'docs/guide/installation.md', (raw) =>
    raw.replace('/videos/jego-edge-crx-install-20260711.mp4', '/videos/missing-edge-install.mp4')
  )
  expectMutationFailure('删除 Chrome 拖入 CRX 配图', 'docs/guide/installation.md', (raw) =>
    raw.replace('/images/jego-chrome-crx-drag-install-20260711.png', '/images/missing-chrome-install.png')
  )
  expectMutationFailure('删除指纹浏览器安装入口', 'docs/guide/installation.md', (raw) =>
    raw.replace('### 指纹浏览器 {#fingerprint-browser-install}', '### 其他浏览器')
  )
  expectMutationFailure('删除 all hosts 权限', 'docs/guide/plugin-permissions-privacy.md', (raw) =>
    raw.replace('| `host_permissions` · `all URLs` | 用于获取服务配置、连接检测和节点测速 |\n', '')
  )
  expectMutationFailure('在权限页重新写死版本号', 'docs/guide/plugin-permissions-privacy.md', (raw) =>
    raw.replace('无忧行需要下面这些浏览器权限', '无忧行 1.5.10 需要下面这些浏览器权限')
  )
  expectMutationFailure('把保密和客服清单塞回权限页', 'docs/guide/plugin-permissions-privacy.md', (raw) =>
    raw.replace('完整隐私说明见', '## 需要保密的内容\n\n请准备密码、订阅地址和完整日志清单。\n\n完整隐私说明见')
  )
  expectMutationFailure('把账号信息改回技术字段堆叠', 'docs/guide/plugin-permissions-privacy.md', (raw) =>
    raw.replace('完整隐私说明见', '服务会处理登录邮箱、哈希后的密码、订阅状态和用于核对付款的交易 ID。\n\n完整隐私说明见')
  )
  expectMutationFailure('把完整客户端大列表塞回订阅入口', 'docs/devices/pc-mobile.md', (raw) =>
    raw.replace('## 避免浏览器插件和客户端冲突', '<ToolCatalog locale="zh" />\n\n## 避免浏览器插件和客户端冲突')
  )
  expectMutationFailure('删除订阅入口的设备路径', 'docs/devices/pc-mobile.md', (raw) =>
    raw.replace('/subscription/devices/windows', '/subscription/devices/mac')
  )
  expectMutationFailure('把复制和更新模块塞回订阅入口', 'docs/devices/pc-mobile.md', (raw) =>
    raw.replace('## 避免浏览器插件和客户端冲突', '## 复制和更新订阅\n\n重复的订阅管理说明。\n\n## 避免浏览器插件和客户端冲突')
  )
  expectMutationFailure('删除订阅入口控制面板截图', 'docs/devices/pc-mobile.md', (raw) =>
    raw.replace('\n<img src="/images/jego-v1.5.10/subscription-panel-zh.png" alt="无忧行控制面板的订阅节点页面" />\n', '\n')
  )
  expectMutationFailure('把订阅入口关闭截图改回旧图', 'docs/devices/pc-mobile.md', (raw) =>
    raw.replace('/images/jego-v1.5.9/popup-paid-off-zh.png', '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png')
  )
  expectMutationFailure('把 Windows 工具表格加回来', 'docs/devices/windows.md', (raw) =>
    raw.replace('### 推荐客户端', '<ToolCatalog locale="zh" platform="windows" />\n\n### 推荐客户端')
  )
  expectMutationFailure('把 Windows 其他客户端重新折叠', 'docs/devices/windows.md', (raw) =>
    raw.replace('### 推荐客户端', '<details class="subscription-more-clients">\n<summary>其他客户端与原有教程</summary>\n\n### 推荐客户端')
  )
  expectMutationFailure('把 macOS 工具表格加回来', 'docs/devices/mac.md', (raw) =>
    raw.replace('### 推荐客户端', '<ToolCatalog locale="zh" platform="macos" />\n\n### 推荐客户端')
  )
  expectMutationFailure('把 iPhone 和 iPad 工具表格加回来', 'docs/devices/ios.md', (raw) =>
    raw.replace('### 推荐客户端', '<ToolCatalog locale="zh" platform="ios" />\n\n### 推荐客户端')
  )
  expectMutationFailure('把 Android 工具表格加回来', 'docs/devices/android.md', (raw) =>
    raw.replace('### 推荐客户端', '<ToolCatalog locale="zh" platform="android" />\n\n### 推荐客户端')
  )
  expectMutationFailure('把 Linux 工具表格加回来', 'docs/devices/linux.md', (raw) =>
    raw.replace('### 推荐客户端', '<ToolCatalog locale="zh" platform="linux" />\n\n### 推荐客户端')
  )
  expectMutationFailure('把 HarmonyOS 工具表格加回来', 'docs/devices/harmony.md', (raw) =>
    raw.replace('### 推荐客户端', '<ToolCatalog locale="zh" platform="harmonyos" />\n\n### 推荐客户端')
  )
  expectMutationFailure('把设备页标题改回旧写法', 'docs/devices/ios.md', (raw) =>
    raw.replace('# iPhone / iPad 翻墙指南', '# 苹果手机/iPad 怎么翻墙')
  )
  expectMutationFailure('删除全局图标文字同行样式', 'docs/.vitepress/theme/style.css', (raw) =>
    raw.replace('.vp-doc :is(h2, h3, h4) > img', '.vp-doc h2 > img')
  )
  expectMutationFailure('把订阅正式路由改回额外页面', 'scripts/subscription-route-map.mjs', (raw) =>
    raw.replace('`/${prefix}subscription/`]', '`/${prefix}subscription/connection-methods`]')
  )
  expectAddedFileFailure(
    '恢复未发布的重复工具目录',
    'docs/tool/index.md',
    '---\ntitle: 重复目录\n---\n\n# 重复目录\n\n重复内容。\n',
    '未发布的重复入口必须删除：docs/tool/index.md'
  )
  expectAddedFileFailure(
    '恢复未发布的故障排查入口',
    'docs/troubleshooting/index.md',
    '---\ntitle: 重复故障入口\n---\n\n# 重复故障入口\n\n重复内容。\n',
    '未发布的重复入口必须删除：docs/troubleshooting/index.md'
  )
  expectAddedFileFailure(
    '恢复已删除的站内隐私页',
    'docs/policies/privacy.md',
    '---\ntitle: 站内隐私页\n---\n\n# 站内隐私页\n\n重复官方政策。\n',
    '未发布的重复入口必须删除：docs/policies/privacy.md'
  )
  expectMutationFailure('把订阅页章节重新塞回导航', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace(
      "{ text: '订阅服务', link: '/subscription/' }",
      "{ text: '订阅服务', link: '/subscription/' },\n      { text: '按设备安装', link: '/subscription/#按设备安装' }"
    )
  )
  expectMutationFailure('从订阅侧边栏删除真实设备子页面', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace("      { text: 'Windows 翻墙指南', link: '/subscription/devices/windows' },\n", '')
  )
  expectMutationFailure('把订阅侧边栏退回只有系统名', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace("{ text: 'Windows 翻墙指南', link: '/subscription/devices/windows' }", "{ text: 'Windows', link: '/subscription/devices/windows' }")
  )
  expectMutationFailure('把网络诊断复制到帮助与支持', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace(
      "text: '帮助与支持',\n    items: [\n      { text: '常见问题'",
      "text: '帮助与支持',\n    items: [\n      { text: '网络诊断', link: '/guide/network-diagnostics' },\n      { text: '常见问题'"
    )
  )
  expectMutationFailure('把 AI 产品访问移回帮助与支持', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace(
      "text: '帮助与支持',\n    items: [\n      { text: '常见问题'",
      "text: '帮助与支持',\n    items: [\n      { text: 'AI 产品访问', link: '/guide/chatgpt-access' },\n      { text: '常见问题'"
    )
  )
  expectMutationFailure('把网络诊断任务说明复制回常见问题', 'docs/guide/faq.md', (raw) =>
    raw.replace('这里整理了使用无忧行时常见的几个问题。', '这里重新说明当前加速状态、连接检测和查询网址走向。')
  )
  expectMutationFailure('删除经产品确认的 FAQ 问题', 'docs/guide/faq.md', (raw) =>
    raw.replace('### 所有线路都能进行 Gemini、ChatGPT、Claude 等 AI 产品的访问吗？\n\n', '')
  )
  expectMutationFailure('删除 FAQ 插件自助网络诊断入口', 'docs/guide/faq.md', (raw) =>
    raw.replace('### 如何使用网络诊断自助检查插件？', '### 插件帮助')
  )
  expectMutationFailure('恢复 FAQ 无帮助导航段落', 'docs/guide/faq.md', (raw) =>
    raw.replace('### 什么时候需要联系支持？', '## 电脑和手机订阅客户端\n\n从订阅服务选择设备。\n\n### 什么时候需要联系支持？')
  )
  expectMutationFailure('删除 AI 指南的 Google 全局模式', 'docs/guide/chatgpt-access.md', (raw) =>
    raw.replace('## Google AI 产品使用全局模式', '## Google AI 产品')
  )
  expectMutationFailure('把 Google AI 配图改回香港节点', 'docs/guide/chatgpt-access.md', (raw) =>
    raw.replace('/images/jego-v1.5.10/popup-paid-global-ai-zh.png', '/images/jego-v1.5.9/popup-paid-global-auto-zh.png')
  )
  expectMutationFailure('删除 Google AI 配图灰色描边', 'docs/guide/chatgpt-access.md', (raw) =>
    raw.replace('class="jego-popup-screenshot"', '')
  )
  expectMutationFailure('把会员导航改回账户与支付', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace("text: '会员与支付'", "text: '账户、会员与支付'")
  )
  expectMutationFailure('把使用规则改回内部政策名称', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace("text: '使用规则'", "text: '安全、规则与使用政策'")
  )
  expectMutationFailure('把网络与线路改回技术参考名称', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace("text: '网络与线路'", "text: '产品与网络参考'")
  )
  expectMutationFailure('把版本说明改回服务边界', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace("text: '无忧行的三个版本'", "text: '服务边界'")
  )
  expectMutationFailure('把普通控制面板入口重新写成会员权益', 'docs/membership/benefits.md', (raw) =>
    raw.replace('2. 可以使用无忧行插件里更多、更快、更稳定的网络节点。', '4. **一个账号集中管理**：查看会员状态、订单和客服入口。\n2. 可以使用无忧行插件里更多、更快、更稳定的网络节点。')
  )
  expectMutationFailure('把购买后核对改回重新登录', 'docs/membership/payment.md', (raw) =>
    raw.replace('付款完成后，打开**控制面板 → 支付记录**，查看是否能查询到本次订单。', '付款完成后刷新并重新登录。')
  )
  expectMutationFailure('把设备教程塞回购买前核对', 'docs/membership/benefits.md', (raw) =>
    raw.replace('具体方法见[电脑和手机使用指南](/subscription/)。', '具体方法见[电脑和手机使用指南](/subscription/)。\n从按设备安装进入对应教程。')
  )
  expectMutationFailure('把重复对比表塞回版本说明', 'docs/guide/services.md', (raw) =>
    raw.replace('## 免费版', '## 三种服务说明\n\n| 服务 | 免费版 | 会员版 |\n|---|---|---|\n| 节点 | 少 | 多 |\n\n## 免费版')
  )
  expectMutationFailure('在版本标题后重复三个版本', 'docs/guide/services.md', (raw) =>
    raw.replace('# 无忧行的三个版本', '# 无忧行的三个版本\n\n无忧行分为免费版、体验版和会员版。')
  )
  expectMutationFailure('删除免费版网站限制', 'docs/guide/services.md', (raw) =>
    raw.replace('但可访问的网站有限，目前主要支持 Google、Wikipedia、NewBing、ChatGPT、Grok、Claude 等指定网站', '可以访问任意网站')
  )
  expectMutationFailure('把面包屑改回 SEO 长标题', 'docs/.vitepress/theme/components/GeoPageMeta.vue', (raw) =>
    raw.replace('{{ displayTitle }}', '{{ page.title }}')
  )
  expectMutationFailure('把平台名称改回内部小写值', 'docs/.vitepress/theme/components/GeoPageMeta.vue', (raw) =>
    raw.replace('{{ platformText }}', "{{ frontmatter.platforms.join(' · ') }}")
  )
  expectMutationFailure('把未经核实的客户端状态栏加回来', 'docs/.vitepress/theme/components/GeoPageMeta.vue', (raw) =>
    raw.replace('<div class="geo-page-context">', '<div class="geo-page-context"><span>客户端状态</span><span>Jego 支持</span>')
  )
  expectMutationFailure('把客户端模板链接加回来', 'docs/.vitepress/theme/components/GeoPageMeta.vue', (raw) =>
    raw.replace('<div class="geo-page-context">', '<div class="geo-page-context"><p class="geo-tool-context-links">订阅服务 · 联系支持</p>')
  )
  expectMutationFailure('删除 Edge 正式显示名称', 'docs/.vitepress/data/platform-labels.json', (raw) =>
    raw.replace('  "edge": "Edge",\n', '')
  )
  expectMutationFailure('把设备摘要改回百科文字', 'docs/devices/windows.md', (raw) =>
    raw.replace('在 Windows 电脑上选择合适的客户端，导入无忧行订阅并开始连接。', 'Windows 在全世界个人电脑操作系统中处于垄断地位。')
  )
  expectMutationFailure('删除支付页 GitHub 基线发票问题', 'docs/membership/payment.md', (raw) =>
    raw.replace('### 购买会员是否可以开发票？', '### 发票与收据')
  )
  console.log('\nGEO regression self-test passed.')
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true })
}
