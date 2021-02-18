import React from "react";
import './MostViewes.css';

const mostViewedFromApi = [
    { title:'Недвижимость', text: ' — о сталинках', href:'#'},
    { title:'Маркет', text: ' — люстры и светильники', href:'#'},
    { title:'Авто.ру', text: ' — привод 4х4 от 500 0000', href:'#'},
];


/**
 * Отображает самые просматриваемые сервисы
 */
export default class MostViewed extends React.Component {
    render() {
        return <div className='most-viewed'>
            <h2><a href='#'>Посещаемое</a></h2>
            {mostViewedFromApi.map(({title, text, href}) => <a href={href}><span>{title}</span><span>{text}</span></a>)}
        </div>
    }
}
