<script setup lang="ts">
// Блок под карточками разделов на главной: курсы Хекслета по ИИ для маркетологов.
const utm = 'utm_source=smm-bible&utm_medium=referral&utm_campaign=home'

const courses = [
  {
    title: 'AI-автоматизация',
    meta: '3–4 месяца · JavaScript, API, n8n, LLM',
    details:
      'Сценарии в n8n для заявок, маркетинга и аналитики и AI-агенты, которые снимают рутину. Начинается с основ программирования, опыт не нужен.',
    href: `https://ru.hexlet.io/programs/ai-automation?${utm}`,
  },
  {
    title: 'Вайб-кодинг на Claude Code',
    meta: '1 месяц · без опыта в программировании',
    details:
      'Лендинги с обработкой лидов, боты, автоматизация отчётов и мониторинга с помощью Claude Code. Скиллы, хуки и запуск задач по расписанию.',
    href: `https://ru.hexlet.io/programs/vibecoding-claudecode?${utm}`,
  },
]
</script>

<template>
  <section class="hexlet-courses">
    <div class="container">
      <h2 class="heading">Курсы Хекслета по ИИ для маркетологов</h2>
      <p class="lead">Как автоматизировать рутину SMM и собирать свои инструменты без команды разработки.</p>
      <div class="grid">
        <a
          v-for="course in courses"
          :key="course.href"
          class="card"
          :href="course.href"
          target="_blank"
          rel="noopener"
        >
          <span class="title">{{ course.title }}</span>
          <span class="meta">{{ course.meta }}</span>
          <span class="details">{{ course.details }}</span>
          <span class="link">Программа курса →</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hexlet-courses {
  padding: 48px 24px 0;
}

@media (min-width: 640px) {
  .hexlet-courses {
    padding: 64px 48px 0;
  }
}

@media (min-width: 960px) {
  .hexlet-courses {
    padding: 64px 64px 0;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.heading {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--vp-c-text-1);
}

.lead {
  margin: 8px 0 0;
  font-size: 16px;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

.grid {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.25s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
}

.title {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--vp-c-text-1);
}

.meta {
  font-size: 13px;
  line-height: 20px;
  color: var(--vp-c-text-3);
}

.details {
  flex-grow: 1;
  font-size: 14px;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

.link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}
</style>
