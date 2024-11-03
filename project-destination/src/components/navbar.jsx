import React from 'react';
//import { Link } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='title'>
        Barrio Bolivar
      </div>

      <ul className='menu'>
        <li className='item'>Places</li>
        <li className='item'>History</li>
        <li className='item'>Gallery</li>
        <img src="bell-icon.png" alt="bell icon" class="icon"/>
      </ul>


    </nav>
  );
};

export default Navbar;
