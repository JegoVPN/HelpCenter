<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import catalog from '../../data/tool-catalog.json'
import { formatPlatforms, pageDisplayTitle } from '../../presentation'

const { frontmatter, page, lang } = useData()
const isEnglish = computed(() => lang.value === 'en')
const home = computed(() => isEnglish.value ? '/en/' : '/')
const displayTitle = computed(() => pageDisplayTitle(page.value.relativePath, page.value.title))
const platformText = computed(() => formatPlatforms(frontmatter.value.platforms))
const tool = computed(() => catalog.tools.find((entry) => entry.slug === frontmatter.value.tool))
const lifecycleLabel = computed(() => {
  const value = tool.value?.lifecycle
  if (!value) return isEnglish.value ? 'Status not confirmed' : '状态暂未确认'
  const labels: Record<string, [string, string]> = {
    current: ['仍在更新', 'Still maintained'],
    experimental: ['实验性工具', 'Experimental'],
    'not-recommended': ['仅供老用户', 'Existing users only'],
    discontinued: ['已停止维护', 'No longer maintained']
  }
  return labels[value]?.[isEnglish.value ? 1 : 0] || value
})
const jegoSupport = computed(() => tool.value ? catalog.jegoSupport[tool.value.slug as keyof typeof catalog.jegoSupport] : null)
const supportLabel = computed(() => {
  if (jegoSupport.value === 'supported') return isEnglish.value ? 'Yes' : '可以'
  if (jegoSupport.value === 'experimental') return isEnglish.value ? 'Check the guide first' : '请先查看教程说明'
  if (jegoSupport.value === 'unsupported') return isEnglish.value ? 'No longer supported' : 'Jego 已不支持'
  return isEnglish.value ? 'Not confirmed' : '暂未确认'
})
const replacements = computed(() => (tool.value?.replacements || [])
  .map((slug) => catalog.tools.find((entry) => entry.slug === slug))
  .filter(Boolean))
</script>

<template>
  <div class="geo-page-context">
    <nav class="geo-breadcrumb" :aria-label="isEnglish ? 'Breadcrumb' : '面包屑'">
      <a :href="home">{{ isEnglish ? 'Help Center' : '帮助中心' }}</a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ displayTitle }}</span>
    </nav>
    <dl v-if="tool || frontmatter.platforms?.length" class="geo-page-meta">
      <div v-if="tool">
        <dt>{{ isEnglish ? 'Client status' : '客户端状态' }}</dt>
        <dd>{{ lifecycleLabel }}</dd>
      </div>
      <div v-if="tool">
        <dt>{{ isEnglish ? 'Jego support' : 'Jego 支持' }}</dt>
        <dd>{{ supportLabel }}</dd>
      </div>
      <div v-if="frontmatter.platforms?.length">
        <dt>{{ isEnglish ? 'Applies to' : '适用平台' }}</dt>
        <dd>{{ platformText }}</dd>
      </div>
    </dl>
    <div v-if="jegoSupport === 'unsupported'" class="geo-support-warning" role="note">
      <strong>{{ isEnglish ? 'Jego no longer supports this client.' : 'Jego 已不再支持这个客户端。' }}</strong>
      {{ isEnglish
        ? 'If you still use it, you can read the original steps below and move to a supported alternative.'
        : '如果你还在使用，可以继续查看下面的旧教程，并迁移到当前支持的工具。' }}
      <span v-if="replacements.length">
        {{ isEnglish ? ' Try instead: ' : '可以改用：' }}
        <template v-for="(entry, index) in replacements" :key="entry!.slug">
          <span v-if="index"> · </span>
          <a :href="`${isEnglish ? '/en' : ''}/subscription/clients/${entry!.slug}`">{{ entry!.name[isEnglish ? 'en' : 'zh'] }}</a>
        </template>
      </span>
    </div>
    <p v-if="tool" class="geo-tool-context-links">
      <a :href="isEnglish ? '/en/subscription/' : '/subscription/'">
        {{ isEnglish ? 'Subscription service' : '订阅服务' }}
      </a>
      <span aria-hidden="true">·</span>
      <a :href="`${isEnglish ? '/en' : ''}/guide/support`">
        {{ isEnglish ? 'Contact support' : '联系支持' }}
      </a>
    </p>
  </div>
</template>
