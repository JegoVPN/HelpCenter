import { defineConfig } from 'vitepress'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { geoHead, geoSitemapItems } from './geo'
import { enNav, enSidebar, zhNav, zhSidebar } from './navigation'
import {
  LEGACY_ROUTE_MAP,
  LEGACY_ROUTE_PAIRS,
  VITEPRESS_REWRITES
} from '../../scripts/subscription-route-map.mjs'

function outputPath(outDir: string, route: string) {
  if (route.endsWith('/')) return path.join(outDir, route.slice(1), 'index.html')
  return path.join(outDir, `${route.slice(1)}.html`)
}

function redirectHtml(target: string, locale: 'zh-Hans' | 'en') {
  const title = locale === 'en' ? 'Opening the updated page' : '正在打开新页面'
  const link = locale === 'en' ? 'Continue' : '继续前往'
  return `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0; url=${target}">
    <link rel="canonical" href="https://help.jegovpn.com${target}">
    <title>${title}</title>
  </head>
  <body>
    <p><a href="${target}">${link}</a></p>
    <script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>
  </body>
</html>`
}

const legacyRoutePlugin = {
  name: 'jego-legacy-subscription-routes',
  enforce: 'pre' as const,
  configureServer(server: any) {
    server.middlewares.use((request: any, response: any, next: () => void) => {
      const url = new URL(request.url || '/', 'http://127.0.0.1')
      const target = LEGACY_ROUTE_MAP[url.pathname]
      if (!target) return next()
      response.statusCode = 302
      response.setHeader('Location', `${target}${url.search}`)
      response.end()
    })
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "无忧行 - 使用指南",
  description: "无忧行是专为 Chrome 和 Edge 设计的免费代理工具，简单易用、高效安全，帮助你轻松访问全球网站。",
  base: '/',
  lastUpdated: true,
  
  sitemap: {
    hostname: 'https://help.jegovpn.com',
    lastmodDateOnly: false,
    transformItems: geoSitemapItems
  },
  transformHead: geoHead,
  // 启用简洁URL，移除.html后缀
  cleanUrls: true,
  rewrites: VITEPRESS_REWRITES,
  vite: {
    plugins: [legacyRoutePlugin]
  },
  async buildEnd(siteConfig) {
    for (const [legacy, canonical] of LEGACY_ROUTE_PAIRS) {
      const output = outputPath(siteConfig.outDir, legacy)
      await mkdir(path.dirname(output), { recursive: true })
      await writeFile(output, redirectHtml(canonical, legacy.startsWith('/en/') ? 'en' : 'zh-Hans'))
    }
  },
  
  // 配置favicon和PWA
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],

  // 国际化配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-Hans',
      title: "无忧行 - 使用指南",
      description: "无忧行是专为 Chrome 和 Edge 设计的免费代理工具，简单易用、高效安全，帮助你轻松访问全球网站。",
      themeConfig: {
        // 中文主题配置
        nav: zhNav,
        sidebar: zhSidebar,
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        footer: {
          copyright: 'Copyright © 2020-2026 Jego, All rights reserved.'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "Jego - User Guide",
      description: "Jego is a free proxy tool designed for Chrome and Edge, making it simple, fast, and secure to access websites around the world.",
      link: '/en/',
      themeConfig: {
        // 英文主题配置
        nav: enNav,
        sidebar: enSidebar,
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        footer: {
          copyright: 'Copyright © 2020-2026 Jego, All rights reserved.'
        }
      }
    }
  },
  
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/jego.svg', width: 24, height: 24 },
    search: {
      // provider: 'algolia',
      // options: {
      //   appId: '4ICZGB6WSW',
      //   apiKey: '1c259584979876313f9ecdb24906b90f',
      //   indexName: 'help_jegovpn_com_4iczgb6wsw_pages'
      // }
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  // submitQuestionText: '提交问题',
                  selectKeyAriaLabel: 'Enter 键',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '向上箭头',
                  navigateDownKeyAriaLabel: '向下箭头',
                  closeText: '关闭',
                  // backToSearchText: '返回搜索',
                  closeKeyAriaLabel: 'Esc 键',
                  // poweredByText: '搜索提供者'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search docs',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'Select',
                  selectKeyAriaLabel: 'Enter key',
                  navigateText: 'Navigate',
                  navigateUpKeyAriaLabel: 'Up arrow',
                  navigateDownKeyAriaLabel: 'Down arrow',
                  closeText: 'Close',
                  closeKeyAriaLabel: 'Esc key'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/></svg>'
        },
        link: 'https://www.jegovpn.com/',
        ariaLabel: 'cool link'
      }
    ]
  }
})
