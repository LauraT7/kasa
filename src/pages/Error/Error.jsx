import { Link } from 'react-router-dom'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Error.css'

// Définition du composant Error, qui représente la page d'erreur 404
function Error() {
  return (
    <div>
      <Navbar />
      <div className="error-page">
        <h1>404</h1>
        <h2>Oops! La page que vous demandez n'existe pas</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}


export default Error