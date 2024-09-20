# Гайд по использованию

### Для того, чтобы быстро создать слайс есть список команд: 

- Создание enities
  - ```foo@bar:~$ npm run create:entities --name=<название сущности>```

- Создание features
  - ```foo@bar:~$ npm run create:features --name=<название фичи>```

- Создание pages
  - ```foo@bar:~$ npm run create:pages --name=<название страницы>```

- Создание widgets
  - ```foo@bar:~$ npm run create:widgets --name=<название виджета>```

- Создание shared
  - ```foo@bar:~$ npm run run create:shared --name=<название компонента>```

### Идеалогия слайсов:

[Feature Slices Design](https://feature-sliced.design/ru/docs)

| Название  | Назначение |
| ------------- | ------------- |
| `App` | Конфиги, провайдеры, корневой файл проекта  |
| `Entities` | Бизнес логика(обращение к апи и т.д)  |
| `Features`  | Возможности определенного виджета или страницы |
| `Pages`  | Страницы проекта |
| `Widgets`  | Виджеты страницы(все что используется больше одного раза перенести в `Shared`) |
| `Shared`  | Все что может переиспользоваться в проекте |
