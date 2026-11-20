# SMM Bible

Практическое руководство по SMM. Сайт собирается на [VitePress](https://vitepress.dev) и публикуется на GitHub Pages: <https://mokevnin.github.io/smm-bible/>.

## Структура

[План руководства](PLAN.md) задаёт охват. [Оглавление сайта](docs/guide/index.md) связывает все 12 тематических разделов.

- `docs/strategy/`, `content/`, `podcasts/`, `ads/`, `community/`, `funnels/`, `analytics/`, `organization/`, `safety/` — главы руководства. Все пути находятся внутри `docs/`.
- `docs/platforms/` — соцсети и мессенджеры; `docs/platforms/media/` — контентные платформы и отраслевые медиа.
- `docs/mechanics/` — каталог приёмов с группами по типам задач.
- `docs/templates/` и `docs/glossary.md` — шаблоны и термины.

У руководства, площадок, механик и справочных материалов отдельные боковые меню. Ещё не написанные материалы содержат заголовок и отметку «В работе». После написания материала отметка снимается на его странице и в оглавлениях.

## Локальный запуск

Нужен [mise](https://mise.jdx.dev): он ставит Node и линтеры тех же версий, что в CI.

```sh
mise install
mise run setup   # npm-зависимости и git-хуки
npm run dev
```

## Проверки

```sh
mise run check   # всё, что проверяет CI
mise run fix     # безопасные автоисправления
mise run links   # внешние ссылки
```

Git-хуки запускают быстрые проверки при коммите и полные при пуше.

## Как добавить страницу

1. Создайте `.md`-файл в нужном разделе внутри `docs/`.
2. Добавьте ссылку в соответствующий массив меню в `docs/.vitepress/config.mts`: `guideSidebar`, `platformsSidebar`, `mechanicsSidebar` или `resourcesSidebar`.
3. Добавьте материал на страницу своего раздела и в оглавление `docs/guide/index.md`. Механики дополнительно перечисляются в `docs/mechanics/index.md`.
