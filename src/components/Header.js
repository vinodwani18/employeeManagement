import React from 'react';
import { Link } from 'react-router-dom';

let Header = () => (
  <div>
    
    <div className=" shadow leading-6 font-semibold text-slate-700">
    <h1 className='text-center font-bold '>
      EMPLOYEE MANAGEMENT
    </h1>
    <ul className='flex justify-end space-x-8 font-bold'>
      <li><Link to="/" className='px-2 hover:text-sky-500 '>Home</Link></li>
      <li><Link to="/employee" className='px-2 hover:text-sky-500 '>Local Employee</Link></li>
      <li><Link to="/contactus" className='px-2 hover:text-sky-500 '>Contact us</Link></li>
      <li><Link to="/aboutus" className='px-2 hover:text-sky-500 '>About us</Link></li>
    </ul>
    </div>
  </div>
);
export default Header;