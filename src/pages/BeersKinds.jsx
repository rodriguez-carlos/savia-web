import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Button from "@mui/material/Button";

import { Swiper, SwiperSlide } from "swiper/react";


const BeersKinds = () => {
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

      <Swiper
        slidesPerView={5}
        className="mySwiper"
        breakpoints={{
          900: {
            width: 900,
            slidesPerView: 2,
          },

          550: {
            width: 550,
            slidesPerView: 1,
          },
        }}
      >
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
      <Footer />
    </>
  );
};

export default BeersKinds;
