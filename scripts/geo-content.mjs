import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'

export const BASELINE_COMMIT = '44b9e65738ebc5c87c88f2d7fbf8846efd31f8ea'
export const TOOL_SLUGS = [
  'clash-for-android',
  'clash-for-windows',
  'clashbox',
  'clashverge',
  'flclash',
  'guiforsing-box',
  'loon',
  'mihomo',
  'oneclick',
  'quantumult-x',
  'shadowrocket',
  'sing-box',
  'sing-boxforandroid',
  'sing-boxforapple',
  'surfboard',
  'surge',
  'v2rayn',
  'v2rayng'
]

export const APPROVED_MEDIA_RETIREMENTS = {
  'docs/devices/pc-mobile.md': [
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png'
  ],
  'docs/en/devices/pc-mobile.md': [
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FISwY5XX4FX2qker0nOYC_2Fimage_3.png'
  ],
  'docs/guide/installation.md': [
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FfcXOYhXbZ9Tr2bWUoI5p_2Fimage_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8gEriEnVmF77fYUY2XxI_2Fimage_1.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FqJVM1Fphg1LsgyqucvDn_2F20250326-115951_2.gif'
  ],
  'docs/en/guide/installation.md': [
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FfcXOYhXbZ9Tr2bWUoI5p_2Fimage_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8gEriEnVmF77fYUY2XxI_2Fimage_1.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FqJVM1Fphg1LsgyqucvDn_2F20250326-115951_2.gif'
  ],
  'docs/en/guide/faq.md': [
    '/images/image_2f77cc85238452e25cb517130188bf99_2.png',
    '/images/image_8cfb53953fdf6e7e49ac94510557df95_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F0WsYu8S2aed4NEWVLscQ_2Fimage_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F2urY4db1qFvocDlTtgNj_2Fimage_1.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4X4pVnYK2KWM6XiyHkP6_2Fimage_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F9NPKEgiCoLEpqb6WCQMb_2Fimage_2.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FF6dZ9YLI7YU5b3kOalpA_2Fimage_1.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FHV0QVHMxq4rRJPSEghvH_2Fimage_1.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FNzcdN0zHPrnfQfxvzine_2Fimage_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FPrqRnEhRBtThiFNriRYY_2Fimage_2.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQFg8JMkptC2tNNiLnUk0_2Fimage_1.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FR5N7binyonxvysAkUl5m_2Fimage_1.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FlTK7Ld57wxLmFhBvHDz3_2Fimage_2.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FmSgH7un2lH6oQ2I02okf_2Fimage_2.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FzQJALXbqHJDo0am5sbx0_2Fimage_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FzX0shn8SkzNDitbuWyLk_2Fimage_2.png',
    '/videos/video_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5kaw1En36b4S8wPLm3ok_2F20230927-110903_2.mp4',
    '/videos/video_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FHdfcY8pUhEOe7afX3nGk_2F20230528-141341_1.mp4'
  ],
  'docs/guide/chatgpt-access.md': [
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8xAkeKaPFvJCAt1MuBYf_2Fimage_2.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fz7RH5pwBUDwrBQdsdvah_2Fimage_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8oyNaJcc0tFJdbungX6t_2Fimage_1.png'
  ],
  'docs/en/guide/chatgpt-access.md': [
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8xAkeKaPFvJCAt1MuBYf_2Fimage_2.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fz7RH5pwBUDwrBQdsdvah_2Fimage_3.png',
    '/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8oyNaJcc0tFJdbungX6t_2Fimage_1.png'
  ]
}

export const APPROVED_CONTENT_RESTRUCTURES = [
  'docs/devices/pc-mobile.md',
  'docs/en/devices/pc-mobile.md',
  'docs/guide/faq.md',
  'docs/en/guide/faq.md',
  'docs/guide/chatgpt-access.md',
  'docs/en/guide/chatgpt-access.md',
  'docs/guide/services.md',
  'docs/en/guide/services.md',
  'docs/en/guide/nodes.md',
  'docs/en/devices/pc-mobile.md',
  'docs/index.md',
  'docs/en/index.md',
  'docs/guide/encrypted-dns.md',
  'docs/en/guide/encrypted-dns.md'
]

export function toPosix(filePath) {
  return filePath.split(path.sep).join('/')
}

export function walkFiles(directory) {
  if (!statSync(directory, { throwIfNoEntry: false })?.isDirectory()) return []
  return readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name)
      return entry.isDirectory() ? walkFiles(entryPath) : [entryPath]
    })
    .sort()
}

