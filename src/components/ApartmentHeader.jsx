import React from "react"
import "./ApartmentHeader.css"

// Définition du composant ApartmentHeader
// Ce composant affiche l'en-tête d'un appartement, y compris le titre, l'emplacement, les tags, les détails du propriétaire et l'évaluation.
export function ApartmentHeader({ flat }) {
  // Destructuration de l'objet 'flat' pour obtenir le nom de l'hôte
  const { name } = flat.host;
  // Séparation du nom de l'hôte en prénom et nom de famille
  const [firstName, lastName] = name.split(" ");

  // Rendu de l'en-tête de l'appartement
  return (
    <div className="apart__header">
      {/* Section du titre et des tags de l'appartement */}
      <div className="apart__title">
        <h1>{flat.title}</h1> {/* Affichage du titre de l'appartement */}
        <h2>{flat.location}</h2> {/* Affichage de l'emplacement de l'appartement */}
        {/* Liste des tags de l'appartement, et afffichage de chaque tag de l'appartement */}
        <div className="apart__tags">
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span> 
          ))}
        </div>
      </div>
      {/* Section du propriétaire de l'appartement */}
      <div className="apart__owner">
        {/* Détails du propriétaire */}
        <div className="apart__owner__details">
          {/* Nom complet du propriétaire */}
          <h3>
            <span>{firstName}</span> {/* Affichage du prénom du propriétaire */}
            <span>{lastName}</span> {/* Affichage du nom de famille du propriétaire */}
          </h3>
          {/* Badge du propriétaire */}
          <div className="apart__owner__badge">
            <img src={flat.host.picture} alt="" /> {/* Affichage de l'image du propriétaire */}
          </div>
        </div>
        {/* Évaluation du propriétaire */}
        <div className="apart__owner__stars">
          {/* Affichage des étoiles en fonction de l'évaluation du propriétaire */}
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>
              ★ {/* Étoile pleine ou vide en fonction de l'évaluation */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


