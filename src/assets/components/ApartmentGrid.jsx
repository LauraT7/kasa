import React, { useState, useEffect } from 'react';

import './ApartmentGrid.css'
import Apartment from './Apartment.jsx'




function ApartmentGrid() {
  const [apartments, setApartments] = useState([])

  useEffect(fetchApartments, [])
  // se lance qu'une seule fois au moment du chargement

  function fetchApartments () {
  fetch("././././public/apartment.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch((error) => console.error("Une erreur s'est produite : " + error))}
  return (
    <div className='apartmentgrid'>
    {apartments.map((apartment) => (
      <Apartment title={apartment.title} imageUrl={apartment.cover}/>
    ))}
    
    </div>
  )
}

export default ApartmentGrid