import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

let Header = () => (
  <div>
    <div className='header'>
      EMPLOYEE MANAGEMENT
    </div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/contactus">Contact us</Link>
      <Link to="/aboutus">About us</Link>
    </div>
  </div>
);
export default Header;