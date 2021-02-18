import React from "react";
import './Weather.css';

const fromWeatherApi = {
    img: 'rainy.jpg',
    title: '+17°',
    text: 'Утром +17, днём +20',
};

/**
 * Компонент для отображения погоды
 */
export default class Weather extends React.Component {
    /*
    из контекста получаем местоположение пользователя по ip
    обращаемся к сервису погоды
    отображаем погоду
     */

    render() {
        const {img, title, text} = fromWeatherApi;

        return <div className='weather-card'>
            <h2><a href='#'>Погода</a></h2>
            <img className='weather-pic' src={img} alt='rainy'/>,
            <span className='weather-temp'>{title}</span>,
            <div className='weather-text'>{text}</div>
        </div>
    }
}
