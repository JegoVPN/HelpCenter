import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { walkFiles } from './geo-content.mjs'

// This migration is deliberately narrow. It fixes only unsafe troubleshooting or
// third-party-rule-evasion advice. Product positioning, human tone, confirmed plan
// rules, and interface copy must never be neutralized by a bulk rewrite.
const replacements = [
  [
    '关闭电脑的防火墙后再试。',
    '先确认具体是哪一项安全软件提示被拦截；只对可信的无忧行程序做最小范围放行，测试后恢复原设置。'
  ],
  [
    'Turn off the computer firewall and try again.',
    'Identify the exact security alert first. Allow only the trusted Jego program when needed, then restore the original setting after testing.'
  ],
  [
    '例如：有部分人因为特殊需求对IP地址有需求（例如土耳其的Youtube Premium价格便宜），可以进行手动选择某个地区的IP进行访问。',
    '例如：排查某个服务的连接问题时，可以临时选择不同地区的节点做连通性对比。'
  ],
  [
    "For example: Some people have special requirements for IP addresses (for example, Turkey's Youtube Premium is cheap), so they can manually select IP from a specific region for access.",
    'For example, temporarily choose a node in another region when comparing a connection problem.'
  ]
]

const root = process.cwd()
let changed = 0
for (const file of walkFiles(path.join(root, 'docs')).filter((entry) => entry.endsWith('.md'))) {
  const raw = readFileSync(file, 'utf8')
  let next = raw
  for (const [before, after] of replacements) next = next.replaceAll(before, after)
  if (next !== raw) {
    writeFileSync(file, next)
    changed += 1
  }
}

console.log(`Applied narrow safety rewrites to ${changed} file(s).`)
