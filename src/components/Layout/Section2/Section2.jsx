import React from "react";
import { ImgComponent } from "../../UI/ImgComponent/ImgComponent";
import logojs from'../../../assets/images/logojs.png'
import '../Section2/section2.css'


export const Section2 =  () =>{
    return(
        <div className="container-section2">
       <ImgComponent src= {logojs} alt={logojs}/>
    <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in quae doloremque quod animi incidunt asperiores illum alias, 
    quas nulla consectetur eius sit impedit reiciendis iste quis eum iusto. Vel.
    </p>
    <button>generar</button>
</div>


    )
}