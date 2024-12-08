import React from 'react';
import { Link } from 'react-router-dom';
import WHLogo from '../resources/pics/whlogo.webp'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="references">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
