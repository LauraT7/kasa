import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ApartmentGrid from './components/ApartmentGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    // Conteneur principal avec plusieurs composants enfants
    <div>
      {/* Composant de la barre de navigation */}
      <Navbar />
      {/* Composant de la bannière */}
      <Banner />
      {/* Composant de la grille d'appartements */}
      <ApartmentGrid />
      {/* Composant du pied de page */}
      <Footer />
    </div>
  )
}

export default App