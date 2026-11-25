// Тема без встроенного Inter: системные шрифты не подгружаются и не перерисовывают текст при загрузке.
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'
import { enhanceAppWithMermaid } from '@mokevnin/vitepress-mermaid/client'
import '@mokevnin/vitepress-mermaid/style.css'
import CommunityCta from './CommunityCta.vue'
import DocCta from './DocCta.vue'
import HexletCourses from './HexletCourses.vue'
import SiteFooter from './SiteFooter.vue'
import { setupMetrika } from './metrika.js'
import './style.css'

export default {
  extends: DefaultTheme,
  // Слоты home-* срабатывают только на главной (layout: home), doc-after — на страницах глав.
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(CommunityCta),
      'home-features-after': () => h(HexletCourses),
      'doc-after': () => h(DocCta),
      'layout-bottom': () => h(SiteFooter),
    }),
  enhanceApp({ app, router }) {
    enhanceAppWithMermaid(app)
    setupMetrika(router)
  },
} satisfies Theme
