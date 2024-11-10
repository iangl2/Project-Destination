import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='title'>
        Barrio Bolivar
      </div>

      <ul className='menu'>
        
        <Link to='/places'><li className='item'>Places</li></Link>
        <Link to='/history'><li className='item'>History</li></Link>
        <Link to='/gallery'><li className='item'>Gallery</li></Link>


        
        <img src="bell-icon.png" alt="bell icon" class="icon"/>
      </ul>


    </nav>
  );
};

export default Navbar;
