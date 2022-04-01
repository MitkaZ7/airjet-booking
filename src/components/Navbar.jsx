import React from 'react'


const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className="navbar__menu">
        <li className="navbar__menu-item"><a href="#" className="navbar__menu-link">Home</a></li>
        <li className="navbar__menu-item"><a href="#" className="navbar__menu-link">Booking</a></li>
        <li className="navbar__menu-item"><a href="#" className="navbar__menu-link">Private Jet</a></li>
        <li className="navbar__menu-item"><a href="#" className="navbar__menu-link">Specifications</a></li>
        <li className="navbar__menu-item"><a href="#" className="navbar__menu-link">Luxury Charters</a></li>
        <li className="navbar__menu-item"><a href="#" className="navbar__menu-link">Membership</a></li>
      </ul>
      <div className="navbar__buttons">
        <button className="navbar__button-register">Register</button>
        <button className="navbar__button-sigin">Sign In</button>
      </div>
    </div>
  )
}
export default Navbar;
