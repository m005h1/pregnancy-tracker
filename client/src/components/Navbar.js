// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">GDM Manager</Link>
      </div>
      <div className="navbar-middle">
        <Link to="/about">About</Link>
        <Link to="/publications">Publications</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="btn btn-outline">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;