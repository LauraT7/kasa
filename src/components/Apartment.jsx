import React from 'react'
import './Apartment.css'
import { Link } from "react-router-dom"

function Apartment(props) {
  return (
    <div className='apartment'>
      <img src={props.imageUrl} alt={props.title}/>
      {/* Modification ici : ajouter l'ID de l'appartement dans le chemin */}
      <Link to={`/flat/${props.id}`}>
        <h3>{props.title}</h3>
      </Link>
    </div>
  )
}

export default Apartment
