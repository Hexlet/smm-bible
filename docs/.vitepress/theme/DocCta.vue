<!-- Блок в конце каждой страницы главы: курс Хекслета по теме раздела и Telegram-сообщество. -->
<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { IconBrandTelegram } from '@tabler/icons-vue'
import { communityUrl, courseForSection, courseUrl } from './courses.js'

const { page } = useData()

// relativePath не зависит от base и есть при SSR: «analytics/roi.md» → «analytics», «glossary.md» → «glossary».
const section = computed(() => page.value.relativePath.split('/')[0].replace(/\.md$/, ''))
const course = computed(() => courseForSection(section.value))
const href = computed(() => courseUrl(course.value.id, 'doc', section.value))
</script>

<template>
  <aside class="doc-cta" aria-label="Курсы и сообщество Хекслета">
    <a class="course" :href="href" target="_blank" rel="noopener">
      <span class="label">Курс Хекслета</span>
      <span class="title">{{ course.title }}</span>
      <span class="meta">{{ course.meta }}</span>
      <span class="details">{{ course.details }}</span>
      <span class="link">Программа курса →</span>
    </a>
    <div class="community">
      <p class="text">
        <strong>Хекслет AI Бизнес</strong> — Telegram-сообщество для тех, кто автоматизирует свою работу с помощью ИИ.
      </p>
      <a class="button" :href="communityUrl" target="_blank" rel="noopener">
        <IconBrandTelegram :size="16" :stroke="2" aria-hidden="true" />
        Вступить
      </a>
    </div>
  </aside>
</template>

<style scoped>
.doc-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 48px;
}

.course {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px 24px;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.25s;
}

.course:hover {
  border-color: var(--vp-c-brand-1);
}

.label {
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
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
  font-size: 14px;
  line-height: 22px;
  color: var(--vp-c-text-2);
}

.link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.community {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-radius: 12px;
  background-color: var(--vp-c-brand-soft);
}

.text {
  flex: 1 1 280px;
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: var(--vp-c-text-2);
}

.text strong {
  color: var(--vp-c-text-1);
}

.button {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 0 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  line-height: 34px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
}

.button:hover {
  border-color: var(--vp-c-brand-2);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-brand-2);
}
</style>
