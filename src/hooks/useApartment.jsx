import { useEffect, useState } from "react"

/**
 * Un Hook personnalisé pour récupérer les données d'un appartement spécifique par son identifiant.
 * 
 * @param {number} flatId - L'identifiantà récupérer.
 * @returns {Object|null} - Les données de l'appartement ou null si non trouvées ou en attente de chargement.
 */
export function useApartment(flatId) {
  // State pour stocker les données de l'appartement; initialisé à null
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    // Flag pour vérifier si le composant est toujours monté et éviter des updates
    let isMounted = true;
    // Contrôleur pour pouvoir annuler la requête fetch si le composant est démonté
    const abortController = new AbortController();

    // Déclenche un fetch pour obtenir les données des appartements
    fetch("/apartment.json", { signal: abortController.signal })
      .then((res) => res.json()) // Convertit la réponse en JSON
      .then((flats) => {
        if (isMounted) { // Vérifie si le composant n'a pas été démonté
          // Trouve l'appartement correspondant au `flatId` fourni
          const flat = flats.find((flat) => flat.id === flatId);
          setFlat(flat); // Met à jour le state avec les données de l'appartement trouvé
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') { // Si l'erreur n'est pas due à l'annulation de la fetch
          console.error(error); // Log l'erreur dans la console
        }
      });

    return () => {
      abortController.abort(); // Annule la requête fetch lors du nettoyage
      isMounted = false; // Indique que le composant a été démonté
    };
  // Ajoute `flatId` dans le tableau de dépendances pour réexécuter l'effet si `flatId` change
  }, [flatId]);

  return flat; // Renvoie les données de l'appartement
}
