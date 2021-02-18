import React from "react";
import './MainSearchString.css';

/**
 * Основная строка поиска с кнопкой поиска
 */
export default class MainSearchString extends React.Component {
    /*
        Показываем строку поиска с подсказками и кнопкой поиска
 */
    render() {
        return <form className='search-form'>
            <input name='search' className='search-input'/>
            <button type='submit'>Найти</button>
        </form>
    }
}
