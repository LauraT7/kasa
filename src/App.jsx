import React from 'react'
import Navbar from './assets/components/Navbar'
import Banner from './assets/components/Banner'
import ApartmentGrid from './assets/components/ApartmentGrid'
import Footer from './assets/components/Footer'
import './App.css'

function App() {
  return (
    <div>
        <Navbar />
        <Banner />
        <ApartmentGrid />
        <Footer />
    </div>
  )
}

export default App