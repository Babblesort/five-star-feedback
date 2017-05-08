import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/gold-star.svg';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <Link to="/home">
          <span className="App-tagline">Five Star Feedback</span>
        </Link>
        <Link to="/home">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
    );
  }
}

export default Header;
