import React from "react";
import './NewsToggler.css';

export default function NewsToggler(props) {
    return <div className='news-toggler-links'>
        {props.sections.map(
            ({text, faded}) => <div className={faded && 'faded'}>{text}</div>
        )}
    </div>
}
