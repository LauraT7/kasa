import React from 'react'
import './Apartment.css'
import { Link } from "react-router-dom"

function Apartment(props) {
  return (
    <Link to={`/flat/${props.id}`} className='apartment'>
      <img src={props.imageUrl} alt={props.title}/>
      <div className="content-overlay">
        <div className="content">
          <h3>{props.title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Apartment
