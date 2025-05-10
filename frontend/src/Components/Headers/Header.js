import React from 'react';
import {MdMenu, MdSearch} from "react-icons/md";
import {MdClose} from "react-icons/md";
import {MdOutlineShoppingCart} from "react-icons/md";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='menu'>
        <MdMenu size={30}/>
      </div>
      <div className='logo'>
        <h1>
          <Link to = "/">BuddyMart</Link>
        </h1>
      </div>
      <div className='searchField'>
          <input type='text' placeholder='Search BuddyMart.in...'/>
          <button><MdSearch size={20}/></button>
      </div>
      <ul>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/login">Login / Register</Link></li>

        <li><MdClose size={30} className='menu'/></li>
      </ul>
      <div className='cart-icon'>
        <span>0</span>
        <Link to="/"><MdOutlineShoppingCart size={30}/></Link>
      </div>
    </header>
  )
}

export default Header