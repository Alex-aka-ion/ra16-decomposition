import React from "react";
import Indexes from "./Indexes";
import NewsLinks from "./NewsLinks";
import NewsToggler from "./NewsToggler";

const newsSections = [
    { text: 'Сейчас в СМИ', faded: false },
    { text: 'в Германии', faded: true },
    { text: 'Рекомендуем', faded: true },
];

const newsNow = [
    { img: 'img1', text: 'news1', href:'#'},
    { img: 'img2', text: 'news2', href:'#'},
    { img: 'img3', text: 'news3', href:'#'},
    { img: 'img4', text: 'news4', href:'#'},
    { img: 'img5', text: 'news5', href:'#'},
];

const newsGermany = [
    { img: 'img6', text: 'news6', href:'#'},
    { img: 'img7', text: 'news7', href:'#'},
    { img: 'img8', text: 'news8', href:'#'},
    { img: 'img9', text: 'news9', href:'#'},
    { img: 'img10', text: 'news10', href:'#'},
];

const newsRecomended = [
    { img: 'img11', text: 'news11', href:'#'},
    { img: 'img12', text: 'news12', href:'#'},
    { img: 'img13', text: 'news13', href:'#'},
    { img: 'img14', text: 'news14', href:'#'},
    { img: 'img15', text: 'news15', href:'#'},
];

/**
 * Отображает самые актуальные новости
 */
export default class News extends React.Component {
    /*
Берем из апи новости и показываем с иконками
*/
    state = {
        selectedSection: newsSections[0].text,
        newsList: [...newsNow],
    }
    render() {
        return <div>
            <NewsToggler sections={newsSections}/>
            <NewsLinks newsList={this.state.newsList} quantity={this.props.quantity}/>
            <Indexes/>
        </div>
    }
}
