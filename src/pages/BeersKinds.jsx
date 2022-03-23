import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Button from "@mui/material/Button";
import ProductCardsContainer from '../components/ProductCardsContainer';
import { getAllVarieties, getVariety } from '../service/api.js';

import { Swiper, SwiperSlide } from "swiper/react";

const BeersKinds = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const [variety, setVariety] = useState();
  const callVarietyApi = async () => {
    const result = await getAllVarieties();
    setVariety(result);
  }

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
    <>
      <Nav />
      <div className="description-photo">
        <div className="description">
          <h1 className="title">Lorem ipsum dolor</h1>
          <p className="subtitle">Lorem ipsum dolor</p>

          <p className="packs-name">Loerm</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            fuga libero sequi impedit dignissimos possimus dolore tenetur
            reiciendis accusantium quia. Blanditiis quisquam officiis soluta
            deserunt quo odio facilis nostrum odit.
          </p>

          <p className="subtitle-three">Ingredientes:</p>
          <p className="text-body">
            <span>lorem:</span> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
          <p className="text-body">
            <span>lorem:</span> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
          <p className="text-body">
            <span>lorem:</span> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
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
            <span>Precio:</span>
          </p>
          <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
            Consultar
          </Button>
          <p className="precio">
            <span>Precio:</span>
          </p>
          <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
            Consultar
          </Button>
          <p className="precio">
            <span>Precio:</span>
          </p>
          <Button id="button" sx={{ borderRadius: 15, marginTop: 1 }}>
            Consultar
          </Button>
        </div>
        <div className="photo"></div>
      </div>

      <p className="title-2">Mira todos nuestro packs</p>

      {/* { windowWidth > 900 ?
        <Swiper spaceBetween={30} slidesPerView={5} className="mySwiper">
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper> 
        : windowWidth > 550 ?
        <Swiper slidesPerView={2}  className="mySwiper">
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper> :
        <Swiper slidesPerView={1}  className="mySwiper">
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      } */}

      <Footer />
    </>
  );
};

export default BeersKinds;
