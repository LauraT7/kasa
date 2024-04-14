import React from 'react'
import './Footer.css'
import logo from '../assets/images/logokasablack.png'

function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer