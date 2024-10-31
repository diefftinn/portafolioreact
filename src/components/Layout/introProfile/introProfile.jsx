
import React from 'react'
import {ImgComponent}from '../../UI/ImgComponent/ImgComponent'
import logo from '../../../assets/images/logo.png'
// import logojs from 'https://res.cloudinary.com/dc4g6xhc4/image/upload/v1730328663/cld-sample-2.jpg'
import './IntroProfile.css'


export const IntroProfile = () => {
  return (
    <div className="main-container">
    <div className="container-img">
   <ImgComponent src={logo} alt= 'logo'/>
    </div>
     <div className="personal-intro">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita nam accusantium blanditiis dolor voluptates. Nam suscipit, non doloremque eveniet hic, quis voluptas qui illo, culpa tenetur delectus. Sequi, est!</p>
     </div>
    </div>
    
  )
}

{/*  <ImgComponent src={logojs} alt= 'logo'/> */}