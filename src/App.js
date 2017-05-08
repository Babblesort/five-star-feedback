import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Subjects from './components/subjects/Subjects';
import logo from './gold-star.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/home"><span className="App-tagline">Five Star Feedback</span></Link>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <Link to="/subjects">Subjects</Link>
            <Route exact path="/home" component={Home} />
            <Route path="/subjects" component={Subjects} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
