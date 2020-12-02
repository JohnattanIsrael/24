import React, { Component } from 'react';

export default class App extends Component {

  handleDown = () => {
    console.log('down')
  }

  render() {
    return (
      <div className='app' onKeyPress>
      </div>
    );
  }
}
