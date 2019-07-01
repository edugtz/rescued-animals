import React from 'react';
import './Header.scss';
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return(
        <div className="app-header">
            <header>
                <span className="app-icon"><FontAwesomeIcon icon={faDog} /></span>
                <span className="app-title">Rescued Animals</span>
            </header>
        </div>
    );
};

export default Header;