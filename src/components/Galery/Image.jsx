// Image.js

import React from 'react';
import './image.css'; // Archivo CSS para estilos

const Image = ({ url, size }) => {
  return (
    <div className={`image ${size}`}>
      <img src={url} alt="Imagen" />
    </div>
  );
};

export default Image;
