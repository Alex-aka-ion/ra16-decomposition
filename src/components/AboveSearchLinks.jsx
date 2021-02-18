import React from "react";

const products = [
    { text: 'Видео', href: '#' },
    { text: 'Картинки', href: '#' },
    { text: 'Новости', href: '#' },
    { text: 'Карты', href: '#' },
    { text: 'Маркет', href: '#' },
    { text: 'Переводчик', href: '#' },
    { text: 'Эфир', href: '#' },
    { text: 'Музыка', href: '#' },
    { text: 'Программа', href: '#' },
    { text: 'Отели', href: '#' },
];

/**
 * Отображение ссылок на сервисы над строкой поиска
 */
export default class AboveSearchLinks extends React.Component {
    /*
    из контекста получаем список сервисов для текущего региона
    отображаем указанное количество ссылок
    остальное прячем под кнопку "еще"
     */
    render() {
        return <div>
            {products.map(({href, text}) => <a href={href}>{text}</a>)}
        </div>
    }
}
