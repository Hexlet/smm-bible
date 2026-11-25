<!-- Приглашение в Telegram-сообщество Хекслета сразу под hero главной. -->
<script setup lang="ts">
import { IconBrandTelegram } from '@tabler/icons-vue'
import { communityUrl } from './courses.js'
</script>

<template>
  <section class="community-cta">
    <div class="container">
      <div class="card">
        <div>
          <h2 class="title">Хекслет AI Бизнес</h2>
          <p class="text">
            Telegram-сообщество для специалистов, которые хотят автоматизировать свою работу с помощью ИИ, а также для вайбкодеров, автоматизаторов и предпринимателей.
          </p>
        </div>
        <a class="button" :href="communityUrl" target="_blank" rel="noopener">
          <IconBrandTelegram :size="18" :stroke="2" aria-hidden="true" />
          Вступить в сообщество
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.community-cta {
  padding: 0 24px 48px;
}

@media (min-width: 640px) {
  .community-cta {
    padding: 0 48px 64px;
  }
}

@media (min-width: 960px) {
  .community-cta {
    padding: 0 64px 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 12px;
  background-color: var(--vp-c-brand-soft);
}

.title {
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  color: var(--vp-c-text-1);
}

.text {
  margin: 0;
  max-width: 640px;
  font-size: 14px;
  line-height: 22px;
  color: var(--vp-c-text-2);
}

.button {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 0 20px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 20px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  line-height: 38px;
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
