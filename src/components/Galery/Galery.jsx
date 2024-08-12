// Galeria.js

import React from 'react';
import friend from "../../assets/2amigas.webp";
import coffe from "../../assets/4cafe.webp";
import grandma from "../../assets/abuela.webp";
import friends from "../../assets/amigas.webp";
import capuccino from "../../assets/capuchino.webp";
import food from "../../assets/comida.webp";
import family from "../../assets/familia.webp";
import Image from './Image';
import "../Galery/galery.css";

const Galery = () => {
  const images = [
   
    { url: friend, size: 'large' },
    { url: grandma, size: 'small' },
    { url: friends, size: 'small' },
    { url: family, size: 'small' },
    { url: food, size: 'medium' },
    { url: capuccino, size: 'small' },
    { url: coffe, size: 'small' },
   
  ];

  return (
  <div className='parent-container '> 
      <div className='container-galery'>
      {images.map((image, index) => (
        <Image key={index} loading="lazy" url={image.url} size={image.size} />
      ))}
    </div>
  </div>
  );
};

export default Galery;
