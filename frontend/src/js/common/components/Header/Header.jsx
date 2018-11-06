import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="globalHeader">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/page">Just Another Page</Link>
      </li>
    </ul>
  </header>
);

export default Header;
