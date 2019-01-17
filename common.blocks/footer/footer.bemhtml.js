block('footer')({ addMix: [{ block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center'} }] });
block('footer')(
	content()(function() {
		return [
        {
            block: 'tpl-grid',
            mods: { 'ratio': '1-1-1-1', 'col-gap': 'half' },
            content: [
            {
                elem: 'fraction',
                content: [
                {
                    block: 'text',
                    mods: { size: 's', view: 'primary' },
                    content: '© Профессионалы, 2019'
                }]
            },
            {
                elem: 'fraction',
                content: [
                {
                    block: 'text',
                    mods: { size: 'xs', view: 'secondary', transform: 'uppercase' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Заказчику'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Разместить проект'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Как стать заказчиком'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Возможности заказчика'
                }]
            },
            {
                elem: 'fraction',
                content: [
                {
                    block: 'text',
                    mods: { size: 'xs', view: 'secondary', transform: 'uppercase' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Исполнителю'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Найти проект'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Как стать исполнителем'
                }]
            },
            {
                elem: 'fraction',
                content: [
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Все проекты'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Как это работает'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Правила'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Обработка персональных данных'
                },
                {
                    tag: 'a',
                    attrs: { href: '#' },
                    block: 'text',
                    mods: { size: 's', view: 'link', display: 'block' },
                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
                    content: 'Контакты'
                }]
            }]
        }]
	})
);
