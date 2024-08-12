import React from 'react';
import './image.css'; 

const Image = ({ url, size }) => {
  return (
    <div className={`image ${size}`}>
      <img src={url} loading="lazy" alt="Imagen" />
    </div>
  );
};

export default Image;
