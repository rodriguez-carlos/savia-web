import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export const SwiperSlider = () => {
  return (
    <>
      <Swiper slidesPerView={2} spaceBetween={30} className="mySwiper">
        <SwiperSlide className="slide-item one">
          <div className="silde-item-description">
            <p className="slide-description-tittle">
              Molienda:{" "}
            </p>
            <p>
              Se muele el grano de la malta exponiendo las enzimas y otros
              componentes para prepararlos para el paso siguiente.
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="silde-item-description">
            <p>Lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              eius optio fugit dolor ratione quaerat porro accusantium soluta
              possimus dolores tempore, ducimus magni veritatis nam ad
              voluptatem corporis sapiente perspiciatis?
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="silde-item-description">
            <p>Lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              eius optio fugit dolor ratione quaerat porro accusantium soluta
              possimus dolores tempore, ducimus magni veritatis nam ad
              voluptatem corporis sapiente perspiciatis?
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="silde-item-description">
            <p className="slide-description-tittle">Lorem</p>
            <p className="slide-description-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              eius optio fugit dolor ratione quaerat porro accusantium soluta
              possimus dolores tempore, ducimus magni veritatis nam ad
              voluptatem corporis sapiente perspiciatis?
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="silde-item-description">
            <p className="silde-item-description">Lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              eius optio fugit dolor ratione quaerat porro accusantium soluta
              possimus dolores tempore, ducimus magni veritatis nam ad
              voluptatem corporis sapiente perspiciatis?
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

/* 
style="
    color: #d15248;
    font-size: 30px;
    font-weight: 700;
    "
*/
