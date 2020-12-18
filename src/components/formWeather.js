import React, { Component } from 'react';
import { reduxForm, Field, formValues } from 'redux-form';
import axios from 'axios';

import Weather from './Weather';

class WeatherForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            derivation: '',
            destination: '',
            valuesSet: false,

            derivation_availableData: false,
            derivation_unavailable: false,
            derivation_description: '',
            derivation_feels_like: '',
            derivation_humidity: '',
            derivation_temperature: '',
            derivation_max_temperature: '',
            derivation_min_temperature: '',

            destination_availableData: false,
            destination_unavailable: false,
            destination_description: '',
            destination_feels_like: '',
            destination_humidity: '',
            destination_temperature: '',
            destination_max_temperature: '',
            destination_min_temperature: ''
        }

        this.fecthDerivationData = this.fecthDerivationData.bind(this);
        this.fecthDestinationData = this.fecthDestinationData.bind(this);

    }

    handleSubmit = (formValues) => {

        this.setState({
            derivation: formValues.derivation,
            destination: formValues.destination,
            valuesSet: true
        })

        this.fecthDerivationData(formValues);
        this.fecthDestinationData(formValues);
        
    }

    fecthDerivationData = (formValues) => {

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${formValues.derivation}&appid=82ec88e49f3c5c49b152a75e00f57fcb&units=metric&lang=es`
            )
            .then((response) => {
        
                this.setState({
                    derivation_availableData: true,
                    derivation_description: response.data.weather[0].description,
                    derivation_feels_like: response.data.main.feels_like,
                    derivation_humidity: response.data.main.humidity,
                    derivation_temperature: response.data.main.temp,
                    derivation_max_temperature: response.data.main.temp_max,
                    derivation_min_temperature: response.data.main.temp_min
                })
                
            })
            .catch(function (error) {
                // handle error
                this.setState({
                    derivation_unavailable: true
                })
                console.log(error);
            });
    };

    fecthDestinationData = (formValues) => {
    
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${formValues.destination}&appid=82ec88e49f3c5c49b152a75e00f57fcb&units=metric&lang=es`
            )
            .then((response) => {
                
                this.setState({
                    destination_availableData: true,
                    destination_description: response.data.weather[0].description,
                    destination_feels_like: response.data.main.feels_like,
                    destination_humidity: response.data.main.humidity,
                    destination_temperature: response.data.main.temp,
                    destination_max_temperature: response.data.main.temp_max,
                    destination_min_temperature: response.data.main.temp_min
                })
                
            })
            .catch(function (error) {
                // handle error
                this.setState({
                    destination_unavailable: true
                })
                console.log(error);
            });
    };


    render() {
        // console.log('state:', this.state)
        // console.log('destination', this.state.destination);
        // console.log('derivation', this.state.derivation);
        return (
            <div className='travel-weather'>
                <div className='form-wrapper'>
                    <form className='form' onSubmit={(this.props.handleSubmit(this.handleSubmit))}>
                        <div className='form__derivation'>
                            <label>From</label>
                            <Field
                                className='field'
                                name='derivation'
                                type='text'
                                component='input'
                                placeholder='ej. Mexico'
                            />
                        </div>
                        <div className='form__destination'>
                            <label>To</label>
                            <Field
                            className='field'
                                name='destination'
                                type='text'
                                component='input'
                                placeholder='ej. Los Angeles'
                            />
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className='form-weather-wrapper'>
                    <Weather
                        derivation={this.state.derivation}
                        destination={this.state.destination}
                        valuesSet={this.state.valuesSet}

                        derivation_availableData ={this.state.derivation_availableData}
                        derivation_unavailable ={this.state.derivation_unavailable}
                        derivation_description ={this.state.derivation_description}
                        derivation_feels_like ={this.state.derivation_feels_like}
                        derivation_humidity ={this.state.derivation_humidity}
                        derivation_temperature ={this.state.derivation_temperature}
                        derivation_max_temperature ={this.state.derivation_max_temperature}
                        derivation_min_temperature ={this.state.derivation_min_temperature}
            
                        destination_availableData ={this.state.destination_availableData}
                        destination_unavailable ={this.state.destination_unavailable}
                        destination_description ={this.state.destination_description}
                        destination_feels_like ={this.state.destination_feels_like}
                        destination_humidity ={this.state.destination_humidity}
                        destination_temperature ={this.state.destination_temperature}
                        destination_max_temperature ={this.state.destination_max_temperature}
                        destination_min_temperature ={this.state.destination_min_temperature}
                    />
                </div>
            </div>
        );
    }
}



WeatherForm = reduxForm({
    form: "weather-form",
})(WeatherForm);

export default WeatherForm;
