import React from "react";

const banner = { href: '#', src: 'img-banner', altText: 'altText'};

/**
 * Показывает баннер рекламы нужного раземра
 */
export default class MainAdvBanner extends React.Component {
    /*
    берем из сервиса баннеров по апи баннер и показываем
     */
    render() {
        return <div className='banner'>
            <a href={banner.href}><img src={banner.src} alt={banner.altText}/></a>
        </div>
    }
}
