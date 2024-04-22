import React, { useState, useEffect } from 'react'
import './ApartmentGrid.css'
import Apartment from '../Apartment/Apartment.jsx'

function ApartmentGrid() {
  const [apartments, setApartments] = useState([])

  // Effet secondaire déclenché lorsque le composant monte
  useEffect(() => {
    // Appel de la fonction fetchApartments pour récupérer les données des appartements
    fetchApartments()
  }, [])

  // Fonction pour récupérer les données des appartements à partir d'un fichier JSON
  function fetchApartments() {
    // Effectuer une requête GET pour récupérer les données des appartements depuis un fichier JSON
    fetch("./apartment.json")
      .then((response) => {
        // Vérifier si la réponse est OK
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        // Retourner le texte brut de la réponse
        return response.text()
      })
      .then((text) => {
        // Essayer de parser le texte en JSON
        try {
          const data = JSON.parse(text)
          // Mettre à jour l'état 'apartments' avec les données des appartements récupérées
          setApartments(data)
        } catch (error) {
          // Gérer les erreurs de parsing JSON
          console.error("Error parsing JSON:", error)
          console.error("Received text:", text) // Afficher le texte brut qui a causé l'erreur
        }
      })
      .catch((error) => {
        // Gérer les autres erreurs
        console.error("Une erreur s'est produite :", error)
      });
  }

  // Rendu de la grille d'appartements
  return (
    <div className='apartmentgrid'>
      {/* Mapper chaque appartement pour les afficher à l'écran */}
      {apartments.map((apartment) => (
        // Rendu du composant Apartment pour chaque appartement
        <Apartment
          title={apartment.title} // Titre de l'appartement
          imageUrl={apartment.cover} // URL de l'image de couverture de l'appartement
          id={apartment.id} // ID de l'appartement
          key={apartment.id} // Clé unique pour chaque élément de la liste
        />
      ))}
    </div>
  );
}


export default ApartmentGrid
