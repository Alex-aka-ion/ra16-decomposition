import './App.css';
import News from "./components/News";
import MainAdvBanner from "./components/MainAdvBanner";
import TopRightBanner from "./components/TopRightBanner";
import SearchStringBlock from "./components/SearchStringBlock";
import FooterBlock from "./components/FooterBlock";
import React from "react";

function App() {
    /*
    * Основной файл. Тут загружаем основные Api и заполняем Context например
    * */
    return (
        <div className="App">
            <header className='header-flex'>
                <News quantity={5}/>
                <TopRightBanner/>
            </header>
            <SearchStringBlock/>
            <MainAdvBanner/>
            <footer>
                <FooterBlock/>
            </footer>
        </div>
    );
}

export default App;
