import React, { useState, useEffect } from 'react';
import "../../components/SliderTxt/sliderText.css";

const texts = [
  "Festejá Cumpleaños",
  "Conmemorá Aniversarios",
  "Reuniones Empresariales",
  "Reuniones Casuales",
  "Reserva tu Evento hoy",
  "Descuentos % Especiales",
 
];

const SliderText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {texts.map((text, index) => (
          <div className="slide-text" key={index}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderText;

