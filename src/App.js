import React, { Component } from 'react';
import logo from './gold-star.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <span className="App-tagline">Five Star Feedback</span>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
