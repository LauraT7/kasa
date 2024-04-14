import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Description from '../components/Description'
import bannerAbout from '../assets/images/bannerAbout.png'
import './About.css'

function about() {
  return (
    <div>
    <Navbar />
    <div>
      <img className="banner--about" src={bannerAbout} alt="" />
      {/* Le titre et le contenu sont passés comme propriétés au composant Description */}
      <Description title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
      <Description title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      <Description title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      <Description title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>

    </div>
    <Footer />
    </div>
  )
}

export default about