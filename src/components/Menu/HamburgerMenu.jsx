import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Menu/hamburger.css"; // Asegúrate de que este archivo exista

const HamburgerMenu = ({ className, icon, onClick }) => {

  return (
    <div className={`hamburger-menu ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </div>
  );
};

HamburgerMenu.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HamburgerMenu;
