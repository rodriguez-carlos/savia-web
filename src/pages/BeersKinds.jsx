import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import ProductCard from '../components/ProductCard';
import ScrollContainer from "react-indiana-drag-scroll";
import { getAllVarieties, getVariety } from '../service/api.js';

import { useParams } from "react-router-dom";
import ShowcaseCarousel from "../components/ShowcaseCarousel";

const BeersKinds = () => {
  const { paramId } = useParams();
  const [variety, setVariety] = useState();
  const [varieties, setVarieties] = useState();
  var formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
  
  useEffect(() => {
    const callVarietyApi = async () => {
      const result = await getVariety(paramId);
      setVariety(result.data);
    }
    const callVarietiesApi = async () => {
      const result = await getAllVarieties();
      const neededResult = result.data.filter(variety => variety.id != paramId);
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

          <p className="packs-name">Pack Botella de Vidrio</p>
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
            lorem: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className="text-body-porcent">
            lorem: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className="text-body-porcent">
            lorem: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>

          <p className="precio">
            <span><strong>Precio: </strong>
              {variety ? formatter.format(variety.attributes.precio_x6) : ''} CLP
            </span>
          </p>
          <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
            comprar pack x6
          </Button>
          <p className="precio">
            <span><strong>Precio: </strong>
              {variety ? formatter.format(variety.attributes.precio_x12) : ''} CLP
            </span>
          </p>
          <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
            comprar pack x12
          </Button>
          <p className="precio">
            <span><strong>Precio: </strong>
              {variety ? formatter.format(variety.attributes.precio_x24) : ''} CLP
            </span>
          </p>
          <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
            comprar pack x24
          </Button>
        </div>
        <div className="photo">
          {variety ? 
            <ShowcaseCarousel>
              {variety.attributes.imagenes_carrusel.data.map((imagen) => {
                return <img key={imagen.id} src={`http://localhost:1337${imagen.attributes.url}`} 
                alt={imagen.attributes.alternativeText}/>
              })}
            </ ShowcaseCarousel>
          : ''}
        </div>
      </div>

      <p className="title-2">Mira todos nuestros packs</p>
      <ScrollContainer className="product-cards-container-grid" >
        {varieties ?
          varieties.map((variety) => {
              return (
                  <div className="product-cards-container-card" key={variety.id}>
                      <ProductCard product={variety.attributes} id={variety.id}/> 
                  </div>
              )
          })
        : ''}
      </ScrollContainer>
      <Footer />
    </>
  );
};

export default BeersKinds;
