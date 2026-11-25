// Курсы Хекслета, которые предлагаем на сайте: на главной все, на страницах глав — один по теме раздела.
export type CourseId = 'ai-for-beginners' | 'ai-automation' | 'vibecoding-claudecode'

export interface Course {
  id: CourseId
  title: string
  meta: string
  details: string
}

export const courses: Course[] = [
  {
    id: 'ai-for-beginners',
    title: 'ИИ и нейросети для начинающих',
    meta: 'Бесплатно · 12 уроков, около 4 часов',
    details:
      'Как выбрать модель, писать промпты, делать тексты и изображения, собирать сайт и презентацию проекта и проверять результат. Практика в браузере, программировать не нужно.',
  },
  {
    id: 'ai-automation',
    title: 'AI-автоматизация',
    meta: '3–4 месяца · JavaScript, API, n8n, LLM',
    details:
      'Сценарии в n8n для заявок, маркетинга и аналитики и AI-агенты, которые снимают рутину. Начинается с основ программирования, опыт не нужен.',
  },
  {
    id: 'vibecoding-claudecode',
    title: 'Вайб-кодинг на Claude Code',
    meta: '1 месяц · без опыта в программировании',
    details:
      'Лендинги с обработкой лидов, боты, автоматизация отчётов и мониторинга с помощью Claude Code. Скиллы, хуки и запуск задач по расписанию.',
  },
]

// campaign отличает переходы с главной от переходов со страниц глав, content — раздел, с которого пришли.
export function courseUrl(id: CourseId, campaign: string, content?: string): string {
  const params = new URLSearchParams({ utm_source: 'smm-bible', utm_medium: 'referral', utm_campaign: campaign })
  if (content) params.set('utm_content', content)
  return `https://ru.hexlet.io/programs/${id}?${params}`
}

// Раздел сайта → курс, который продолжает его тему. Разделы, которых нет в списке, получают курс для начинающих.
const courseBySection: Record<string, CourseId> = {
  analytics: 'ai-automation',
  funnels: 'ai-automation',
  organization: 'ai-automation',
  templates: 'vibecoding-claudecode',
}

export function courseForSection(section: string): Course {
  const id = courseBySection[section] ?? 'ai-for-beginners'
  return courses.find((course) => course.id === id)!
}

export const communityUrl = 'https://t.me/hexletai'
