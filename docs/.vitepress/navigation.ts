import catalog from './data/tool-catalog.json'

const zhTools = catalog.tools.map((tool) => ({ text: tool.name.zh, link: `/tool/${tool.slug}` }))
const enTools = catalog.tools.map((tool) => ({ text: tool.name.en, link: `/en/tool/${tool.slug}` }))

export const zhNav = [
  { text: '快速开始', link: '/guide/overview' },
  {
    text: '浏览器插件',
    items: [
      { text: '插件弹窗', link: '/guide/plugin-features' },
      { text: '控制面板', link: '/guide/control-panel' },
      { text: '网络诊断', link: '/guide/network-diagnostics' }
    ]
  },
  {
    text: '订阅服务',
    items: [
      { text: '订阅服务', link: '/subscription/' },
      { text: '按设备选客户端', link: '/devices/' },
      { text: '客户端教程', link: '/tool/' }
    ]
  },
  { text: '故障排查', link: '/troubleshooting/' }
]

export const enNav = [
  { text: 'Quick Start', link: '/en/guide/overview' },
  {
    text: 'Browser Extension',
    items: [
      { text: 'Extension popup', link: '/en/guide/plugin-features' },
      { text: 'Inside the Control Panel', link: '/en/guide/control-panel' },
      { text: 'Diagnostics', link: '/en/guide/network-diagnostics' }
    ]
  },
  {
    text: 'Subscription Services',
    items: [
      { text: 'Computers and phones', link: '/en/subscription/' },
      { text: 'Choose by device', link: '/en/devices/' },
      { text: 'Client guides', link: '/en/tool/' }
    ]
  },
  { text: 'Troubleshooting', link: '/en/troubleshooting/' }
]

export const zhSidebar = [
  {
    text: '产品与快速开始',
    items: [
      { text: '产品概述', link: '/guide/overview' },
      { text: '安装插件', link: '/guide/installation' },
      { text: '注册账户', link: '/guide/registration' },
      { text: '开始使用无忧行', link: '/guide/usage' }
    ]
  },
  {
    text: '浏览器插件',
    items: [
      { text: '插件弹窗', link: '/guide/plugin-features' },
      { text: '规则、全局和关闭', link: '/guide/mode-selection' },
      { text: '自动或手动选节点', link: '/guide/node-selection' },
      { text: '控制面板', link: '/guide/control-panel' },
      { text: '代理策略', link: '/guide/proxy-strategy' },
      { text: '网络诊断', link: '/guide/network-diagnostics' },
      { text: '节点测速', link: '/guide/network-diagnostics-node-speed' },
      { text: '插件更新与恢复', link: '/guide/plugin-maintenance' },
      { text: '防止失联', link: '/guide/keep-updated' },
      { text: '权限、隐私与安全', link: '/guide/plugin-permissions-privacy' }
    ]
  },
  {
    text: '订阅服务',
    items: [
      { text: '在电脑和手机上使用', link: '/subscription/' },
      { text: '复制和更新订阅', link: '/subscription/management' },
      { text: '按设备选客户端', link: '/devices/' },
      { text: 'PC 与手机选择', link: '/devices/pc-mobile' },
      { text: 'Android', link: '/devices/android' },
      { text: 'iPhone / iPad', link: '/devices/ios' },
      { text: 'Apple ID 帮助', link: '/devices/us-apple-id' },
      { text: 'HarmonyOS', link: '/devices/harmony' },
      { text: 'Windows', link: '/devices/windows' },
      { text: 'macOS', link: '/devices/mac' },
      { text: 'Linux', link: '/devices/linux' },
      { text: '全部客户端教程', link: '/tool/' },
      ...zhTools
    ]
  },
  {
    text: '故障排查与支持',
    items: [
      { text: '无忧行故障排查', link: '/troubleshooting/' },
      { text: '客户端故障排查', link: '/troubleshooting/client' },
      { text: 'AI 服务访问', link: '/guide/chatgpt-access' },
      { text: '常见问题', link: '/guide/faq' },
      { text: '联系支持', link: '/guide/support' }
    ]
  },
  {
    text: '产品与网络参考',
    items: [
      { text: '服务边界', link: '/guide/services' },
      { text: '节点与线路', link: '/guide/nodes' },
      { text: '加密 DNS', link: '/guide/encrypted-dns' }
    ]
  },
  {
    text: '账户、会员与支付',
    items: [
      { text: '会员与权益', link: '/membership/benefits' },
      { text: '支付', link: '/membership/payment' }
    ]
  },
  {
    text: '安全、规则与使用政策',
    items: [
      { text: '隐私与数据说明', link: '/policies/privacy' },
      { text: '公平使用', link: '/abuse/fair-use' },
      { text: '流量限制', link: '/abuse/limits' }
    ]
  },
  {
    text: '场景教程',
    items: [{ text: 'Vibe Coding', link: '/guide/vibe-coding' }]
  }
]

