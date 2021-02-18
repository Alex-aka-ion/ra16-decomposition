import React from "react";
import './TvProgram.css';

const onAirFromApi = [
    { img:'img1', title:'Управление как искусство', text: 'Успех', href:'#'},
    { img:'img2', title:'Ночь. Мир в это время', text: 'earthTV', href:'#'},
    { img:'img3', title:'Андрей Возн...', text: 'Совешенно секретно', href:'#'},
];

/**
 * Показывает ближайшие тв-программы
 */
export default class TvProgram extends React.Component {
    /*
    берем из апи программ список по текущему времени и количеству программ
     */
    render() {
        return <div className='tvProgram'>
            <h2><a href='#'>Эфир</a></h2>
            {onAirFromApi.map(({img, title, text, href}) => <a href={href}><img src={img}/><span>{title}</span><span>{text}</span></a>)}
        </div>
    }
}
