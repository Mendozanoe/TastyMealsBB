import React from 'react'
import logo from "../../assets/logo-btn.webp"
import "../Footer/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faTiktok, faGoogle } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (

        <div className='footer-container' >
            <h2 className='follow'>Siguenos en nuestras redes </h2>
            <div className='container-footer'>
                <img className="logo-footer" loading="lazy" src={logo} alt="logo" />

                <a href="https://www.facebook.com/tastymeals296?mibextid=ZbWKwL" target="_blank" > <FontAwesomeIcon className="icon1" icon={faSquareFacebook} size="3x" /></a>
                <a href="https://www.instagram.com/tasty.296?igsh=MWttMWp1d3lnMW9jMQ==" target="_blank" ><FontAwesomeIcon className="icon1" icon={faInstagram} size="3x" /></a>
                <a href="https://www.tiktok.com/@tastymeals.296?_t=8oP3hq7I1kz&_r=1" target="_blank"><FontAwesomeIcon className="icon1" icon={faTiktok} size="2x" style={{ margin: '0 10px' }} /></a>

            </div>
            <div>
                <span className='copy'> © 2024 NM. All rights reserved.</span>
            </div>



        </div>
    )
}

export default Footer