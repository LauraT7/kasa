import React, { useEffect, useState } from "react"
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import { useLocation } from "react-router-dom"
import { ImageBanner } from "../assets/components/ImageBanner"
import { useApartment } from "../hooks/useApartment"
import { ApartmentHeader } from "../assets/components/ApartmentHeader"
import Description from "../assets/components/Description"
 
function Flat() {
  const location = useLocation()
  console.log("location", location)
  const flat = useApartment()
  if (flat == null) return <div>Loading...</div>
  // useEffect(fetchApartmentData, [])
  // function fetchApartmentData() {
  //   fetch("./apartment.json")

  // }

  return (
    <div>
      {/* selected flat : {JSON.stringify(flat)} */}
    <Navbar />
    <ImageBanner pictures={flat.pictures} />

    <ApartmentHeader flat={flat} />
    <Description  title="Description" content={flat.description} />
    <Description  title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}/>
    <Footer />
    </div>
  )
}

export default Flat