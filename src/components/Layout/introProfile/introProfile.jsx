import React from 'react'
import {ImgComponent}from '../../UI/ImgComponent/ImgComponent'
import logo from '../../../assets/images/logo.png'
import './IntroProfile.css'

export const IntroProfile = () => {
  return (
    <div className="main-container">
    <div className="container-img">
  
   <ImgComponent src={logo} alt= 'logo'/>
    </div>
     <div className="personal-intro">
      <p>Soy una persona que intento comprometerme
        con el aprendizaje continuo, especialmente 
        en el ámbito de la tecnología y el 
         de software. Me disfruto explorando nuevas herramientas
          y lenguajes de programación, con un enfoque  en encontrar soluciones
           prácticas que me permitan ver el impacto directo de mi 
           desarrollo como persona. 
           </p>
     </div>
    </div>
    
  )
}

export default IntroProfile; 