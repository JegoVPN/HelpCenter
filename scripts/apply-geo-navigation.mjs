import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const configPath = path.join(process.cwd(), 'docs/.vitepress/config.mts')
let config = readFileSync(configPath, 'utf8')

function replaceLocaleBlock(marker, navName, sidebarName) {
  const markerIndex = config.indexOf(marker)
  if (markerIndex === -1) throw new Error(`找不到配置标记：${marker}`)
  const lastUpdatedIndex = config.indexOf('        lastUpdated:', markerIndex)
  if (lastUpdatedIndex === -1) throw new Error(`找不到 lastUpdated：${marker}`)
  const existing = config.slice(markerIndex, lastUpdatedIndex)
  if (existing.includes(`nav: ${navName}`)) return
  const navIndex = config.indexOf('        nav: [', markerIndex)
  if (navIndex === -1 || navIndex > lastUpdatedIndex) throw new Error(`找不到旧导航：${marker}`)
  config = `${config.slice(0, navIndex)}        nav: ${navName},\n        sidebar: ${sidebarName},\n${config.slice(lastUpdatedIndex)}`
}

replaceLocaleBlock('// 中文主题配置', 'zhNav', 'zhSidebar')
replaceLocaleBlock('// 英文主题配置', 'enNav', 'enSidebar')
writeFileSync(configPath, config)
console.log('Applied GEO navigation.')
