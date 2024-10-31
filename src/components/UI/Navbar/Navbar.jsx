import React from "react";
import { ItemNavbar } from "../ItemNavbar/ItemNavbar";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <a href="#">
          <ItemNavbar text="Que lenguaje" />
        </a>

        <a href="#">
          <ItemNavbar text="Que Arquitectura" />
        </a>

        <a href="#">
          <ItemNavbar text="Que Diseño" />
        </a>
      </ul>
    </nav>
  );
};
