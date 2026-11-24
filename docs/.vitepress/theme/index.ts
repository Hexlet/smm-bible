// Тема без встроенного Inter: системные шрифты не подгружаются и не перерисовывают текст при загрузке.
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'
import { enhanceAppWithMermaid } from '@mokevnin/vitepress-mermaid/client'
import '@mokevnin/vitepress-mermaid/style.css'
import HexletCourses from './HexletCourses.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  // Слот срабатывает только на странице с layout: home, то есть на главной.
  Layout: () => h(DefaultTheme.Layout, null, { 'home-features-after': () => h(HexletCourses) }),
  enhanceApp({ app }) {
    enhanceAppWithMermaid(app)
  },
} satisfies Theme
