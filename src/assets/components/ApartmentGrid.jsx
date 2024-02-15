import React, { useState, useEffect } from 'react'
import './ApartmentGrid.css'
import Apartment from './Apartment.jsx'

function ApartmentGrid() {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    fetchApartments()
  }, [])

  function fetchApartments() {
    fetch("./apartment.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.text() // Change ici pour obtenir le texte brut de la réponse
      })
      .then((text) => {
        try {
          const data = JSON.parse(text) // Essayer de parser le texte en JSON
          setApartments(data)
        } catch (error) {
          console.error("Error parsing JSON:", error)
          console.error("Received text:", text) // Affiche le texte brut qui a causé l'erreur
        }
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error)
      });
  }

  return (
    <div className='apartmentgrid'>
      {apartments.map((apartment) => (
        <Apartment
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid
