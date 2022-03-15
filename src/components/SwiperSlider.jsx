import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export const SwiperSlider = () => {
  return (
    <>
      <Swiper slidesPerView={2} spaceBetween={30} className="mySwiper">
        <SwiperSlide className="slide-item one">
          <div className="silde-item-description">
            <p
              style={{
                color: "#d15248",
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: "4rem",
              }}
            >
              Molienda:
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 400,
                lineHeight: "2.5rem",
              }}
            >
              Se muele el grano de la malta exponiendo las enzimas y otros
              componentes para prepararlos para el paso siguiente.
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="silde-item-description">
            <p
              style={{
                color: "#d15248",
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: "4rem",
              }}
            >
              Cocción:
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 400,
                lineHeight: "2.5rem",
              }}
            >
              Para esterilizar se hierve el “wort” por 60 a 120 minutos. Además
              se le agregan lúpulos en distintos momentos de la duración del
              hervor para obtener resultados variados de amargor, sabor y aroma
              final en la cerveza.
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="silde-item-description">
            <p
              style={{
                color: "#d15248",
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: "4rem",
              }}
            >
              Maceración:
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 400,
                lineHeight: "2.5rem",
              }}
            >
              Se mezcla la malta molida con agua a una temperatura entre 65° y
              75° para hidratar los granos, activar las enzimas y convertir el
              grano en azúcares fermentables. El líquido resultante de este
              proceso se le denomina “wort”.
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="silde-item-description">
            <p
              style={{
                color: "#d15248",
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: "4rem",
              }}
            >
              Fermentación:
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 400,
                lineHeight: "2.5rem",
              }}
            >
              Se le agrega levadura al líquido enfriado del proceso anterior.
              Controlando y manteniendo la temperatura en un rango de trabajo
              apto para la levadura, esta se encarga de transformar los azúcares
              en alcohol.
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="silde-item-description">
            <p
              style={{
                color: "#d15248",
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: "4rem"
              }}
            >
              Condicionamiento:
            </p>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: 400,
                lineHeight: "2.5rem"
              }}
            >
              Se deja madurar la cerveza, disminuyendo o eliminando subproductos
              indeseados
            </p>
          </div>
          <div className="slide-item-img"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};