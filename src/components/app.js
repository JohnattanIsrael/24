import React, { Component } from "react";

import axios from "axios";


export default class App extends Component {
  constructor(){
    super();

    // const API_KEY =`${process.env.REACT_APP_API_KEY_WEATHER}`

    this.fecthData = this.fecthData.bind(this);
    this.exclude = this.exclude.bind(this);
    this.latitude = this.latitude.bind(this);
    this.latitude = this.latitude.bind(this);
    this.apiKey = this.apiKey.bind(this);
  }

  exclude = () => {
    return('minutely,hourly,daily,alerts')
  }

  latitude = ( latitude) => {
    return('19.4978')
  }

  longitude = (longitude) => {
    return('-99.1332')
  }

  apiKey = () => {
    // TO DO : get the .env variable to work
    const api = `82ec88e49f3c5c49b152a75e00f57fcb`
    return(`${api}`)
  }

  fecthData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude()}&lon=${this.longitude()}&exclude=${this.exclude()}&appid=${this.apiKey()}&units=metric&lang=es`)
    .then(function (response) {
      // console.log('here is the APIKEY', process.env.REACT_APP_API_KEY_WEATHER)
      console.log('very well',response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  componentDidMount() {
    console.log('env:', process.env);
    
  }

  render() {
    return (
      <div className="home">
        <h1>so</h1>
        <button onClick={() => this.fecthData()} >Get Data</button>
        
        
      </div>
    );
  }
}
