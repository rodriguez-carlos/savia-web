import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { SwiperSlider } from "../components/SwiperSlider";
import BeerProcess from "../components/BeerProcess";

AOS.init();

const About = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleWidthScreenChange = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidthScreenChange);

    return () => {
      window.addEventListener("resize", handleWidthScreenChange);
    };
  });

  return (
    <div>
      <Nav />
      <div className="main-container">
        <h1 className="title">Conoce nuestra historia</h1>
        <div className="cards-container">
          <div className="grey-one"></div>
          <div className="white-one" data-aos="fade-right">
            <p className="white-element__title">
              Savia es una cervecería artesanal
            </p>
            <p>
              Nosotros elaboramos y vendemos variados estilos y formatos de
              cerveza en la zona de Concón, Región de Valparaiso, Chile.
            </p>
          </div>

          <div className="grey-two" data-aos="fade-left"></div>

          <div className="grey-three" data-aos="fade-right"></div>
          <div className="white-two" data-aos="fade-right">
            <p className="white-element__title-two">
              Somos una empresa independiente
            </p>
            <p>
              Nuestros fundadores Benja, Seba y Nico, son amigos y socios que
              trabajan para ofrecer una cerveza artesanal de calidad.
            </p>
          </div>

          <div className="grey-four" data-aos="fade-right"></div>
          <div className="white-three" data-aos="fade-left">
            <p className="white-element__title">
              Buscamos crear economías circulares
            </p>
            <p>
              Potenciando el mercado local y siendo a su vez, conscientes del
              medio ambiente.
            </p>
          </div>
        </div>
        <p className="title-2">Como elaboramos nuestas cervezas</p>
      </div>
      {windowWidth > 900 ? <SwiperSlider /> : <BeerProcess />}
      <Footer />
    </div>
  );
};

export default About;
