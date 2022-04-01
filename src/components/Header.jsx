import React from 'react';
import logo from '../images/logo-header.svg';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <img src={logo} alt='логотип' className='header__logo'/>
      <Navbar/>
    </div>
  )
}
export default Header;
