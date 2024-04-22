import React, { useState } from "react";
import "./ImageBanner.scss";

// Définition du composant ImageBanner
// Ce composant affiche un carrousel d'images avec des boutons pour passer à l'image précédente ou suivante.
export function ImageBanner(props) {
  // Récupération de la liste des images depuis les props
  const pictures = props.pictures;

  // État pour stocker l'index de l'image actuelle
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour obtenir la classe CSS de l'image en fonction de son index
  const getClassName = (i) => {
    if (i === currentPicture) return "show"; // Affiche l'image actuelle
    return ""; // Cache les autres images
  };

  // Fonction pour passer à l'image suivante
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length); // Incrémente l'index en prenant en compte la boucle
  };

  // Fonction pour passer à l'image précédente
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) { // Vérifie si l'index est inférieur à zéro
      setCurrentPicture(pictures.length - 1); // Passe à la dernière image
      return;
    }
    setCurrentPicture(currentPicture - 1); // Passe à l'image précédente
  };

  // Fonction pour vérifier si des images sont disponibles
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0; // Vérifie si la liste d'images est définie et non vide
  };

  // Fonction pour obtenir le carrousel d'images ou une image par défaut si aucune image n'est disponible
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      // Si aucune image n'est disponible, affiche une image par défaut
      return <img src="https://picsum.photos/800" className="show" alt="" />;
    }
    // Sinon, affiche les images du carrousel
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  // Rendu du composant ImageBanner
  return (
    <div className="image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {/* Affiche les boutons de navigation s'il y a des images disponibles */}
      {arePicturesAvailable() && pictures.length > 1 && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          {/* Affiche le numéro de la diapositive actuelle */}
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
