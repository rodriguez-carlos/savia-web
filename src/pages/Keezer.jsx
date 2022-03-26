import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import ProductCardsContainer from '../components/ProductCardsContainer';
import { Typography } from "@mui/material";
import { getKeezer, getAllVarieties } from '../service/api.js';

import { useParams } from "react-router-dom";
import ShowcaseCarousel from "../components/ShowcaseCarousel";

const Keezer = () => {
  const { paramId } = useParams();
  const [variety, setVariety] = useState();
  const [varieties, setVarieties] = useState();
  const messageGenerator = (name) => {
    return `Hola! Me interesa el ${name}`
  }

  const staticInfo = {
    title: 'Mira otros productos relacionados',
  }
  
  useEffect(() => {
    const callKeezersApi = async () => {
      const result = await getKeezer(paramId);
      setVariety(result.data);
    }
    const callVarietiesApi = async () => {
      const result = await getAllVarieties();
      const neededResult = result.data.filter(variety => variety.id !== parseInt(paramId));
      console.log(neededResult);
      setVarieties(neededResult);
    }
    callKeezersApi();
    callVarietiesApi();
  }, [paramId]);


  return (
    <>
      <Nav />
      <div className="description-photo">
        <div className="description">
          <h1 className="title">{variety ? variety.attributes.nombre_servicio : ''}</h1>
          <p className="subtitle">Freezer adaptado para dispensar cerveza fría</p>

          <p className="text">
            {variety ? variety.attributes.descripcion_2 : ''}
          </p>
          <p className="text-body">
            <strong>{variety ? variety.attributes.descripcion_3 : ''}</strong>
          </p>
          <Typography className="text-body">
            <strong>Recordá que nuestras variedades son:</strong><br/>
            -Triple A (American Amber Ale)<br/>
            -Belgian Pale Ale<br/>
            -Neipa (Hazy IPA)<br/>
            -Golden Ale<br/>
          </Typography>
          <Typography className="subtitle">
            Consúltanos para más información!
          </Typography>
          <a href={variety
            ? `https://wa.me/56952321116?text=${messageGenerator(variety.attributes.nombre_servicio)}`
            : ''}
            style={{textDecoration: "none"}} target="_blank" rel="noreferrer"
          >
            <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
              consultar
            </Button>
          </a>
        </div>
        <div className="photo">
          {variety ? 
            <ShowcaseCarousel>
              {variety.attributes.imagenes_carrusel.data.map((imagen) => {
                return <img key={imagen.id} src={imagen.attributes.url}
                alt={imagen.attributes.alternativeText}/>
              })}
            </ ShowcaseCarousel>
          : ''}
        </div>
      </div>

      <ProductCardsContainer staticInfo={staticInfo} varieties={varieties} />

      <Footer />
    </>
  );
};

export default Keezer;
