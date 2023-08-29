import React from 'react';
import { Link } from "react-router-dom";

class NavbarMenu extends React.Component {
    isRouteActive = (routePath) => {
        return window.location.pathname === routePath;
    };

    render() {
        return (
            <nav className="navbar">
                <div className="navbar__container">
                    <input className="navbar__container__checkbox" type="checkbox" name="menu" id="menu" />
                    <div className="navbar__container__hamburger-lines">
                        <span className="navbar__container__hamburger-lines__line navbar__container__hamburger-lines__line--1"></span>
                        <span className="navbar__container__hamburger-lines__line navbar__container__hamburger-lines__line--2"></span>
                        <span className="navbar__container__hamburger-lines__line navbar__container__hamburger-lines__line--3"></span>
                    </div>
                    <div className="navbar__container__logo">
                        <h4 className="navbar__container__logo--text">Pokemon</h4>
                    </div>
                    <ul className="navbar__container__menu-items">
                        <li className="navbar__container__menu-items__menu-item">
                            <Link to="/" className={`navbar__container__menu-items__menu-item__menu-link ${this.isRouteActive('/') ? 'active' : ''}`}>
                                <span className="navbar__container__menu-items__menu-item__menu-link__menu-link-text">Home</span>
                            </Link>
                        </li>
                        <li className="navbar__container__menu-items__menu-item">
                            <Link to="/list" className={`navbar__container__menu-items__menu-item__menu-link ${this.isRouteActive('/list') ? 'active' : ''}`}>
                                <span className="navbar__container__menu-items__menu-item__menu-link__menu-link-text">List</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarMenu;
