import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Weather from './components/Weather';
import formWeather from './components/formWeather';
import App from "./components/app";
import reducers from "./reducers";

import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.devToolsExtension ? window.devToolsExtension(): f => f)(createStore)));

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App}/>
        <Route path='/travel' component={formWeather}/>
        <Route path='/weather' component={Weather}/>
      </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
