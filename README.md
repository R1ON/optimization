# Оптимизация

## Конвертируем

1. jpg, png -> webp
2. gif -> lottie
3. ttf, otf, eot, woff -> woff2

## Сжимаем
1. Webp картинки
2. SVG иконки

## Удаляем
1. Ненужные шрифты (Можно найти через CSS Overview)
2. Knip библиотека для поиска неиспользуемого кода
3. Ненужные события через removeEventListener

## Не используем
1. box-shadow из нескольких значений
2. Тяжелые версии npm библиотек. ChatGPT поможет найти аналог


## Не пишите
1. Логику внутри .sort()
2. Несколько циклов (.map().filter().map().find()), всегда можно обойтись одним
3. Два цикла, для обхода объектов (Object.values(object).forEach()). Воспользуйтесь for in


## Заранее загружаем
1. script/css/font - можно подругзить заранее через <link rel="preload">
2. Ненужные скрипты грузим через: <script async> <script defer>

## Оптимизируем
1. React.lazy + suspence
2. Кэшируем через useMemo/useCallback
3. Уменьшаем количество данных, передаваемых по сети
4. MessagePack
5. WebWorker
6. Debounce / throttle
7. Виртуализация (react-virtualized)

## Не забудьте
1. Проверить вкладку lighthouse
2. Улучшить UX через Optimistic update
