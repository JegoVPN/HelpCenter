import type { HeadConfig } from 'vitepress'

export const SITE_ORIGIN = 'https://help.jegovpn.com'
const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`
const WEBSITE_ID = `${SITE_ORIGIN}/#website`

function pageRoute(page: string) {
  const relative = page.replace(/\.md$/, '')
  if (relative === 'index') return '/'
  if (relative === 'en/index') return '/en/'
  if (relative.endsWith('/index')) return `/${relative.slice(0, -'/index'.length)}/`
  return `/${relative}`
}

function languageRoutes(route: string) {
  const isEnglish = route === '/en/' || route.startsWith('/en/')
  const zh = isEnglish ? route.replace(/^\/en(?=\/)/, '') : route
  const en = isEnglish ? route : route === '/' ? '/en/' : `/en${route}`
  return { zh: zh || '/', en }
}

function absolute(route: string) {
  return new URL(route, SITE_ORIGIN).href
}

function textFromHtml(html: string) {
  return html
    .replace(/<a\b[^>]*class="header-anchor"[^>]*>.*?<\/a>/gis, '')
    .replace(/<script\b[^>]*>.*?<\/script>/gis, ' ')
    .replace(/<style\b[^>]*>.*?<\/style>/gis, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

function faqEntities(content: string) {
  const footerMarkers = [
    content.indexOf('class="VPDocFooter'),
    content.indexOf('<footer')
  ].filter((index) => index >= 0)
  const articleContent = footerMarkers.length ? content.slice(0, Math.min(...footerMarkers)) : content
  const headings = [...articleContent.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)]
  return headings
    .map((heading, index) => {
      const start = (heading.index || 0) + heading[0].length
      const end = headings[index + 1]?.index ?? articleContent.length
      const name = textFromHtml(heading[1])
      const answer = textFromHtml(articleContent.slice(start, end))
      if (!name || answer.length < 20) return null
      return {
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }
    })
    .filter(Boolean)
}

function isTechArticle(contentType: string, page: string) {
  if (
    [
      'how-to',
      'diagnostic',
      'subscription-management',
      'device-guide',
      'tool-guide',
      'troubleshooting',
      'reference',
      'support'
    ].includes(contentType)
  ) return true
  return /^(?:en\/)?(?:guide|devices|tool)\//.test(page) && !page.endsWith('/faq.md')
}

function jsonLd(ctx: any, route: string, locale: 'zh-Hans' | 'en') {
  const { pageData, title, description, content, page } = ctx
  const url = absolute(route)
  const modified = pageData.lastUpdated
    ? new Date(pageData.lastUpdated).toISOString()
    : pageData.frontmatter.dateModified || undefined
  const pageType = isTechArticle(pageData.frontmatter.contentType || '', page)
    ? 'TechArticle'
    : 'WebPage'
  const pageNode: Record<string, any> = {
    '@type': pageType,
    '@id': `${url}#page`,
    url,
    headline: pageData.title || title,
    description,
    inLanguage: locale,
    mainEntityOfPage: { '@id': url },
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID }
  }
  if (modified) pageNode.dateModified = modified

  const graph: Record<string, any>[] = [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Jego',
      url: 'https://www.jegovpn.com/',
      logo: absolute('/jego.svg')
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: locale === 'en' ? 'Jego Help Center' : 'Jego 帮助中心',
      url: `${SITE_ORIGIN}/`,
      inLanguage: ['zh-Hans', 'en'],
      publisher: { '@id': ORGANIZATION_ID }
    },
    pageNode,
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: route === '/'
        ? [{ '@type': 'ListItem', position: 1, name: 'Jego 帮助中心', item: `${SITE_ORIGIN}/` }]
        : route === '/en/'
          ? [{ '@type': 'ListItem', position: 1, name: 'Jego Help Center', item: absolute('/en/') }]
          : [
              {
                '@type': 'ListItem',
                position: 1,
                name: locale === 'en' ? 'Jego Help Center' : 'Jego 帮助中心',
                item: absolute(locale === 'en' ? '/en/' : '/')
              },
              { '@type': 'ListItem', position: 2, name: pageData.title || title, item: url }
            ]
    }
  ]

  if (page.endsWith('/faq.md')) {
    const mainEntity = faqEntities(content)
    if (mainEntity.length) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        url,
        inLanguage: locale,
        mainEntity
      })
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

export function geoHead(ctx: any): HeadConfig[] {
  if (ctx.pageData.isNotFound || ctx.page === '404.md') return []
  const route = pageRoute(ctx.page)
  const routes = languageRoutes(route)
  const locale = route === '/en/' || route.startsWith('/en/') ? 'en' : 'zh-Hans'
  const modified = ctx.pageData.lastUpdated
    ? new Date(ctx.pageData.lastUpdated).toISOString()
    : ctx.pageData.frontmatter.dateModified || undefined
  const head: HeadConfig[] = [
    ['link', { rel: 'canonical', href: absolute(route) }],
    ['link', { rel: 'alternate', hreflang: 'zh-Hans', href: absolute(routes.zh) }],
    ['link', { rel: 'alternate', hreflang: 'en', href: absolute(routes.en) }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: absolute(routes.zh) }],
    ['meta', { property: 'og:locale', content: locale === 'en' ? 'en' : 'zh_Hans' }],
    ['meta', { property: 'og:url', content: absolute(route) }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd(ctx, route, locale))]
  ]
  if (modified) head.splice(6, 0, ['meta', { property: 'article:modified_time', content: modified }])
  return head
}

export function geoSitemapItems(items: any[]) {
  return items.map((item) => {
    const route = new URL(item.url, SITE_ORIGIN).pathname
    const { zh } = languageRoutes(route)
    const links = (item.links || []).filter((link: any) => link.hreflang !== 'x-default')
    links.push({ hreflang: 'x-default', url: absolute(zh) })
    return { ...item, links }
  })
}
