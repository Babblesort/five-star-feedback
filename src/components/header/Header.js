import React from 'react';
import logo from '../../images/gold-star.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <span className="Header-tagline">Five Star Feedback</span>
      <img src={logo} className="Header-logo" alt="logo" />
    </div>
  );
};

export default Header;
