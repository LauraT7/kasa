import React from "react"
import "./ApartmentHeader.css"

export function ApartmentHeader({ flat }) {
  const { name } = flat.host
  const [firstName, lastName] = name.split(" ")

  return (
    <div className="apart__header">
      <div className="apart__title">
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <div className="apart__tags">
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apart__owner">
        <div className="apart__owner__details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apart__owner__badge">
            <img src={flat.host.picture} alt="" />
          </div>
        </div>
        <div className="apart__owner__stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}