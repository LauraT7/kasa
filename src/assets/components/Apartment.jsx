import React from 'react'
import './Apartment.css'
import {Link} from "react-router-dom"

function Apartment() {
  return (
    <div className='apartment'>
      <Link to="/flat"><h3>Titre de la location</h3></Link>
    </div>
  )
}

export default Apartment