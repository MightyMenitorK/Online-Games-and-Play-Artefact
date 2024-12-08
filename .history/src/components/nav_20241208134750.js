import React from 'react';
import { Link } from 'react-router-dom';
import WHLogo from '../resources/pics/whlogo.webp'

import './nav.css'

const Navbar = () => {
  return (
    <nav>
      <ul class="navbar">
        <li className="logo">
          <img src={WHLogo} alt="Logo" />
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="games">Games</Link></li>
        <li><Link to="references">References</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
