import React from "react";
import '../App.css';
import freeCodeCampLogo from '../img/FreeCodeCamp_logo.svg.png';

const Logo = () => (
    <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo} 
        alt="Logo freeCodeCamp" />
      </div>
);

export default Logo;