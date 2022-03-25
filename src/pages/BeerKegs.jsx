import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import ProductCardsContainer from '../components/ProductCardsContainer';
import { getAllVarieties, getVariety } from '../service/api.js';

import { useParams } from "react-router-dom";
import ShowcaseCarousel from "../components/ShowcaseCarousel";

const BeerKegs = () => {
  const { paramId } = useParams();
  const [variety, setVariety] = useState();
  const [varieties, setVarieties] = useState();
  const messageGenerator = (name) => {
    return `Hola! Me interesa su barril de ${name}`
  }

  const staticInfo = {
    title: 'Mira todas nuestras variedades',
  }
  
  useEffect(() => {
    const callVarietyApi = async () => {
      const result = await getVariety(paramId);
      setVariety(result.data);
    }
    const callVarietiesApi = async () => {
      const result = await getAllVarieties();
      const neededResult = result.data.filter(variety => variety.id !== parseInt(paramId));
      console.log(neededResult);
      setVarieties(neededResult);
    }
    callVarietyApi();
    callVarietiesApi();
  }, [paramId]);


  return (
    <>
      <Nav />
      <div className="description-photo">
        <div className="description">
          <h1 className="title">{variety ? variety.attributes.nombre_corto : ''}</h1>
          <p className="subtitle">{variety ? variety.attributes.nombre_largo : ''}</p>

          <p className="packs-name">Barril Cornelius</p>
          <p className="text">
            {variety ? variety.attributes.descripcion : ''}
          </p>

          <p className="subtitle-three">Ingredientes:</p>
          <p className="text-body">
            <span>Malta:</span> {variety ? variety.attributes.contenido_malta : ''}
          </p>
          <p className="text-body">
            <span>Lúpulos:</span> {variety ? variety.attributes.contenido_lupulos : ''}
          </p>
          <p className="text-body">
            <span>Levadura:</span> {variety ? variety.attributes.contenido_levadura : ''}
          </p>
          <p className="text-body">
            <span>Otros:</span> {variety ? variety.attributes.contenido_otros : ''}
          </p>

          <hr />

          <p className="text-body-porcent">
            <span>{variety ? variety.attributes.contenido_abv : ''}</span>
            &nbsp;ABV (graduación Alcohólica)
          </p>
          <p className="text-body-porcent">
            <span>{variety ? variety.attributes.contenido_ibu : ''}</span>
            &nbsp;IBU (amargor)
          </p>
          <p className="text-body-porcent">
            <span>{variety ? variety.attributes.contenido_por_unidad : ''}</span>
            &nbsp;Contenido por unidad
          </p>
          <a href={variety ? `https://wa.me/56952321116?text=${messageGenerator(variety.attributes.nombre_corto)}`: ''}
          style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
            <Button id="button" sx={{ borderRadius: 15, marginTop: 3 }}>
              consultar
            </Button>
          </a>
        </div>
        <div className="photo">
          {variety ? 
            <ShowcaseCarousel>
              {variety.attributes.imagenes_barril_carrusel.data.map((imagen) => {
                return <img key={imagen.id} src={imagen.attributes.url}
                alt={imagen.attributes.alternativeText}/>
              })}
            </ ShowcaseCarousel>
          : ''}
        </div>
      </div>

      <ProductCardsContainer staticInfo={staticInfo} varieties={varieties ? varieties.filter(variety => variety.attributes.categoria === "tipoCerveza") : ''} barrel />

      <Footer />
    </>
  );
};

export default BeerKegs;
