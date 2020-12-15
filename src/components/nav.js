import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <div className='navbar-wrapper'>
                <div className='location'>
                    Datos de la Ciudad de México proveidos vía API
                </div>
                <div className='christmas-link'>
                    <NavLink to="/travel" activeClassName="nav-link-active">
                        Travel
                    </NavLink>
                </div>
                <a href='https://www.linkedin.com/in/johnaangeles/' className='hire-me'>
                    Contrátame
                </a>
            </div>
        );
    }
}
