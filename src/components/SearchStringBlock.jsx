import React from "react";
import Logo from "./Logo";
import AboveSearchLinks from "./AboveSearchLinks";
import MainSearchString from "./MainSearchString";
import UnderSearchText from "./UnderSearchText";
import './SearchStringBlock.css';

export default class SearchStringBlock extends React.Component {
    render() {
        return <div className='search-all-flex'>
            <div>
                <Logo sizeOfLogo={'middle'}/>
            </div>
            <div className='search-flex'>
                <AboveSearchLinks quantityToShow={7}/>
                <MainSearchString />
                <UnderSearchText />
            </div>
        </div>
    }
}
