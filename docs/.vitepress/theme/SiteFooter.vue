<script setup lang="ts">
// Подвал главной: кто делает руководство, зачем и на чём основана экспертиза.
// На страницах глав сайдбар закреплён слева, и полноширинный подвал лёг бы под него, поэтому только главная.
import { useData } from 'vitepress'

const { frontmatter } = useData()
const hexletUrl = 'https://ru.hexlet.io/?utm_source=smm-bible&utm_medium=referral&utm_campaign=footer'
const year = new Date().getFullYear()
</script>

<template>
  <footer v-if="frontmatter.layout === 'home'" class="site-footer">
    <div class="container">
      <div class="columns">
        <section>
          <h2 class="heading">Кто мы</h2>
          <p>
            SMM Bible делает <a :href="hexletUrl" target="_blank" rel="noopener">Хекслет</a>, онлайн-школа программирования, аналитики и ИИ. Школа работает по образовательной лицензии, у неё больше 4500 выпускников.
          </p>
        </section>
        <section>
          <h2 class="heading">Зачем это руководство</h2>
          <p>
            Мы писали его для своих маркетологов, чтобы у команды были общие правила работы с аудиторией, контентом, рекламой и отчётами, а новый сотрудник входил в работу по тексту, а не по пересказам. Закрывать его не было смысла, поэтому оно открыто для всех.
          </p>
        </section>
        <section>
          <h2 class="heading">Почему мы в этом разбираемся</h2>
          <p>
            Студенты приходят в онлайн-школу через соцсети, контент и рекламу, поэтому SMM для нас основная работа. Хекслет сам ведёт каналы в Telegram, ВКонтакте, YouTube и Дзене. Утверждения о площадках, алгоритмах и законах мы сверяем с первоисточниками.
          </p>
        </section>
      </div>
      <div class="cta">
        <div>
          <p class="cta-text">Хекслет AI Бизнес</p>
          <p>Сообщество вайбкодеров, автоматизаторов и предпринимателей в Telegram. Помогаем автоматизировать процессы и бизнес с помощью ИИ.</p>
        </div>
        <a class="cta-button" href="https://t.me/hexletai" target="_blank" rel="noopener">Вступить в сообщество</a>
      </div>
      <p class="copyright">© {{ year }} Хекслет</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 48px 24px 32px;
  border-top: 1px solid var(--vp-c-gutter);
  background-color: var(--vp-c-bg-alt);
}

@media (min-width: 640px) {
  .site-footer {
    padding: 48px 48px 32px;
  }
}

@media (min-width: 960px) {
  .site-footer {
    padding: 56px 64px 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.columns {
  display: grid;
  gap: 32px;
}

@media (min-width: 960px) {
  .columns {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.heading {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--vp-c-text-1);
}

p {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  color: var(--vp-c-text-2);
}

a {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
}

a:hover {
  color: var(--vp-c-brand-2);
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  padding: 20px 24px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
}

.cta-text {
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.cta-button {
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

.cta-button:hover {
  background-color: var(--vp-button-brand-hover-bg);
  color: var(--vp-button-brand-hover-text);
}

.copyright {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 13px;
  color: var(--vp-c-text-3);
}
</style>
