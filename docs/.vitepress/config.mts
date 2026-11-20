import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: 'SMM Bible',
  description: 'Практическое руководство по SMM',
  base: '/smm-bible/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Шаблоны', link: '/templates/' },
      { text: 'Глоссарий', link: '/glossary' },
    ],

    sidebar: [
      {
        text: 'Стратегия',
        items: [
          { text: 'Обзор', link: '/strategy/' },
        ],
      },
      {
        text: 'Контент',
        items: [
          { text: 'Обзор', link: '/content/' },
        ],
      },
      {
        text: 'Площадки',
        items: [
          { text: 'Обзор', link: '/platforms/' },
        ],
      },
      {
        text: 'Реклама и посевы',
        items: [
          { text: 'Обзор', link: '/ads/' },
        ],
      },
      {
        text: 'Аналитика',
        items: [
          { text: 'Обзор', link: '/analytics/' },
        ],
      },
      {
        text: 'Шаблоны',
        items: [
          { text: 'Обзор', link: '/templates/' },
        ],
      },
      { text: 'Глоссарий', link: '/glossary' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mokevnin/smm-bible' },
    ],

    editLink: {
      pattern: 'https://github.com/mokevnin/smm-bible/edit/main/docs/:path',
      text: 'Предложить правку',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
          modal: {
            noResultsText: 'Ничего не найдено',
            resetButtonTitle: 'Сбросить',
            footer: { selectText: 'выбрать', navigateText: 'перейти', closeText: 'закрыть' },
          },
        },
      },
    },

    outline: { level: [2, 3], label: 'На этой странице' },
    docFooter: { prev: 'Назад', next: 'Дальше' },
    lastUpdated: { text: 'Обновлено' },
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    notFound: {
      title: 'Страница не найдена',
      quote: 'Возможно, её переместили или ещё не написали.',
      linkText: 'На главную',
    },
  },
})
