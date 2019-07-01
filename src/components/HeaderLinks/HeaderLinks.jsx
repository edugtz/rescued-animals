import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderLinks.scss';

const HeaderLinks = () => {
    return (
        <nav className="main-navbar">
            <ul>
                <li>
                    <NavLink
                        className="navbar-link"
                        to="/register"
                    >
                        Register animal 
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderLinks;
