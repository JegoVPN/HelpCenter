<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { formatPlatforms, pageDisplayTitle } from '../../presentation'

const { frontmatter, page, lang } = useData()
const isEnglish = computed(() => lang.value === 'en')
const home = computed(() => isEnglish.value ? '/en/' : '/')
const displayTitle = computed(() => pageDisplayTitle(page.value.relativePath, page.value.title))
const platformText = computed(() => formatPlatforms(frontmatter.value.platforms))
const isToolPage = computed(() => Boolean(frontmatter.value.tool))
</script>

<template>
  <div class="geo-page-context">
    <nav class="geo-breadcrumb" :aria-label="isEnglish ? 'Breadcrumb' : '面包屑'">
      <a :href="home">{{ isEnglish ? 'Help Center' : '帮助中心' }}</a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ displayTitle }}</span>
    </nav>
    <dl v-if="!isToolPage && frontmatter.platforms?.length" class="geo-page-meta">
      <div>
        <dt>{{ isEnglish ? 'Applies to' : '适用平台' }}</dt>
        <dd>{{ platformText }}</dd>
      </div>
    </dl>
  </div>
</template>
