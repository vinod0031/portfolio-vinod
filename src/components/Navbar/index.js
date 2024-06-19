// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='img-cont'>
        <img className="logo-image-size" src={`${process.env.PUBLIC_URL}/images/code-log.jpg`} alt='image-error'/>
        <p className='number'>Cell +91 88978-25325</p>
      </div>
      <div>
    <nav>
      <ul className='navbar-flex'>
        <li className='list'><Link to="/">Home</Link></li>
        <li className='list'><Link to="/about">About</Link></li>
        <li className='list'><Link to="/skills">Skills</Link></li>
        <li className='list'><Link to="/Certificates">Certificates</Link></li>
        <li className='list'><Link to="/projects">Projects</Link></li>
        <li className='list'><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
    </div>
  );
};

export default Navbar;
