import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>d3 BarChart... the old way</h2>
        </div>
        <br></br>
        <div>
          <BarChart data={[7,9,7,12,10,8,5,11,99,6,7,9,11,5,7,4,2,8]}
          size={[500,500]}/>
        </div>
      </div>
    );
  }
}

export default App;
