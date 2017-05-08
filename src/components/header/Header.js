import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/gold-star.svg';

const Header = () => {
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
};

export default Header;
