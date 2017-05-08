import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Subjects from './components/subjects/Subjects';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Link to="/subjects">Subjects</Link>
          <Route exact path="/home" component={Home} />
          <Route path="/subjects" component={Subjects} />
        </div>
      </Router>
    );
  }
}

export default App;
