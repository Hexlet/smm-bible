# SMM Bible

Практическое руководство по SMM. Сайт собирается на [VitePress](https://vitepress.dev) и публикуется на GitHub Pages: <https://mokevnin.github.io/smm-bible/>.

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
2. Добавьте ссылку на него в `sidebar` в `docs/.vitepress/config.mts`.
