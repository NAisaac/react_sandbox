import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UnoRecharts from './UnoRecharts.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <UnoRecharts />
      </div>
    );
  }
}

export default App;
