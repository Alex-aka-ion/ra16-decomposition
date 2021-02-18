import React from "react";
import Weather from "./Weather";
import TvProgram from "./TvProgram";
import OnAir from "./OnAir";
import MapLink from "./MapLink";
import MostViewed from "./MostViewed";
import './FooterBlock.css';

export default class FooterBlock extends React.Component {
    render() {
        return <div className='footer-main-flex'>
            <div>
                <Weather/>
                <MostViewed/>
            </div>
            <div>
                <MapLink/>
                <TvProgram/>
            </div>
            <div>
                <OnAir/>
            </div>
        </div>
    }
}
