import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ApartmentGrid from './components/ApartmentGrid/ApartmentGrid'
import Footer from './components/Footer/Footer'
import './App.css'
import bannerImg from './assets/images/banner.png';

function App() {
  return (
    // Conteneur principal avec plusieurs composants enfants
    <div>
      {/* Composant de la barre de navigation */}
      <Navbar />
      {/* Composant de la bannière */}
      <Banner title="Chez vous, partout et ailleurs" backgroundImg={bannerImg} />
      {/* Composant de la grille d'appartements */}
      <ApartmentGrid />
      {/* Composant du pied de page */}
      <Footer />
    </div>
  )
}

export default App