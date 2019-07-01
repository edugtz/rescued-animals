import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderLinks.scss';

const HeaderLinks = () => {
    return (
        <nav className="main-navbar-container">
            <ul className="main-navbar">
                <li>
                    <NavLink
                        className="navbar-link"
                        to="/register"
                    >
                        Register 
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="navbar-link"
                        to="/manage"
                    >
                        Manage 
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderLinks;
