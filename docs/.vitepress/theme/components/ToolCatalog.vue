<script setup lang="ts">
import { computed } from 'vue'
import catalog from '../../data/tool-catalog.json'

const props = defineProps<{ locale: 'zh' | 'en', platform?: string }>()
const tools = computed(() => props.platform
  ? catalog.tools.filter((tool) => tool.platforms.includes(props.platform as never))
  : catalog.tools)

function label(value: string | null, kind: 'lifecycle' | 'recommendation') {
  if (!value) return props.locale === 'en' ? 'Not confirmed' : '暂未确认'
  const labels: Record<string, [string, string]> = {
    current: ['仍在更新', 'Still maintained'],
    experimental: ['实验性', 'Experimental'],
    'not-recommended': ['仅供老用户', 'Existing users only'],
    discontinued: ['已停止维护', 'No longer maintained'],
    recommended: ['适合大多数用户', 'Good for most users'],
    advanced: ['适合有经验的用户', 'For experienced users']
  }
  return labels[value]?.[props.locale === 'en' ? 1 : 0] || value
}

function supportLabel(slug: string) {
  const value = catalog.jegoSupport[slug as keyof typeof catalog.jegoSupport]
  if (value === 'supported') return props.locale === 'en' ? 'Yes' : '可以'
  if (value === 'experimental') return props.locale === 'en' ? 'Check the guide' : '先看教程'
  return props.locale === 'en' ? 'No longer supported' : 'Jego 已不支持'
}
</script>

<template>
  <div class="geo-table-wrap">
    <table class="geo-tool-table">
      <thead>
        <tr>
          <th>{{ locale === 'en' ? 'Tool' : '工具' }}</th>
          <th>{{ locale === 'en' ? 'Platforms' : '平台' }}</th>
          <th>{{ locale === 'en' ? 'Maintenance' : '维护状态' }}</th>
          <th>{{ locale === 'en' ? 'Best for' : '适用用户' }}</th>
          <th>{{ locale === 'en' ? 'Jego support' : 'Jego 支持' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tool in tools" :key="tool.slug">
          <td>
            <a :href="`${locale === 'en' ? '/en' : ''}/tool/${tool.slug}`">
              {{ tool.name[locale] }}
            </a>
          </td>
          <td>{{ tool.platforms.join(' · ') || (locale === 'en' ? 'Not confirmed' : '暂未确认') }}</td>
          <td>{{ label(tool.lifecycle, 'lifecycle') }}</td>
          <td>{{ label(tool.recommendation, 'recommendation') }}</td>
          <td>{{ supportLabel(tool.slug) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
