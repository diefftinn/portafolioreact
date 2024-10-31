import React from 'react';
import {ItemNavbar} from'../../UI/ItemNavbar/itemNavbar'

export const NavItems = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
        <ItemNavbar content= 'Home'/>
        <ItemNavbar content='About Me' />
        <ItemNavbar content='Contact Me' />
        <ItemNavbar content= 'Oteher Routes'/>
     </ul>
    </nav>
  )
};

