module.exports = {
    block: 'page',
    title: 'Профессионалы 4.0',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' },
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    mix: [{ block: 'theme', mods: { color: 'p4', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'roboto' } }],
    content: [
    {
        block: 'tpl-layout',
        content: [
        {
            block: 'header',
            active: 'Все проекты'
        }]
    },
    {
        block: 'search-section',
        mix: { block: 'tpl-layout' },
        content: [
        {
            elem: 'content',
            mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 's', align: 'center' } },
            content: [
            {
                block: 'promo-search',
                content: [
                {
                    elem: 'input',
                    tag: 'input',
                    attrs: { placeholder: 'Поиск по названию проекта, сфере или навыкам' }
                },
                {
                    block: 'icon',
                    mods: { size: 'm', view: 'link', name: 'filter' },
                    mix: { block: 'decorator', mods: { 'indent-r': 'xl' } }
                },
                {
                    elem: 'button',
                    mods: { size: 'm' },
                    content: {
                        block: 'icon',
                        mods: { size: 'm', name: 'search' }
                    }
                }]
            },
            {
                elem: 'tag-header',
                mix: { block: 'text', mods: { size: 'xs', view: 'primary', transform: 'uppercase' } },
                content: 'Часто ищут:'
            },
            {
                block: 'decorator',
                mods: { 'space-t': 'xs' },
                content: [
                {
                    block: 'tag',
                    mods: { size: 's', view: 'default' },
                    content: 'Закупки'
                },
                {
                    block: 'tag',
                    mods: { size: 's', view: 'default' },
                    content: 'IT-разработка'
                },
                {
                    block: 'tag',
                    mods: { size: 's', view: 'default' },
                    content: 'Строительство'
                },
                {
                    block: 'tag',
                    mods: { size: 's', view: 'default' },
                    content: 'Нефтепереработка'
                },
                {
                    block: 'tag',
                    mods: { size: 's', view: 'default' },
                    content: 'Нефтехимия'
                }]
            }]
        }]
    },
    {
        block: 'tpl-layout',
        content: [
        {
            block: 'section',
            mix: { block: 'decorator', mods: { 'space-v': 'xxxxxl' } },
            mods: { view: 'gray' },
            content: [
            {
                block: 'tpl-layout',
                elem: 'container',
                elemMods: { size: 'ms', align: 'center' },
                content: [
                {
                    block: 'text',
                    mods: { size: 'l', weight: 'bold', view: 'primary' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
                    content: 'Проекты'
                },
                {
                    block: 'project',
                    attrs: { href: '../project/project.html' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
                    tags: [
                    {
                        block: 'tag',
                        mods: { size: 'xs' },
                        content: 'Капитальное строительство'
                    },
                    {
                        block: 'tag',
                        mods: { size: 'xs' },
                        content: 'IT-разработка'
                    },
                    {
                        block: 'tag',
                        mods: {size: 'xs' },
                        content: 'Нефть и газ'
                    }],
                    heading: 'Создание инструмента для оценки хода строительства на основании данных с беспилотных летательных аппаратов',
                    logo: {
                        block: 'image',
                        attrs: { style: 'margin-top: 28px' },
                        mix: { block: 'decorator', mods: { 'indent-t': 'xl' } },
                        url: '../../assets/logos/gpn.svg'
                    },
                    text: 'Автоматизированная оценка хода строительства на основании полученных данных с БПЛА – видеопоток,: 1. Расчет количества погруженных свай (до 8000 свай на обьекте): Количество свай на участке на момент облета БРЛА. Отчет о динамике …',
                    dates: '01.12.2018–01.06.2018',
                    vacancies: [
                    {
                        block: 'vacancy-tag',
                        content: 'Fullstack-разработчик'
                    },
                    {
                        block: 'vacancy-tag',
                        content: 'Системный аналитик'
                    }]
                },
                {
                    block: 'project',
                    mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
                    tags: [
                    {
                        block: 'tag',
                        mods: { size: 'xs' },
                        content: 'HSE'
                    },
                    {
                        block: 'tag',
                        mods: { size: 'xs' },
                        content: 'IT-разработка'
                    },
                    {
                        block: 'tag',
                        mods: {size: 'xs' },
                        content: 'Нефтехимия'
                    }],
                    heading: 'Интеллектуальное видеонаблюдение в сфере промышленной безопасности',
                    logo: {
                        block: 'image',
                        width: '135',
                        mix: { block: 'decorator', mods: { 'indent-t': 'xl' } },
                        url: '../../assets/logos/sibur.png'
                    },
                    text: 'Определение нештатных событий на изображениях с камер видеонаблюдения. К нештатным ситуациям могут относиться парения/утечки/присутствие людей/отсутствие средств защиты(касок) в определённых зонах ... ',
                    dates: '16.02.2019–16.10.2019',
                    vacancies: [
                    {
                        block: 'vacancy-tag',
                        content: 'Backend-разработчик'
                    },
                    {
                        block: 'vacancy-tag',
                        content: 'Frontend-разработчик'
                    },
                    {
                        block: 'vacancy-tag',
                        content: 'Data Scientist'
                    }]
                },
                {
                    block: 'project',
                    mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
                    tags: [
                    {
                        block: 'tag',
                        mods: { size: 'xs' },
                        content: 'Новые технологии'
                    },
                    {
                        block: 'tag',
                        mods: { size: 'xs' },
                        content: 'Нефть и газ'
                    },
                    {
                        block: 'tag',
                        mods: {size: 'xs' },
                        content: 'Гидроэнергетика'
                    }],
                    heading: 'Рассчет параметров роторно-вихревых машин',
                    logo: {
                        block: 'image',
                        mix: { block: 'decorator', mods: { 'indent-t': 'xl' } },
                        url: '../../assets/logos/gpn.svg'
                    },
                    text: 'Выполнить стационарные гидромеханические расчеты проточной части в согласованном диапазоне изменения чисел Рейнольдса для одной ступени насоса. Построить зависимости КПД РВМ от частоты вращения в диапазоне … ',
                    dates: '12.02.2019–20.06.2019',
                    vacancies: [
                    {
                        block: 'vacancy-tag',
                        content: 'Аналитик'
                    },
                    {
                        block: 'vacancy-tag',
                        content: 'Инженер'
                    },
                    {
                        block: 'vacancy-tag',
                        content: 'Руководитель проекта'
                    }]
                },
                {
                    block: 'project',
                    mix: { block: 'decorator', mods: { 'indent-b': 'xl' }},
                    tags: [
                    {
                        block: 'tag',
                        mods: { size: 'xs' },
                        content: 'Новые технологии'
                    },
                    {
                        block: 'tag',
                        mods: { size: 'xs' },
                        content: 'Математическое моделирование'
                    },
                    {
                        block: 'tag',
                        mods: {size: 'xs' },
                        content: 'Нефть и газ'
                    }],
                    heading: 'Анализ характеристик плоско-сворачиваемого шланга на основе вычислительных экспериментов с математической моделью',
                    logo: {
                        block: 'image',
                        mix: { block: 'decorator', mods: { 'indent-t': 'xl' } },
                        url: '../../assets/logos/gpn.svg'
                    },
                    text: 'Выполнить стационарные гидромеханические расчеты проточной части в согласованном диапазоне изменения чисел Рейнольдса для одной ступени насоса. Построить зависимости КПД РВМ от частоты вращения в диапазоне … ',
                    dates: '22.01.2019–04.09.2019',
                    vacancies: [
                    {
                        block: 'vacancy-tag',
                        content: 'Проектировщик машин и оборудования для эксплуатации нефтяных и газовых скважин'
                    },
                    {
                        block: 'vacancy-tag',
                        content: 'Специалист по математическому моделированию'
                    }]
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'load-more',
                    mix: [{ block: 'decorator', mods: { 'indent-t': 's', 'indent-b': 'xxxxl' } },
                          { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } }],
                    content: [
                    {
                        block: 'icon',
                        mods: { name: 'reload', size: 'm', view: 'ghost' },
                        mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } }
                    },
                    {
                        block: 'text',
                        mods: { size: 'm', view: 'primary' },
                        content: 'Загрузить ещё'
                    }]
                },
                {
                    block: 'subscription',
                    content: [
                    {
                        elem: 'header',
                        mix: [{ block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold' } },
                              { block: 'decorator', mods: { 'indent-b': 'xl' } }],
                        content: { html: 'Узнайте первым о новых проектах<br/>в вашей отрасли' }
                    },
                    {
                        tag: 'input',
                        mix: [{ block: 'decorator', mods: { 'indent-b': 's' } }],
                        attrs: { placeholder: 'Укажите интересные вам отрасли, например нефтедобыча' },
                        elem: 'input'
                    },
                    {
                        tag: 'input',
                        mix: [{ block: 'decorator', mods: { 'indent-b': 's' } }],
                        attrs: { placeholder: 'Электронная почта', style: 'width: 406px;' },
                        elem: 'input'
                    },
                    {
                        tag: 'button',
                        mix: [{ block: 'decorator', mods: { 'indent-b': 's', 'indent-l': 's' } }],
                        elem: 'button',
                        content: 'Подписаться'
                    },
                    {
                        block: 'checkbox',
                        text: 'Я согласен с условиями обработки персональных данных'
                    }]
                }]
            }]
        }]
    },
    {
        block: 'tpl-layout',
        content: [
        {
            block: 'section',
            mods: { view: 'gray' },
            content: [
            {
                block: 'footer'
            }]
        }]
    }]
};
