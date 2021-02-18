import React from "react";
import './OnAir.css';

const onAirFromApi = [
    { time:'00:00', title:'ТНТ. Best', text: 'THT-International', href:'#'},
    { time:'02:00', title:'Джинглики', text: 'Карусель INT', href:'#'},
    { time:'03:00', title:'Наедине со всеми', text: 'Первый', href:'#'},
];

/**
 * показываем самое просматриваемое из сервиса Эфир
 */
export default class OnAir extends React.Component {
    /*
    Берем из апи сервиса самые просматриваемые и показываем
     */
    render() {
        return <div className='onAir'>
            <h2><a href='#'>Телепрограмма</a></h2>
            {onAirFromApi.map(({time, title, text, href}) => <a href={href}><span>{time}</span><span>{title}</span><span>{text}</span></a>)}
        </div>
    }
}
