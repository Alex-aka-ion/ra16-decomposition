import React from "react";
import './Indexes.css';

const currencies = [
    { title: 'USD MOEX 63,52', text: '+0.09', href: '#' },
    { title: 'EUR MOEX 70.86', text: '+0.14', href: '#' },
    { title: 'НЕФТЬ 64,90', text: '+1,63%', href: '#' },
];

/**
 * Отображение индексов валют и прочих параметров
 */
export default class Indexes extends React.Component {
    /*
        получаем из параметров какие индексы показывать
        обращаемся к апи сервиса валют
        показваем валюты
     */
    render() {
        return <div className='currency-block'>
            {currencies.map(({title, text, href}) =>
                    <a href={href} className='currency-text'>
                        <div className='currency-text-main'>{title}</div>
                        <div className='currency-text-add'>{text}</div>
                    </a>
                )}
                <a href='#'>...</a>
        </div>
    }
}
