module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:      Добавление нового функционала',
    },
    {
      value: 'fix',
      name: 'fix:       Исправление ошибок',
    },
    {
      value: 'refactor',
      name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
    },
    {
      value: 'revert',
      name: 'revert:    Откат на предыдущие коммиты',
    },
    {
      value: 'style',
      name: 'style:     Правки по кодстайлу',
    },
    // {
    //   value: 'test',
    //   name: 'test:      Добавление тестов',
    // },
  ],
  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [
    {
      name: 'components',
    },
    {
      name: 'api',
    },
    {
      name: 'styles',
    },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // Поменяем дефолтные вопросы
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: 'Выберите ОБЛАСТЬ, которую вы изменили (опционально):',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите свою ОБЛАСТЬ:',
    subject: 'Короткое описание: ',
    body: 'Подробное описание: ',
    // body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально): ',
    footer: 'Branch: ',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: false,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'Branch:',

  // limit subject length
  subjectLimit: 72,
};
