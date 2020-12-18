import React, { Component } from 'react';


export default class Weather extends Component {
    constructor(props) {
        super(props);


    }

    derivation = () => {

        return (
            this.props.derivation_availableData ? (
                <div className='derivation'>
                    <div className='derivation__above'>
                        <div className='derivation__above__description'>
                            {this.props.derivation_description}
                        </div>
                        <div className='derivation__above__temperature'>
                            {this.props.derivation_temperature} C°
                        </div>
                    </div>
                    <div className='derivation__bellow'>
                        <div className='derivation__bellow__city'>
                            {this.props.derivation}
                        </div>
                        <div className='derivation__info'>
                            <div className='derivation__info__feels-like'>
                                Sensación: {this.props.derivation_feels_like} C°
                            </div>
                            <div className='derivation__info__minmax-temperature'>
                                <h3>MIN</h3>&nbsp;{this.props.derivation_min_temperature}C°&nbsp;<h3>MAX</h3>&nbsp;{this.props.derivation_max_temperature}C°
                            </div>
                            <div className='derivation__info__humidity'>
                                Humedad: {this.props.derivation_humidity} %
                            </div>

                        </div>

                    </div>
                </div>
            ) : (
                    <div className='select-city'>
                        <h1>Select the city of departure</h1>
                    </div>
                )
        )
    }

    destination = () => {
        this.fecthDestinationData;
        return (
            this.props.destination_availableData ? (
                <div className='destination'>
                    <div className='destination__above'>
                        <div className='destination__above__description'>
                            {this.props.destination_description}
                        </div>
                        <div className='destination__above__temperature'>
                            {this.props.destination_temperature} C°
                        </div>
                    </div>
                    <div className='destination__bellow'>
                        <div className='destination__bellow__city'>
                            {this.props.destination}
                        </div>
                        <div className='destination__info'>
                            <div className='destination__info__feels-like'>
                                Sensación: {this.props.destination_feels_like} C°
                            </div>
                            <div className='destination__info__minmax-temperature'>
                                <h3>MIN</h3>&nbsp;{this.props.destination_min_temperature}C° &nbsp;<h3>MAX</h3>&nbsp;{this.props.destination_max_temperature}C°
                            </div>
                            <div className='destination__info__humidity'>
                                Humedad: {this.props.destination_humidity} %
                            </div>

                        </div>

                    </div>
                </div>
            ) : (
                    <div className='select-city'>
                        <h1>Select the city of Destination</h1>
                    </div>
                )
        )
    }

    render() {

        return (
            <div className='weather'>
                <div className='weather__derivation'>
                    <div className='weather__derivation__card'>
                        {this.derivation()}
                    </div>
                </div>
                <div className='weather__destination'>
                    <div className='weather__derivation__card'>
                        {this.destination()}
                    </div>
                </div>
                <a href="https://www.linkedin.com/in/johnaangeles/">
                    Johnattan Martínez Angeles - FullStack Web Developer
                </a>
            </div>
        );
    }
}
