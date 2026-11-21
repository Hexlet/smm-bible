#!/bin/sh
# Источники и сверки живут в docs/research/, каждая подборка перечислена в его README.
status=0

for f in *.md; do
  case "$f" in
    AGENTS.md | README.md | PLAN.md) ;;
    *)
      echo "$f: в корне лежат только AGENTS.md, README.md и PLAN.md. Исследования и источники — отдельным файлом в docs/research/ со строкой в docs/research/README.md."
      status=1
      ;;
  esac
done

for f in docs/research/*.md; do
  name=$(basename "$f")
  [ "$name" = README.md ] && continue
  if ! grep -q "($name)" docs/research/README.md; then
    echo "$f: добавить строку в таблицу подборок в docs/research/README.md."
    status=1
  fi
done

exit "$status"
