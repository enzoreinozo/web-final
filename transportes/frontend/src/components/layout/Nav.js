import React from 'react';

const Nav = (props) => {
    return(
        <div>Nav</div>
    );
}


import {Link} from "react-router-dom"

const Nav = (props) => {
  return(
    <nav>
      <div>
        <ul>
          <li><link to="/">Home</link></li>
          <li><link to="/nosotros">Nosotros</link></li>
          <li><link to="/novedades">Novedades</link></li>
          <li><link to="/contacto">Contactos</link></li>
        </ul>
      </div>
    </nav>
  )
}



import '../../styles/components/layout.Nav.css';

import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined }>Home</NavLink></li>
                    <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined }>Nosotros</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined }>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;

