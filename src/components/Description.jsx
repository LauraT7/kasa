import React, { useState } from "react";
import "./Description.css";

// Définition du composant Description
// Ce composant affiche un titre et un contenu masquable avec un bouton pour afficher ou masquer le contenu.
export function Description(props) {
  // État pour gérer la visibilité du contenu
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Fonction pour basculer la visibilité du contenu
  const toggleContentVisibility = () => {
    setIsContentVisible(prevState => !prevState); // Amélioration pour garantir une bascule fiable
  };

  // Classe CSS conditionnelle pour le contenu
  const contentClass = `description__content ${isContentVisible ? "visible" : "hidden"}`;
  // Classe CSS conditionnelle pour l'icône chevron
  const chevronClass = `fas ${isContentVisible ? "fa-chevron-up" : "fa-chevron-down"}`;

  // Rendu du composant Description
  return (
    <div className={`description__panel ${!isContentVisible ? 'collapsed' : ''}`}>
      {/* En-tête avec un titre et un bouton pour basculer la visibilité du contenu */}
      <p className="description__header" onClick={toggleContentVisibility}>
        <span>{props.title}</span> {/* Titre */}
        <i className={chevronClass}></i> {/* Icône chevron */}
      </p>
      {/* Contenu masquable */}
      <div className={contentClass}>{props.content}</div> {/* Changé en div pour une meilleure manipulation de l'espace */}
    </div>
  );
}


export default Description;
