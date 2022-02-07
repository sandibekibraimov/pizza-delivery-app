import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='navLeft'>
        <div className='navLogo'>
          <FaPizzaSlice className='logo' />
          <span>Pizza Universe.</span>
        </div>
      </div>

      <div className='navRight'>
        <ul>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
