import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import YouTube from './components/YouTube.vue'
import GeoPageMeta from './components/GeoPageMeta.vue'
import ToolCatalog from './components/ToolCatalog.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(GeoPageMeta)
    })
  },
  enhanceApp({ app }) {
    app.component('YouTube', YouTube)
    app.component('ToolCatalog', ToolCatalog)
  }
}
