import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderLinks from '../HeaderLinks';

const Header = () => {
    return(
        <div className="app-header-wrapper">
            <header className="container app-header">
                <NavLink
                    className="app-brand"
                    to="/"
                >
                    <span className="app-icon"><FontAwesomeIcon icon={faDog} /></span>
                    <span className="app-title">Rescued Animals</span>
                </NavLink>
                <HeaderLinks />
            </header>
        </div>
    );
};

export default Header;