import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";

const Shimpments = () => {
  return (
    <>
      <Nav />
      <div className="shipments-container">
        <h1 className="title-one">Hacemos envíos gratis en:</h1>

        <div className="map-description-container">
          <div className="description-container" id="description-container">
            <p className="subtitle">Región:</p>
            <ul className="list-items">
              <li>Valparaíso</li>
            </ul>

            <p className="subtitle">Comunas:</p>
            <ul className="list-items">
              <li>Concón</li>
              <li>Reñaca</li>
              <li>Viña del Mar*</li>
            </ul>

            <p className="horario">
              *(Si tu compra es de $16.600 o más)
            </p>
            <p className="horario">Días: Martes y Viernes.</p>
            <p className="horario">Horario: Entre las 14 y 18 hs.</p>
          </div>

          <div className="map-container" id="map"></div>
        </div>
        <Link style={{textDecoration: "none"}} to="https://wa.me/56952321116?text=Hola, me gustaría preguntar por sus zonas de reparto">
          <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
            Consultar
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Shimpments;
