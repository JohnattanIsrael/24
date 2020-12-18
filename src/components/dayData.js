import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";
import 'moment-timezone';


export default class DayData extends Component {
  constructor() {
    super();

    this.state = {
      temperature: "",
      bigTemp : false
    };

    // const API_KEY =`${process.env.REACT_APP_API_KEY_WEATHER}`

    this.fecthData = this.fecthData.bind(this);
    this.exclude = this.exclude.bind(this);
    this.latitude = this.latitude.bind(this);
    this.latitude = this.latitude.bind(this);
    this.apiKey = this.apiKey.bind(this);

    this.minuteTime = this.minuteTime.bind(this);
    this.dateToday = this.dateToday.bind(this);

    this.handleToggleTemp = this.handleToggleTemp.bind(this);
  }

  exclude = () => {
    return "minutely,hourly,daily,alerts";
  };

  latitude = (latitude) => {
    return "19.4978";
  };

  longitude = (longitude) => {
    return "-99.1332";
  };

  apiKey = () => {
    // TO DO : get the .env variable to work
    const api = `82ec88e49f3c5c49b152a75e00f57fcb`;
    return `${api}`;
  };

  fecthData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude()}&lon=${this.longitude()}&exclude=${this.exclude()}&appid=${this.apiKey()}&units=metric&lang=es`
      )
      .then((response) => {
        // console.log('here is the APIKEY', process.env.REACT_APP_API_KEY_WEATHER)
        this.setState({
            temperature : response.data.current.temp
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  minuteTime = () => {
    return (
        <div className='time'>
            <Moment className='time__hour' interval={60000}  format="hh:mm A"></Moment>
        </div>
    
    )
  };

  dateToday = () => {
    return <Moment interval={1000}  format="DD/MM/YYYY"></Moment>;
  };

  handleToggleTemp = () => {
    this.setState({ 
        bigTemp: !this.state.isActive 
    })
  };

  componentDidMount() {
      this.fecthData();
  }

  render() {
    return (
      <div className="day-data-wrapper">
        <div className="data">
            
          <div className='data__temperature'>
              {this.state.temperature} C°
          </div>
          <div className='data__date'>
              {this.dateToday()}
          </div>
          <div className='data__time'>
              {this.minuteTime()}
          </div>
        </div>
      </div>
    );
  }
}
