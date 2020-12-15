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
                            {this.props.derivation_temperature}
                        </div>
                    </div>
                    <div className='derivation__bellow'>
                        <div className='derivation__bellow__city'>
                            {this.props.derivation}
                        </div>
                        <div className='derivation__info'>
                            <div className='derivation__info__feels-like'>
                                {this.props.derivation_feels_like}
                            </div>
                            <div className='derivation__info__max-temperature'>
                                {this.props.derivation_max_temperature}
                            </div>
                            <div className='derivation__info__min-temperature'>
                                {this.props.derivation_min_temperature}
                            </div>
                            <div className='derivation__info__humidity'>
                                {this.props.derivation_humidity}
                            </div>

                        </div>

                    </div>
                </div>
            ) : (
                    <div>
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
                            {this.props.destination_temperature}
                        </div>
                    </div>
                    <div className='destination__bellow'>
                        <div className='destination__bellow__city'>
                            {this.props.destination}
                        </div>
                        <div className='destination__info'>
                            <div className='destination__info__feels-like'>
                                {this.props.destination_feels_like}
                            </div>
                            <div className='destination__info__max-temperature'>
                                {this.props.destination_max_temperature}
                            </div>
                            <div className='destination__info__min-temperature'>
                                {this.props.destination_min_temperature}
                            </div>
                            <div className='destination__info__humidity'>
                                {this.props.destination_humidity}
                            </div>

                        </div>

                    </div>
                </div>
            ) : (
                    <div>
                        <h1>Select the city of Destination</h1>
                    </div>
                )
        )
    }

    render() {

        return (
            <div>
                <div>
                    {this.derivation()}
                </div>
                <div>
                    {this.destination()}
                </div>
            </div>
        );
    }
}
