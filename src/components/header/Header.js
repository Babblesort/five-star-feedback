import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/gold-star.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/home">
        <span className="Header-tagline">Five Star Feedback</span>
      </Link>
      <Link to="/home">
        <img src={logo} className="Header-logo" alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
