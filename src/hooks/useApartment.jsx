import { useEffect, useState } from "react"


// Modification de la signature de useApartment pour accepter un paramètre flatId
export function useApartment(flatId) {
  const [flat, setFlat] = useState(null)

  useEffect(() => {
    let isMounted = true
    const abortController = new AbortController()

    fetch("/apartment.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((flats) => {
        if (isMounted) {
          // Utiliser le paramètre flatId pour trouver l'appartement correspondant
          const flat = flats.find((flat) => flat.id === flatId)
          setFlat(flat)
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error(error)
        }
      });

    return () => {
      abortController.abort()
      isMounted = false
    };
  // Ajouter flatId comme dépendance pour réexécuter l'effet si flatId change
  }, [flatId]);

  return flat;
}
