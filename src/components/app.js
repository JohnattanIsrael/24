import React, { Component } from "react";

import DayData from "./dayData";
import NavBar from './nav';

export default class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="nav">
          <NavBar/>
        </div>

        <div className="home__content">
          <div className="home__content__left">
          <DayData />
          </div>
          <div className="home__content__right"></div>
        </div>

        <div className="day-nav">

        </div>

      </div>
    );
  }
}
