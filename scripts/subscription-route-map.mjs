export const DEVICE_SLUGS = [
  'android',
  'harmony',
  'ios',
  'linux',
  'mac',
  'tvos',
  'us-apple-id',
  'windows'
]

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

function localePairs(prefix = '') {
  return [
    [`/${prefix}devices/pc-mobile`, `/${prefix}subscription/`],
    ...DEVICE_SLUGS.map((slug) => [
      `/${prefix}devices/${slug}`,
      `/${prefix}subscription/devices/${slug}`
    ]),
    ...TOOL_SLUGS.map((slug) => [
      `/${prefix}tool/${slug}`,
      `/${prefix}subscription/clients/${slug}`
    ])
  ]
}

export const LEGACY_ROUTE_PAIRS = [...localePairs(), ...localePairs('en/')]
export const LEGACY_ROUTE_MAP = Object.fromEntries(LEGACY_ROUTE_PAIRS)

export function canonicalizeRoute(route) {
  return LEGACY_ROUTE_MAP[route] || route
}

function sourcePath(route) {
  if (route.endsWith('/')) return `${route.slice(1)}index.md`
  return `${route.slice(1)}.md`
}

export const VITEPRESS_REWRITES = Object.fromEntries(
  LEGACY_ROUTE_PAIRS.map(([legacy, canonical]) => [sourcePath(legacy), sourcePath(canonical)])
)
