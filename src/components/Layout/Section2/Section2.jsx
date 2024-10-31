import React from "react";
import { ImgComponent } from "../../UI/ImgComponent/ImgComponent";
import logojs from'../../../assets/images/logojs.png'
import '../Section2/section2.css'


export const Section2 =  () =>{
    return(
        <div className="container-section2">
       <ImgComponent src= {logojs} alt={logojs}/>
    <p>
     Uno de los esenarios como la programacion permite conecer varias facetas 
     
    </p>
    <button>generar</button>
</div>


    )
}