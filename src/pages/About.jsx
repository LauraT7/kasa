import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import Description from '../assets/components/Description'
import bannerAbout from '../images/bannerAbout.png'
import './About.css'

function about() {
  return (
    <div>
    <Navbar />
    <div>
      <img className="banner--about" src={bannerAbout} alt="" />
      <Description title="Fiabilité" content="Ceci est mon content sur la fiabilité du site KASA"/>
      <Description title="Respect" content=""/>
      <Description title="Service" content=""/>
      <Description title="Sécurité" content=""/>

    </div>
    <Footer />
    </div>
  )
}

export default about