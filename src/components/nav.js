import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div className='navbar-wrapper'>
                <div className='location'>
                    Datos de la Ciudad de México proveidos vía API
                </div>
                <a href='https://www.youtube.com/watch?v=ugyXd3IGFu0' className='christmas-link'>
                    Ten una feliz navidad aún en el 2020
                </a>
                <a href='https://www.linkedin.com/in/johnaangeles/' className='hire-me'>
                    Contrátame
                </a>
            </div>
        );
    }
}
