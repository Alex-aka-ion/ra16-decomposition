import React from "react";

const mapLinkFromApi = [
    { title:'Расписания', href:'#'},
];

/**
 * Показываем ссылку на сервис карт
 */
export default class MapLink extends React.Component {
    /*
    Берем из контекста регион и показываем карту нужного региона
 */
    render() {
        return <div className='mapLink'>
            <h2><a href='#'>Эфир</a></h2>
            {mapLinkFromApi.map(({title, href}) => <a href={href}><span>{title}</span></a>)}
        </div>
    }
}
