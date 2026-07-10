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
  expectMutationFailure('删除官方隐私来源', 'docs/policies/privacy.md', (raw) =>
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
    raw.replace('## 查询网址走向 {#route-check}', '## 节点测速\n\n节点测速说明。\n\n## 查询网址走向 {#route-check}')
  )
  expectMutationFailure('把网络诊断开场改回功能流水账', 'docs/guide/network-diagnostics.md', (raw) =>
    raw.replace('想了解无忧行代理工作状态时，可以打开**网络诊断**。', '**网络诊断**包含以下功能。')
  )
  expectMutationFailure('把节点测速开场改回问题清单', 'docs/guide/network-diagnostics-node-speed.md', (raw) =>
    raw.replace('想了解哪些无忧行节点当前可用时，可以打开**节点测速**。', '当前节点连不上或感觉很慢时，可以打开**节点测速**。')
  )
  expectMutationFailure('把插件维护开场改回问题清单', 'docs/guide/plugin-maintenance.md', (raw) =>
    raw.replace('想让无忧行保持最新版本，或在浏览器更新后重新确认插件状态时，可以按本页顺序操作。', '插件打不开或设置失效时，按下面清单排查。')
  )
  expectMutationFailure('把泛化保密提醒塞回插件维护页', 'docs/guide/plugin-maintenance.md', (raw) =>
    raw.replace('联系方法见[联系支持](/guide/support)。', '密码、Cookie 和订阅地址留在自己的设备上。联系方法见[联系支持](/guide/support)。')
  )
  expectMutationFailure('把防止失联导航改回旧名称', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace("{ text: '防止失联', link: '/guide/keep-updated' }", "{ text: '保持更新', link: '/guide/keep-updated' }")
  )
  expectMutationFailure('把防止失联开场改回功能清单', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('无忧行会持续更新插件版本和订阅内容。', '**防止失联**包含以下更新功能。')
  )
  expectMutationFailure('删除手机订阅每 24 小时更新建议', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('手机上的订阅客户端建议每 24 小时更新一次', '手机上的订阅客户端可以按需更新')
  )
  expectMutationFailure('把手动安装浏览器改回纵排', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('class="manual-browser-grid"', 'class="manual-browser-list"')
  )
  expectMutationFailure('删除其他 Chromium 浏览器适用说明', 'docs/guide/keep-updated.md', (raw) =>
    raw.replace('，也适用于其他基于 Chromium（Chrome 内核）的浏览器', '')
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
    raw.replace('## 复制和更新订阅', '<ToolCatalog locale="zh" />\n\n## 复制和更新订阅')
  )
  expectMutationFailure('删除订阅入口的设备路径', 'docs/devices/pc-mobile.md', (raw) =>
    raw.replace('/subscription/devices/windows', '/subscription/devices/mac')
  )
  expectMutationFailure('删除订阅重置结果说明', 'docs/devices/pc-mobile.md', (raw) =>
    raw.replace('原地址随即停止使用', '地址会发生变化')
  )
  expectMutationFailure('把设备页改回完整客户端表', 'docs/devices/windows.md', (raw) =>
    raw.replace('platform="windows" recommended-only', 'platform="windows"')
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
  expectMutationFailure('把订阅页章节重新塞回导航', 'docs/.vitepress/navigation.ts', (raw) =>
    raw.replace(
      "{ text: '订阅服务', link: '/subscription/' }",
      "{ text: '订阅服务', link: '/subscription/' },\n      { text: '按设备安装', link: '/subscription/#按设备安装' }"
    )
  )
  console.log('\nGEO regression self-test passed.')
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true })
}
