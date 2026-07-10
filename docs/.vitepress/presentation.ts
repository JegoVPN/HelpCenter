import { enSidebar, zhSidebar } from './navigation'
import platformLabels from './data/platform-labels.json'

type SidebarItem = {
  text: string
  link?: string
  items?: SidebarItem[]
}

function collectLabels(items: SidebarItem[], labels = new Map<string, string>()) {
  for (const item of items) {
    if (item.link) labels.set(item.link, item.text)
    if (item.items) collectLabels(item.items, labels)
  }
  return labels
}

const sidebarLabels = new Map([
  ...collectLabels(zhSidebar as SidebarItem[]),
  ...collectLabels(enSidebar as SidebarItem[])
])

export function routeFromRelativePath(relativePath: string) {
  const relative = relativePath.replace(/\.md$/, '')
  if (relative === 'index') return '/'
  if (relative === 'en/index') return '/en/'
  if (relative.endsWith('/index')) return `/${relative.slice(0, -'/index'.length)}/`
  return `/${relative}`
}

export function cleanPageTitle(title: string) {
  return title
    .replace(/^✨\s*/, '')
    .replace(/\s+-\s+(?:使用指南|工具软件|会员服务|使用条款|设备支持|iOS\/iPadOS)$/i, '')
    .replace(/\s+-\s+(?:User Guide|Tools & Software|Membership Service|Terms of Use|Device Support|iOS\/iPadOS)$/i, '')
    .trim()
}

export function pageDisplayTitle(relativePath: string, title: string) {
  return sidebarLabels.get(routeFromRelativePath(relativePath)) || cleanPageTitle(title)
}

export function formatPlatforms(platforms: unknown) {
  if (!Array.isArray(platforms)) return ''
  return platforms
    .map((platform) => platformLabels[String(platform) as keyof typeof platformLabels] || String(platform))
    .join(' · ')
}

export function knownPlatform(platform: string) {
  return platform in platformLabels
}
