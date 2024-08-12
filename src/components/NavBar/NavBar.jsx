import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import img from '../../assets/logo-btn.webp';
import HamburgerMenu from '../Menu/HamburgerMenu';
import '../NavBar/navbar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container-navbar">
      <div className="flex-1">
        <img className='img-logo'  loading="lazy"  src={img} alt="Logo" />
        <a className="btn-ghost">Bocados & Bebidas</a>
      </div>
      <div className="flex-none">
        {isMobile ? (
          <>
            <HamburgerMenu
              className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} 
              icon={<FontAwesomeIcon icon={faBars} />} 
              onClick={toggleMenu}
            />
            {isMenuOpen && (
              <ul className="menu mobile-menu">
                <li><a className='navegation' href='#nosotros'>Nosotros</a></li>
                <li><a className='navegation' href='#menu'>Menu</a></li>
                <li><a className='navegation' href='#eventos'>Eventos</a></li>
                <li><a className='navegation' href='#contacto'>Contacto</a></li>
              </ul>
            )}
          </>
        ) : (
          <ul className="menu">
            <li><a className='navegation' href='#nosotros'>Nosotros</a></li>
            <li><a className='navegation' href='#menu'>Menu</a></li>
            <li><a className='navegation' href='#eventos'>Eventos</a></li>
            <li><a className='navegation' href='#contacto'>Contacto</a></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
