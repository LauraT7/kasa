import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../images/logokasa.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='logo kasa' />
      </div>
      <div className='navbar__links'>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>        
        

    </nav>
  )
}

export default Navbar