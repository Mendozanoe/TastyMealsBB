// Galeria.js

import React from 'react';
import friend from "../../assets/2amigas.jpg";
import coffe from "../../assets/4cafe.jpg";
import grandma from "../../assets/abuela.jpg";
import friends from "../../assets/amigas.jpg";
import capuccino from "../../assets/capuchino.jpg";
import food from "../../assets/comida.jpg";
import family from "../../assets/familia.jpg";
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
        <Image key={index} url={image.url} size={image.size} />
      ))}
    </div>
  </div>
  );
};

export default Galery;
