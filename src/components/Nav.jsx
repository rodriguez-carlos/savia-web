import React from "react";
import "../styles/nav.css";
import logo from "../static/sabia-10x10-02.png";

const Nav = () => {
  return (
    <div className="nav">
      <img src={logo} className="logo" alt="savia" />

      <div className="menu">
        <ul>
          <li className="list-item">Sobre Nosotros</li>
          <li className="list-item">Productos y Servicios</li>
          <li className="list-item">Envios</li>
          <li className="list-item">Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