export function routeFromSource(source) {
  const relative = toPosix(source).replace(/^docs\//, '').replace(/\.md$/, '')
  if (relative === 'index') return '/'
  if (relative === 'en/index') return '/en/'
  if (relative.endsWith('/index')) return `/${relative.slice(0, -'/index'.length)}/`
  return `/${relative}`
}

export function localeFromSource(source) {
  return toPosix(source).startsWith('docs/en/') ? 'en' : 'zh-Hans'
}

export function pairKeyFromSource(source) {
  return toPosix(source).replace(/^docs\/en\//, 'docs/').replace(/\.md$/, '')
}

export function splitFrontmatter(raw) {
  if (!raw.startsWith('---\n')) return { frontmatterRaw: '', body: raw }
  const end = raw.indexOf('\n---', 4)
  if (end === -1) return { frontmatterRaw: '', body: raw }
  return {
    frontmatterRaw: raw.slice(4, end),
    body: raw.slice(end + 4).replace(/^\r?\n/, '')
  }
}

function scalar(value) {
  const trimmed = value.trim()
  if (trimmed === 'null' || trimmed === '~') return null
  if (trimmed === 'true') return true
  if (trimmed === 'false') return false
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed)
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const body = trimmed.slice(1, -1).trim()
    if (!body) return []
    return body.split(',').map((part) => scalar(part))
  }
  return trimmed.replace(/^(['"])(.*)\1$/, '$2')
}

export function parseFrontmatter(raw) {
  const { frontmatterRaw } = splitFrontmatter(raw)
  const result = {}
  for (const line of frontmatterRaw.split(/\r?\n/)) {
    if (!line || /^\s/.test(line) || line.trimStart().startsWith('#')) continue
    const match = line.match(/^([A-Za-z][\w-]*):(?:\s*(.*))?$/)
    if (match) result[match[1]] = scalar(match[2] ?? '')
  }
  return result
}

function stripInlineMarkup(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function extractHeadings(raw) {
  const { body } = splitFrontmatter(raw)
  const headings = []
  for (const line of body.split(/\r?\n/)) {
    const match = line.match(/^(#{1,6})\s+(.+?)\s*$/)
    if (match) headings.push({ level: match[1].length, text: stripInlineMarkup(match[2]) })
  }
  return headings
}

export function extractLocalMedia(raw) {
  const found = new Set()
  const add = (target) => {
    const value = target.trim().replace(/^<|>$/g, '').split(/[?#]/)[0]
    if (value.startsWith('/') && !value.startsWith('//')) found.add(value)
  }

  for (const match of raw.matchAll(/<(?:img|video|source)\b[^>]*?\b(?:src|poster)\s*=\s*["']([^"']+)["']/gi)) {
    add(match[1])
  }

  let cursor = 0
  while ((cursor = raw.indexOf('![', cursor)) !== -1) {
    const targetStart = raw.indexOf('](', cursor + 2)
    if (targetStart === -1) break
    let index = targetStart + 2
    while (/\s/.test(raw[index] || '')) index += 1
    if (raw[index] === '<') {
      const end = raw.indexOf('>', index + 1)
      if (end === -1) break
      add(raw.slice(index + 1, end))
      cursor = end + 1
      continue
    }
    const valueStart = index
    let depth = 0
    for (; index < raw.length; index += 1) {
      const character = raw[index]
      if (character === '(') depth += 1
      else if (character === ')' && depth > 0) depth -= 1
      else if ((character === ')' || /\s/.test(character)) && depth === 0) break
    }
    add(raw.slice(valueStart, index))
    cursor = index + 1
  }
  return [...found].sort()
}

export function hashText(raw) {
  return createHash('sha256').update(raw).digest('hex')
}

export function pageRecord(source, raw) {
  const frontmatter = parseFrontmatter(raw)
  const headings = extractHeadings(raw)
  const { body } = splitFrontmatter(raw)
  return {
    source: toPosix(source),
    route: routeFromSource(source),
    locale: localeFromSource(source),
    pairKey: pairKeyFromSource(source),
    title: String(frontmatter.title || headings.find((heading) => heading.level === 1)?.text || ''),
    h1: headings.find((heading) => heading.level === 1)?.text || null,
    contentLength: body.replace(/\s/g, '').length,
    headings: headings.filter((heading) => heading.level <= 3),
    media: extractLocalMedia(raw),
    sha256: hashText(raw)
  }
}

export function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'))
}
