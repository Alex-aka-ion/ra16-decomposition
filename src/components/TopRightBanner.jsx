import React from "react";

const topRightCardFromApi = {
    img: 'bigimg.jpg',
    title: 'Работа над ошибками',
    text: 'Смотрите на Яндексе и запоминайте',
};

export default class TopRightBanner extends React.Component {
    render() {
        const {img, title, text} = topRightCardFromApi;

        return <div>
            <img className='top-right-pic' src={img} alt={title} key={1}/>
            <span className='top-right-title' key={2}>{title}</span>
            <div className='top-right-text' key={3}>{text}</div>
        </div>
    }
}
