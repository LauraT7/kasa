import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/images/logokasa.png'

// Définition du composant Navbar
// Ce composant représente la barre de navigation de l'application.
function Navbar() {
  return (
    // Conteneur principal de la barre de navigation avec la classe 'navbar'
    <nav className='navbar'>
      {/* Logo de l'application */}
      <div className='navbar__logo'>
        <img src={logo} alt='logo kasa' /> {/* Affichage du logo de l'application */}
      </div>
      {/* Liens de navigation */}
      <div className='navbar__links'>
        <Link to="/">Accueil</Link> {/* Lien vers la page d'accueil */}
        <Link to="/about">A Propos</Link> {/* Lien vers la page "A Propos" */}
      </div>
    </nav>
  )
}


export default Navbar