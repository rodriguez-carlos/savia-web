import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
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
              <li>Conón</li>
              <li>Recaña</li>
              <li>Viña de mar*</li>
            </ul>

            <p className="horario">
              *(Sí tu compra es de $16.600 o más)
            </p>
            <p className="horario">Días: Martes y Viernes.</p>
            <p className="horario">Horario: Entre las 14 y 18 hs.</p>
          </div>

          <div className="map-container" id="map"></div>
        </div>

        <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
          Consultar
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Shimpments;
