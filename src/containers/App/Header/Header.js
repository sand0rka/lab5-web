import React from 'react';
import logo from '../../../Icons/trolleybus-logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/catalog">Catalog</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
