import React from 'react'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'

export const NavItems = () => {
return(
<nav className="navbar">
<ul className="navbar-list">
<ItemNavbar content= 'Quien soy'/>
<ItemNavbar content='Acerca de Mi' />
 <ItemNavbar content='Tiempo libre' />
 <ItemNavbar content= 'Estudios'/>
</ul>
</nav>

)
}