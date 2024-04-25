import React from 'react';
import './Banner.css';

function Banner({ title, backgroundImg }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <div className='banner' style={bannerStyle}>
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;
