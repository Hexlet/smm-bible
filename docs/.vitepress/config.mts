import { defineConfig, type DefaultTheme } from 'vitepress'
import { mermaidMarkdown } from '@mokevnin/vitepress-mermaid/markdown'

const guideSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Оглавление руководства', link: '/guide/' },
  {
    text: 'Основы и стратегия',
    link: '/strategy/',
    collapsed: true,
    items: [
      { text: 'Роль SMM и задачи бизнеса', link: '/strategy/role' },
      { text: 'Исследование аудитории', link: '/strategy/audience' },
      { text: 'Рынок и конкуренты', link: '/strategy/competitors' },
      { text: 'Позиционирование и ценность подписки', link: '/strategy/positioning' },
      { text: 'Бренд и коммуникационная стратегия', link: '/strategy/communications' },
      { text: 'Как люди находят и потребляют контент', link: '/strategy/content-consumption' },
      { text: 'Выбор площадок и стратегия', link: '/strategy/channels' },
      { text: 'Бюджет и экономика SMM', link: '/strategy/economics' },
    ],
  },
  {
    text: 'Контент и работа с авторами',
    link: '/content/',
    collapsed: true,
    items: [
      {
        text: 'Редакционная программа и форматы',
        collapsed: true,
        items: [
          { text: 'Темы, рубрики и редакционная политика', link: '/content/editorial-policy' },
          { text: 'Тексты, визуал и видео', link: '/content/formats' },
          { text: 'AI-контент и его восприятие', link: '/content/ai-content' },
          { text: 'Креативные концепции и кампании', link: '/content/creative' },
          { text: 'Частота и ритм публикаций', link: '/content/frequency' },
        ],
      },
      {
        text: 'Авторы, эксперты и выпуск',
        collapsed: true,
        items: [
          { text: 'Поиск и привлечение экспертов', link: '/content/experts' },
          { text: 'Интервью и извлечение знаний', link: '/content/expert-interviews' },
          { text: 'Работа с авторами и экспертами: задания, оплата и документы', link: '/content/authors' },
          { text: 'Контент-план и производство', link: '/content/production' },
          { text: 'Редактура, проверка фактов и согласование', link: '/content/editing' },
          { text: 'Переработка контента в разные форматы', link: '/content/repurposing' },
          { text: 'Кросспостинг: публикация на нескольких площадках', link: '/content/crossposting' },
        ],
      },
      {
        text: 'Личный бренд и экспертное продвижение',
        collapsed: true,
        items: [
          { text: 'Личный бренд основателя и сотрудников', link: '/content/personal-brands' },
          { text: 'Экспертное продвижение: публикации, медиа и выступления', link: '/content/expert-promotion' },
        ],
      },
    ],
  },
  {
    text: 'Подкасты',
    link: '/podcasts/',
    collapsed: true,
    items: [
      { text: 'Концепция и форматы', link: '/podcasts/concept' },
      { text: 'Ведущие, гости и подготовка выпусков', link: '/podcasts/hosts-and-guests' },
      { text: 'Запись, монтаж и видеоверсия', link: '/podcasts/production' },
      { text: 'Размещение и продвижение подкаста', link: '/podcasts/distribution' },
      { text: 'Участие в чужих подкастах', link: '/podcasts/guest-appearances' },
      { text: 'Аналитика и монетизация', link: '/podcasts/analytics-and-monetization' },
    ],
  },
  {
    text: 'Реклама, блогеры и партнёрства',
    link: '/ads/',
    collapsed: true,
    items: [
      { text: 'Платное привлечение аудитории', link: '/ads/audience-growth' },
      { text: 'Планирование рекламы и бюджета', link: '/ads/planning' },
      { text: 'Таргетированная реклама', link: '/ads/targeted-ads' },
      { text: 'Посевы и рекламные интеграции', link: '/ads/placements' },
      { text: 'Выбор блогеров и проверка аудитории', link: '/ads/selection' },
      { text: 'Рекламные материалы и размещение', link: '/ads/brief-and-launch' },
      { text: 'Оценка и повторные размещения', link: '/ads/evaluation' },
      { text: 'Амбассадоры и долгосрочные партнёрства', link: '/ads/ambassadors' },
    ],
  },
  {
    text: 'Сообщества и коммуникация',
    link: '/community/',
    collapsed: true,
    items: [
      { text: 'Развитие сообщества', link: '/community/development' },
      { text: 'Работа с обратной связью', link: '/community/feedback-and-leads' },
      { text: 'Комментарии, сообщения и модерация', link: '/community/moderation' },
      { text: 'Пользовательский контент, отзывы и рекомендации', link: '/community/user-content' },
      { text: 'Клиентский сервис', link: '/community/customer-service' },
      { text: 'Негатив, репутация и кризисы', link: '/community/reputation' },
    ],
  },
  {
    text: 'Воронки и движение аудитории',
    link: '/funnels/',
    collapsed: true,
    items: [
      { text: 'Путь от первого контакта до рекомендации', link: '/funnels/customer-journey' },
      { text: 'SMM в запусках и кампаниях', link: '/funnels/launches' },
      { text: 'Перелив аудитории между площадками', link: '/funnels/audience-transfer' },
      { text: 'Знакомство с новым подписчиком', link: '/funnels/onboarding' },
      { text: 'Запуск новой площадки и перенос аудитории', link: '/funnels/migration' },
      { text: 'Удержание и возвращение аудитории', link: '/funnels/retention' },
      { text: 'Продажи в переписке и передача заявок в CRM', link: '/funnels/sales' },
    ],
  },
  {
    text: 'Ключевые показатели и аналитика',
    link: '/analytics/',
    collapsed: true,
    items: [
      { text: 'Определения и формулы показателей', link: '/analytics/metrics' },
      { text: 'Выбор показателей под задачу', link: '/analytics/goals' },
      { text: 'Сбор данных и разметка ссылок', link: '/analytics/tracking' },
      { text: 'AI для аналитики и исследований', link: '/analytics/ai-research' },
      { text: 'Сквозная аналитика и место SMM', link: '/analytics/end-to-end' },
      { text: 'Отчёты и сравнение площадок', link: '/analytics/reports' },
      { text: 'Атрибуция и ограничения выводов', link: '/analytics/attribution' },
      { text: 'Эксперименты и проверка гипотез', link: '/analytics/experiments' },
      { text: 'Качество аудитории по источникам', link: '/analytics/audience-quality' },
      { text: 'Стоимость результата и окупаемость', link: '/analytics/roi' },
      { text: 'Аудит и пересборка SMM', link: '/analytics/audit' },
    ],
  },
  {
    text: 'Организация работы',
    link: '/organization/',
    collapsed: true,
    items: [
      { text: 'Роли и зоны ответственности', link: '/organization/roles' },
      { text: 'Подрядчики и взаимодействие с отделами', link: '/organization/contractors' },
      { text: 'Производство, согласования и контроль качества', link: '/organization/workflow' },
      { text: 'Календарь, ресурсы и бюджет', link: '/organization/resources' },
      { text: 'Инструменты, автоматизация и ИИ', link: '/organization/tools' },
      { text: 'Отчётность и передача дел', link: '/organization/reporting-and-handover' },
    ],
  },
  {
    text: 'Правовые вопросы и безопасность',
    link: '/safety/',
    collapsed: true,
    items: [
      { text: 'Права на контент и договорённости с авторами', link: '/safety/content-rights' },
      { text: 'Требования к рекламным размещениям', link: '/safety/advertising' },
      { text: 'Персональные данные и контакты аудитории', link: '/safety/personal-data' },
      { text: 'Доступы, защита и восстановление аккаунтов', link: '/safety/accounts' },
    ],
  },
]

const platformsSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Все площадки', link: '/platforms/' },
  {
    text: 'Соцсети и мессенджеры',
    collapsed: false,
    items: [
      {
        text: 'Telegram',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/telegram' },
          { text: 'Публикация и сопровождение', link: '/platforms/telegram/publishing' },
        ],
      },
      {
        text: 'VK',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/vk' },
          { text: 'Публикация и сопровождение', link: '/platforms/vk/publishing' },
        ],
      },
      {
        text: 'VK Видео',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/vk-video' },
          { text: 'Публикация и сопровождение', link: '/platforms/vk-video/publishing' },
        ],
      },
      {
        text: 'VK Клипы',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/vk-clips' },
          { text: 'Публикация и сопровождение', link: '/platforms/vk-clips/publishing' },
        ],
      },
      {
        text: 'YouTube',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/youtube' },
          { text: 'Публикация и сопровождение', link: '/platforms/youtube/publishing' },
        ],
      },
      {
        text: 'Instagram',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/instagram' },
          { text: 'Публикация и сопровождение', link: '/platforms/instagram/publishing' },
        ],
      },
      {
        text: 'TikTok',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/tiktok' },
          { text: 'Публикация и сопровождение', link: '/platforms/tiktok/publishing' },
        ],
      },
      {
        text: 'Threads',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/threads' },
          { text: 'Публикация и сопровождение', link: '/platforms/threads/publishing' },
        ],
      },
      {
        text: 'X / Twitter',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/twitter' },
          { text: 'Публикация и сопровождение', link: '/platforms/twitter/publishing' },
        ],
      },
      {
        text: 'MAX',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/max' },
          { text: 'Публикация и сопровождение', link: '/platforms/max/publishing' },
        ],
      },
      {
        text: 'Одноклассники',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/ok' },
          { text: 'Публикация и сопровождение', link: '/platforms/ok/publishing' },
        ],
      },
      {
        text: 'Дзен',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/dzen' },
          { text: 'Публикация и сопровождение', link: '/platforms/dzen/publishing' },
        ],
      },
      {
        text: 'Rutube',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/rutube' },
          { text: 'Публикация и сопровождение', link: '/platforms/rutube/publishing' },
        ],
      },
      {
        text: 'Pinterest',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/pinterest' },
          { text: 'Публикация и сопровождение', link: '/platforms/pinterest/publishing' },
        ],
      },
      {
        text: 'TenChat',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/tenchat' },
          { text: 'Публикация и сопровождение', link: '/platforms/tenchat/publishing' },
        ],
      },
      {
        text: 'Сетка',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/setka' },
          { text: 'Публикация и сопровождение', link: '/platforms/setka/publishing' },
        ],
      },
      {
        text: 'Facebook',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/facebook' },
          { text: 'Публикация и сопровождение', link: '/platforms/facebook/publishing' },
        ],
      },
      {
        text: 'LinkedIn',
        collapsed: true,
        items: [
          { text: 'Обзор и возможности', link: '/platforms/linkedin' },
          { text: 'Публикация и сопровождение', link: '/platforms/linkedin/publishing' },
        ],
      },
    ],
  },
  {
    text: 'Контентные платформы и медиа',
    link: '/platforms/media/',
    collapsed: false,
    items: [
      { text: 'Хабр', link: '/platforms/media/habr' },
      { text: 'vc.ru', link: '/platforms/media/vc' },
      { text: 'Пикабу', link: '/platforms/media/pikabu' },
      { text: 'DTF', link: '/platforms/media/dtf' },
      { text: 'Spark', link: '/platforms/media/spark' },
      { text: 'Cossa', link: '/platforms/media/cossa' },
      { text: 'Sostav', link: '/platforms/media/sostav' },
      { text: 'Executive.ru', link: '/platforms/media/executive' },
      { text: 'Клерк', link: '/platforms/media/klerk' },
      { text: 'RB.RU', link: '/platforms/media/rb' },
      { text: 'Поиск отраслевых площадок', link: '/platforms/media/industry' },
    ],
  },
]

const mechanicsSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Каталог механик', link: '/mechanics/' },
  {
    text: 'Ссылки и навигация',
    link: '/mechanics/links/',
    collapsed: true,
    items: [
      { text: 'Ссылки в профиле и публикациях', link: '/mechanics/links/profile' },
      { text: 'Ссылка в комментарии', link: '/mechanics/links/comments' },
      { text: 'Подводка к ссылке и призыв к действию', link: '/mechanics/links/calls-to-action' },
      { text: 'Закрепы, стартовые материалы и меню', link: '/mechanics/links/pinned-posts' },
      { text: 'Материал или страница после перехода', link: '/mechanics/links/landing' },
    ],
  },
  {
    text: 'Публикации и регулярные касания',
    link: '/mechanics/publications/',
    collapsed: true,
    items: [
      { text: 'Сторис', link: '/mechanics/publications/stories' },
      { text: 'Треды и цепочки публикаций', link: '/mechanics/publications/threads' },
      { text: 'Серии материалов и рубрики', link: '/mechanics/publications/series' },
      { text: 'Анонсы, напоминания и повторные публикации', link: '/mechanics/publications/reminders' },
      { text: 'Закреплённые посты и комментарии', link: '/mechanics/publications/pinned' },
      { text: 'Комментарии под чужими публикациями', link: '/mechanics/publications/comments' },
    ],
  },
  {
    text: 'Обмен аудиториями и сотрудничество',
    link: '/mechanics/partnerships/',
    collapsed: true,
    items: [
      { text: 'Обмен постами и взаимопиар', link: '/mechanics/partnerships/post-exchange' },
      { text: 'Рекомендации и подборки каналов', link: '/mechanics/partnerships/recommendations' },
      { text: 'Гостевые посты и совместные серии', link: '/mechanics/partnerships/guest-posts' },
      { text: 'Совместные эфиры и разборы', link: '/mechanics/partnerships/live-events' },
      { text: 'Распространение через тематические чаты', link: '/mechanics/partnerships/chats' },
      { text: 'Реферальные механики', link: '/mechanics/partnerships/referrals' },
    ],
  },
  {
    text: 'Участие аудитории',
    link: '/mechanics/participation/',
    collapsed: true,
    items: [
      { text: 'Опросы, вопросы и обсуждения', link: '/mechanics/participation/polls' },
      { text: 'Разборы работ подписчиков', link: '/mechanics/participation/reviews' },
      { text: 'Челленджи и конкурсы', link: '/mechanics/participation/challenges' },
      { text: 'Совместное создание контента', link: '/mechanics/participation/co-creation' },
    ],
  },
  {
    text: 'Внешние точки входа и целевые действия',
    link: '/mechanics/external/',
    collapsed: true,
    items: [
      { text: 'Выступления на конференциях', link: '/mechanics/external/conferences' },
      { text: 'Вебинары, гостевые эфиры и интервью', link: '/mechanics/external/webinars' },
      { text: 'QR-коды и ссылки в сопроводительных материалах', link: '/mechanics/external/qr-and-signatures' },
      { text: 'Полезные материалы за подписку или контакт', link: '/mechanics/external/lead-magnets' },
      { text: 'Регистрация, обращение, заявка и покупка', link: '/mechanics/external/conversion' },
    ],
  },
]

const resourcesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Шаблоны',
    link: '/templates/',
    collapsed: true,
    items: [
      { text: 'Контент-план', link: '/templates/content-plan' },
      { text: 'Бриф для автора или подрядчика', link: '/templates/brief' },
      { text: 'Отчёт по SMM', link: '/templates/report' },
    ],
  },
  { text: 'Глоссарий', link: '/glossary' },
]

const base = '/smm-bible/'
// Полный адрес сайта: из него собираются sitemap, canonical и ссылки для превью в соцсетях.
const siteUrl = `https://mokevnin.github.io${base}`
const siteTitle = 'SMM Bible'
const siteDescription = 'Практическое руководство по SMM'

export default defineConfig({
  lang: 'ru-RU',
  title: siteTitle,
  description: siteDescription,
  base,
  cleanUrls: true,
  // Рабочие подборки источников для авторов, а не страницы для читателей. Ссылки в них проверяет rumdl.
  srcExclude: ['research/**'],
  lastUpdated: true,

  // robots.txt не добавляем: на github.io поисковики читают его только из корня домена, а не из /smm-bible/.
  sitemap: { hostname: siteUrl },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { property: 'og:locale', content: 'ru_RU' }],
    ['meta', { property: 'og:image', content: `${siteUrl}images/og-cover.jpg` }],
    ['meta', { property: 'og:image:width', content: '960' }],
    ['meta', { property: 'og:image:height', content: '960' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  // Теги, которые зависят от страницы, по рецепту из документации VitePress (transformPageData).
  transformPageData(pageData) {
    const url = siteUrl + pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const title = pageData.title || siteTitle
    const description = pageData.description || siteDescription
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
    )
  },

  markdown: {
    // Блоки ```mermaid превращаются в компонент темы, который рисует диаграмму в браузере.
    config(md) {
      md.use(mermaidMarkdown)
    },
  },

  themeConfig: {
    nav: [
      {
        text: 'Руководство',
        link: '/guide/',
        activeMatch: '^/(guide|strategy|content|podcasts|ads|community|funnels|analytics|organization|safety)/',
      },
      { text: 'Площадки', link: '/platforms/', activeMatch: '^/platforms/' },
      { text: 'Механики', link: '/mechanics/', activeMatch: '^/mechanics/' },
      {
        text: 'Справочник',
        activeMatch: '^/(templates/|glossary)',
        items: [
          { text: 'Шаблоны', link: '/templates/' },
          { text: 'Глоссарий', link: '/glossary' },
        ],
      },
    ],

    sidebar: {
      '/platforms/': platformsSidebar,
      '/mechanics/': mechanicsSidebar,
      '/templates/': resourcesSidebar,
      '/glossary': resourcesSidebar,
      '/': guideSidebar,
    },

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
