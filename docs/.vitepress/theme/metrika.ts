// Яндекс Метрика для SPA по инструкции https://yandex.ru/support/metrica/ru/code/counter-spa-setup:
// defer: true отключает автоматический просмотр, а hit отправляется после каждой смены страницы.
// VitePress вызывает onAfterRouteChange и при первой загрузке, и при переходах без перезагрузки.
import type { Router } from 'vitepress'

const counterId = 114655714

type Ym = ((...args: unknown[]) => void) & { a?: unknown[][]; l?: number }

declare global {
  interface Window {
    ym?: Ym
  }
}

function loadCounter(): Ym {
  const ym: Ym = (...args) => {
    ;(ym.a ??= []).push(args)
  }
  ym.l = Date.now()
  window.ym = ym

  const script = document.createElement('script')
  script.async = true
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${counterId}`
  document.head.append(script)

  ym(counterId, 'init', {
    defer: true,
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    accurateTrackBounce: true,
    trackLinks: true,
  })
  return ym
}

export function setupMetrika(router: Router) {
  // Локальный dev-сервер не должен попадать в статистику.
  if (!import.meta.env.PROD || typeof window === 'undefined') return

  const ym = loadCounter()
  let referer = document.referrer
  router.onAfterRouteChange = (href) => {
    const url = new URL(href, location.origin).href
    ym(counterId, 'hit', url, { referer })
    referer = url
  }
}
