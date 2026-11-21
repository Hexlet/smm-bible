// Тема без встроенного Inter: системные шрифты не подгружаются и не перерисовывают текст при загрузке.
import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'
import { enhanceAppWithMermaid } from '@mokevnin/vitepress-mermaid/client'
import '@mokevnin/vitepress-mermaid/style.css'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithMermaid(app)
  },
} satisfies Theme
