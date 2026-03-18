import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <span className="neon-text font-bold text-xl">Propiedades</span>Colombia
        </div>
        <div className="nav-links">
          <a href="#services">Servicios</a>
          <a href="#process">Proceso</a>
          <a href="#benefits">Beneficios</a>
          <a href="#cases">Casos de Éxito</a>
        </div>
        <button className="btn btn-primary">Vender Ahora</button>
      </div>
    </nav>
  );
};

export default Navbar;