export const enSidebar = [
  {
    text: 'Product and quick start',
    items: [
      { text: 'Product overview', link: '/en/guide/overview' },
      { text: 'Install the extension', link: '/en/guide/installation' },
      { text: 'Register an account', link: '/en/guide/registration' },
      { text: 'Start using Jego', link: '/en/guide/usage' }
    ]
  },
  {
    text: 'Browser extension',
    items: [
      { text: 'Extension popup', link: '/en/guide/plugin-features' },
      { text: 'Rules, Global, and Off', link: '/en/guide/mode-selection' },
      { text: 'Auto or manual nodes', link: '/en/guide/node-selection' },
      { text: 'Inside the Control Panel', link: '/en/guide/control-panel' },
      { text: 'Proxy Rules', link: '/en/guide/proxy-strategy' },
      { text: 'Diagnostics', link: '/en/guide/network-diagnostics' },
      { text: 'Node Test', link: '/en/guide/network-diagnostics-node-speed' },
      { text: 'Updates and recovery', link: '/en/guide/plugin-maintenance' },
      { text: 'Stay Connected', link: '/en/guide/keep-updated' },
      { text: 'Permissions, privacy, and security', link: '/en/guide/plugin-permissions-privacy' }
    ]
  },
  {
    text: 'Subscription Services',
    items: [
      { text: 'Use Jego on other devices', link: '/en/subscription/' },
      { text: 'Copy or update a subscription', link: '/en/subscription/management' },
      { text: 'Choose a client by device', link: '/en/devices/' },
      { text: 'PC and mobile', link: '/en/devices/pc-mobile' },
      { text: 'Android', link: '/en/devices/android' },
      { text: 'iPhone / iPad', link: '/en/devices/ios' },
      { text: 'Apple ID help', link: '/en/devices/us-apple-id' },
      { text: 'HarmonyOS', link: '/en/devices/harmony' },
      { text: 'Windows', link: '/en/devices/windows' },
      { text: 'macOS', link: '/en/devices/mac' },
      { text: 'Linux', link: '/en/devices/linux' },
      { text: 'All client guides', link: '/en/tool/' },
      ...enTools
    ]
  },
  {
    text: 'Troubleshooting and support',
    items: [
      { text: 'Jego troubleshooting', link: '/en/troubleshooting/' },
      { text: 'Fix a client problem', link: '/en/troubleshooting/client' },
      { text: 'AI service access', link: '/en/guide/chatgpt-access' },
      { text: 'FAQ', link: '/en/guide/faq' },
      { text: 'Contact support', link: '/en/guide/support' }
    ]
  },
  {
    text: 'Product and network reference',
    items: [
      { text: 'Service boundaries', link: '/en/guide/services' },
      { text: 'Nodes and routes', link: '/en/guide/nodes' },
      { text: 'Encrypted DNS', link: '/en/guide/encrypted-dns' }
    ]
  },
  {
    text: 'Account, membership, and billing',
    items: [
      { text: 'Membership and benefits', link: '/en/membership/benefits' },
      { text: 'Payments', link: '/en/membership/payment' }
    ]
  },
  {
    text: 'Safety, rules, and policies',
    items: [
      { text: 'Privacy and data', link: '/en/policies/privacy' },
      { text: 'Fair use', link: '/en/abuse/fair-use' },
      { text: 'Traffic limits', link: '/en/abuse/limits' }
    ]
  },
  {
    text: 'Scenario tutorials',
    items: [{ text: 'Vibe Coding', link: '/en/guide/vibe-coding' }]
  }
]
