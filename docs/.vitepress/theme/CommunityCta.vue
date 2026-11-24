<!-- Приглашение в Telegram-сообщество Хекслета сразу под hero главной. -->

<template>
  <section class="community-cta">
    <div class="container">
      <div class="card">
        <div>
          <h2 class="title">Хекслет AI Бизнес</h2>
          <p class="text">
            Сообщество вайбкодеров, автоматизаторов и предпринимателей в Telegram. Помогаем автоматизировать процессы и бизнес с помощью ИИ.
          </p>
        </div>
        <a class="button" href="https://t.me/hexletai" target="_blank" rel="noopener">Вступить в сообщество</a>
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
  display: inline-block;
  padding: 0 20px;
  border-radius: 20px;
  background-color: var(--vp-button-brand-bg);
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  color: var(--vp-button-brand-text);
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.25s;
}

.button:hover {
  background-color: var(--vp-button-brand-hover-bg);
  color: var(--vp-button-brand-hover-text);
}
</style>
