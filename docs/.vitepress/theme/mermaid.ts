import { defineComponent, h, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

let counter = 0

// Диаграмма рисуется в браузере: mermaid нужен DOM, поэтому на сервере остаётся пустой контейнер.
export const Mermaid = defineComponent({
  name: 'Mermaid',
  props: {
    code: { type: String, required: true },
  },
  setup(props) {
    const { isDark } = useData()
    const container = ref<HTMLElement | null>(null)

    const render = async () => {
      const el = container.value
      if (!el) return
      const source = decodeURIComponent(props.code)
      const { default: mermaid } = await import('mermaid')
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: isDark.value ? 'dark' : 'default',
        // Шрифт задаётся явно: mermaid измеряет подписи этим шрифтом, иначе текст обрезается.
        fontFamily: getComputedStyle(document.body).fontFamily,
      })
      try {
        const { svg } = await mermaid.render(`mermaid-${++counter}`, source)
        el.innerHTML = svg
        el.removeAttribute('data-mermaid-error')
      } catch (error) {
        console.error('Mermaid: не удалось построить диаграмму', error)
        el.setAttribute('data-mermaid-error', String(error))
        el.textContent = source
      }
    }

    onMounted(render)
    watch(isDark, render)

    return () => h('div', { class: 'mermaid-diagram', ref: container })
  },
})
