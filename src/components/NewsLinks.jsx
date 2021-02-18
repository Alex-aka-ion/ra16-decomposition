import React from "react";
import './NewsLinks.css';

export default function NewsLinks(props) {
    return <div className='news-links'>
        {props.newsList.map(({href, img, text}) =>
            <a href={href} className='news-string'>
                {img && <img className='line-image' src={img} alt='text'/> }
                <div className='line-text'>{text}</div>
            </a>
        )}
    </div>
}
