import React, { useState } from 'react';
import logo from '../../../Icons/trolleybus-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const handleTabClick = (tab) => {
    if (tab === 'catalog') {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="centered-navigation">
        <ul>
          <li onClick={() => handleTabClick('home')}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handleTabClick('catalog')}>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li onClick={() => handleTabClick('cart')}>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
