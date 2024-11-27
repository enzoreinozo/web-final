// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/crud">CRUD</Link>
    </nav>
  );
};

export default Navbar;
