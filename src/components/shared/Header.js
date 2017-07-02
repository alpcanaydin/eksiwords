import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

import './Header.css';

const Header = () => (
  <header className="Header">
    <Link to="/">
      <Logo />
    </Link>
  </header>
);

export default Header;
