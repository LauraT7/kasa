import React, { useState } from "react";
import "./Description.css";

export function Description(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(prevState => !prevState); // Amélioration pour garantir une bascule fiable
  };

  const contentClass = `description__content ${isContentVisible ? "visible" : "hidden"}`;
  const chevronClass = `fas ${isContentVisible ? "fa-chevron-up" : "fa-chevron-down"}`;

  return (
    <div className={`description__panel ${!isContentVisible ? 'collapsed' : ''}`}>
      <p className="description__header" onClick={toggleContentVisibility}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <div className={contentClass}>{props.content}</div> {/* Changé en div pour une meilleure manipulation de l'espace */}
    </div>
  );
}

export default Description;
