import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "无忧行 - 使用指南",
  description: "无忧行是最好用的免费代理工具，专为Edge和Chrome浏览器设计",
  base: '/',
  lastUpdated: true,
  
  sitemap: {
    hostname: 'https://help.jegovpn.com',
    lastmodDateOnly: false
  },
  // 启用简洁URL，移除.html后缀
  cleanUrls: true,
  
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
      description: "无忧行是最好用的免费代理工具，专为Edge和Chrome浏览器设计",
      themeConfig: {
        // 中文主题配置
        nav: [
          { text: '浏览器翻墙教程', link: '/guide/usage' },
          { text: '电脑和手机翻墙教程', link: '/devices/pc-mobile' }
        ],
        sidebar: [
          {
            text: '使用教程',
            items: [
              { text: '📗如何安装', link: '/guide/installation' },
              { text: '👶如何注册', link: '/guide/registration' },
              { text: '🔮如何翻墙', link: '/guide/usage' },
              { text: '🤖如何解锁New Bing、Copilot或者ChatGPT', link: '/guide/chatgpt-access' },
              { text: '🟢服务详解', link: '/guide/services' },
              { text: '🌐节点选择', link: '/guide/node-selection' },
              { text: '📋节点介绍', link: '/guide/nodes' },
              { text: '☑️模式选择', link: '/guide/mode-selection' },
              { text: '🔀代理策略', link: '/guide/proxy-strategy' },
              { text: '🔄防止失联', link: '/guide/keep-updated' },
              { text: '🙋联系客服', link: '/guide/support' },
              { text: '❓常见问题', link: '/guide/faq' },
              { text: '🔒加密DNS', link: '/guide/encrypted-dns' },
              { text: '💻Vibe Coding', link: '/guide/vibe-coding' }
            ]
          },
          {
            text: '升级会员',
            items: [
              { text: '🏆会员体系', link: '/membership/benefits' },
              { text: '💳如何支付', link: '/membership/payment' }
            ]
          },
          {
            text: '订阅服务',
            items: [
              { text: '在电脑或手机上如何翻墙', link: '/devices/pc-mobile' },
              { text: '安卓手机怎么翻墙', link: '/devices/android' },
              { text: '苹果手机/iPad 怎么翻墙', link: '/devices/ios' },
              { text: '美区 Apple ID 注册教程', link: '/devices/us-apple-id' },
              { text: '华为鸿蒙手机怎么翻墙', link: '/devices/harmony' },
              { text: 'Windows 电脑怎么翻墙', link: '/devices/windows' },
              { text: '苹果Mac电脑怎么翻墙', link: '/devices/mac' },
              { text: 'Linux 电脑怎么翻墙', link: '/devices/linux' }
            ]
          },
          {
            text: '工具软件',
            items: [
              { text: 'Mihomo系列软件', link: '/tool/mihomo' },
              { text: 'FlClash', link: '/tool/flclash' },
              { text: 'Clash Verge Rev', link: '/tool/clashverge' },
              { text: 'sing-box', link: '/tool/sing-box' },
              { text: 'sing-box for Android', link: '/tool/sing-boxforandroid' },
              { text: 'sing-box for Apple', link: '/tool/sing-boxforapple' },
              { text: 'GUI.for.SingBox', link: '/tool/guiforsing-box' },
              { text: 'Shadowrocket', link: '/tool/shadowrocket' },
              { text: 'Surfboard', link: '/tool/surfboard' },
              { text: 'v2rayN', link: '/tool/v2rayn' },
              { text: 'v2rayNG', link: '/tool/v2rayng' },
              { text: 'OneClick', link: '/tool/oneclick' },
              { text: 'Surge', link: '/tool/surge' },
              { text: 'Quantumult X', link: '/tool/quantumult-x' },
              { text: 'Loon', link: '/tool/loon' },
              { text: 'ClashBox', link: '/tool/clashbox' },
              { text: 'Clash for Windows', link: '/tool/clash-for-windows' },
              { text: 'Clash for Android', link: '/tool/clash-for-android' }
            ]
          },
          {
            text: '使用准则',
            items: [
              { text: '❤️公平使用', link: '/abuse/fair-use' },
              { text: '⏳流量限制', link: '/abuse/limits' }
            ]
          }
        ],
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
      description: "Jego is the best free proxy tool designed for Edge and Chrome browsers",
      link: '/en/',
      themeConfig: {
        // 英文主题配置
        nav: [
          { text: 'Browser Proxy Tutorial', link: '/en/guide/usage' },
          { text: 'PC & Mobile Proxy Tutorial', link: '/en/devices/pc-mobile' }
        ],
        sidebar: [
          {
            text: 'User Guide',
            items: [
              { text: '📗How to Install', link: '/en/guide/installation' },
              { text: '👶How to Register', link: '/en/guide/registration' },
              { text: '🔮How to Use Proxy', link: '/en/guide/usage' },
              { text: '🤖How to Access New Bing, Copilot or ChatGPT', link: '/en/guide/chatgpt-access' },
              { text: '🟢Service Details', link: '/en/guide/services' },
              { text: '🌐Node Selection', link: '/en/guide/node-selection' },
              { text: '📋Node Introduction', link: '/en/guide/nodes' },
              { text: '☑️Mode Selection', link: '/en/guide/mode-selection' },
              { text: '🔀Proxy Strategy', link: '/en/guide/proxy-strategy' },
              { text: '🔄Stay Connected', link: '/en/guide/keep-updated' },
              { text: '🙋Contact Support', link: '/en/guide/support' },
              { text: '❓FAQ', link: '/en/guide/faq' },
              { text: '🔒Encrypted DNS', link: '/en/guide/encrypted-dns' },
              { text: '💻Vibe Coding', link: '/en/guide/vibe-coding' }
            ]
          },
          {
            text: 'Premium Membership',
            items: [
              { text: '🏆Membership Benefits', link: '/en/membership/benefits' },
              { text: '💳How to Pay', link: '/en/membership/payment' }
            ]
          },
          {
            text: 'Subscription Services',
            items: [
              { text: 'How to Use Proxy on PC or Mobile', link: '/en/devices/pc-mobile' },
              { text: 'How to Use Proxy on Android', link: '/en/devices/android' },
              { text: 'How to Use Proxy on iPhone/iPad', link: '/en/devices/ios' },
              { text: 'US Apple ID Registration Guide', link: '/en/devices/us-apple-id' },
              { text: 'How to Use Proxy on Harmony OS', link: '/en/devices/harmony' },
              { text: 'How to Use Proxy on Windows', link: '/en/devices/windows' },
              { text: 'How to Use Proxy on Mac', link: '/en/devices/mac' },
              { text: 'How to Use Proxy on Linux', link: '/en/devices/linux' }
            ]
          },
          {
            text: 'Tools & Software',
            items: [
              { text: 'Mihomo Series', link: '/en/tool/mihomo' },
              { text: 'FlClash', link: '/en/tool/flclash' },
              { text: 'Clash Verge Rev', link: '/en/tool/clashverge' },
              { text: 'sing-box', link: '/en/tool/sing-box' },
              { text: 'sing-box for Android', link: '/en/tool/sing-boxforandroid' },
              { text: 'sing-box for Apple', link: '/en/tool/sing-boxforapple' },
              { text: 'GUI.for.SingBox', link: '/en/tool/guiforsing-box' },
              { text: 'Shadowrocket', link: '/en/tool/shadowrocket' },
              { text: 'Surfboard', link: '/en/tool/surfboard' },
              { text: 'v2rayN', link: '/en/tool/v2rayn' },
              { text: 'v2rayNG', link: '/en/tool/v2rayng' },
              { text: 'OneClick', link: '/en/tool/oneclick' },
              { text: 'Surge', link: '/en/tool/surge' },
              { text: 'Quantumult X', link: '/en/tool/quantumult-x' },
              { text: 'Loon', link: '/en/tool/loon' },
              { text: 'ClashBox', link: '/en/tool/clashbox' },
              { text: 'Clash for Windows', link: '/en/tool/clash-for-windows' },
              { text: 'Clash for Android', link: '/en/tool/clash-for-android' }
            ]
          },
          {
            text: 'Usage Guidelines',
            items: [
              { text: '❤️Fair Use', link: '/en/abuse/fair-use' },
              { text: '⏳Traffic Limits', link: '/en/abuse/limits' }
            ]
          }
        ],
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
