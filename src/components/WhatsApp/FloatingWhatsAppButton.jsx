import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './floatingWhatsAppButton.css';

const FloatingWhatsAppButton = () => {
  const whatsappLink = 'https://wa.me/5493875603301'; // Reemplaza con tu número de WhatsApp

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="floating-whatsapp-button">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default FloatingWhatsAppButton;
