import React from 'react'
import { ItemNavbar } from '../../UI/ItemNavbar/itemNavbar'

export const NavItems = () => {
  return(
  <nav className="navbar">
   <h1 className="navbar-title">Diego Fernando Tintinago</h1>
      <ul className="navbar-list">
        <ItemNavbar content= 'Quien soy'/>
          < ItemNavbar content='Acerca de Mi' />
          < ItemNavbar content='Tiempo libre' />
        < ItemNavbar content= 'Estudios'/>
         </ul>
   </nav>

  )
};
