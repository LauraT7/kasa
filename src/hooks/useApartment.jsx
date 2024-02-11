import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();
  
    fetch("/apartment.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((flats) => {
        // console.log("Résultats récupérés:", flats);
        if (isMounted) {
          const flat = flats.find((flat) => flat.id === location.state.apartmentId)
          // console.log("flat de cet élément est :", flat)
          setFlat(flat)
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  
    return () => {
      abortController.abort();
      isMounted = false;
    };
  }, []);
  
  return flat;
}