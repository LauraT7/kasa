import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import { ImageBanner } from "../assets/components/ImageBanner"
import { useApartment } from "../hooks/useApartment"
import { ApartmentHeader } from "../assets/components/ApartmentHeader"
import Description from "../assets/components/Description"

function Flat() {
  const navigate = useNavigate()
  const { flatId } = useParams() // Extrait l'ID de l'appartement de l'URL
  const flat = useApartment(flatId) // Passe flatId comme argument ici

  // Si aucun appartement n'est trouvé, redirige vers la page d'erreur
  React.useEffect(() => {
    if (flat === undefined) { 
      navigate("/error") // Redirige vers la page d'erreur
    }
  }, [flat, navigate])

  // Si données de l'appart ne sont pas encore chargées, affiche un message de chargement
  if (flat == null) return <div>Loading...</div>

  return (
    <div>
      <Navbar />
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <Description title="Description" content={flat.description} />
      <Description title="Equipements" content={flat.equipments.map((eq, i) => <li key={i}>{eq}</li>)} />
      <Footer />
    </div>
  )
}

export default Flat
