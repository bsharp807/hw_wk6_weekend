import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar =  () => (
  <div className='nav-bar'>
    <div className='link'>
      <Link to="/">Home</Link>
    </div>
    <div className='link'>
      <Link to="/rules">Rules</Link>
    </div>
  </div>
)

export default NavBar;
