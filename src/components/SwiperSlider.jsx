import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export const SwiperSlider = () => {
  return (
    <>
      <Swiper slidesPerView={2} spaceBetween={30} className= "mySwiper">
        <SwiperSlide className="slide-item one">
          <div className="slide-item-card">
            <div className="slide-item-content">
              <p className="slide-item-title">
                Molienda:
              </p>
              <p className="slide-item-text">
                Se muele el grano de la malta exponiendo las enzimas y otros
                componentes para prepararlos para el paso siguiente.
              </p>
            </div>
            <div className="slide-item-img one"></div>
          </div>

          <div className="slide-item-decorator">
            <div className="slide-item-chip">
              1° PASO
            </div>
            <div className="slide-item-chip-separator"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item">
          <div className="slide-item-card">
            <div className="slide-item-content">
              <p className="slide-item-title">
                Cocción:
              </p>
              <p className="slide-item-text">
                Para esterilizar se hierve el "wort" por 60 a 120 minutos. Además
                se le agregan lúpulos en distintos momentos de la duración del
                hervor para obtener resultados variados de amargor, sabor y aroma
                final en la cerveza.
              </p>
            </div>
            <div className="slide-item-img two"></div>
          </div>

          <div className="slide-item-decorator">
            <div className="slide-item-chip">
              2° PASO
            </div>
            <div className="slide-item-chip-separator"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item">
          <div className="slide-item-card">
            <div className="slide-item-content">
              <p className="slide-item-title">
                Maceración:
              </p>
              <p className="slide-item-text">
                Se mezcla la malta molida con agua a una temperatura entre 65° y
                75° para hidratar los granos, activar las enzimas y convertir el
                grano en azúcares fermentables. El líquido resultante de este
                proceso se le denomina "wort".
              </p>
            </div>
            <div className="slide-item-img three"></div>
          </div>

          <div className="slide-item-decorator">
            <div className="slide-item-chip">
              3° PASO
            </div>
            <div className="slide-item-chip-separator"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item">
          <div className="slide-item-card">
            <div className="slide-item-content">
              <p className="slide-item-title">
                Fermentación:
              </p>
              <p className="slide-item-text">
                Se le agrega levadura al líquido enfriado del proceso anterior.
                Controlando y manteniendo la temperatura en un rango de trabajo
                apto para la levadura, esta se encarga de transformar los azúcares
                en alcohol.
              </p>
            </div>
            <div className="slide-item-img four"></div>
          </div>

          <div className="slide-item-decorator">
            <div className="slide-item-chip">
              4° PASO
            </div>
            <div className="slide-item-chip-separator"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item">
          <div className="slide-item-card">
            <div className="slide-item-content">
              <p className="slide-item-title">
                Condicionamiento:
              </p>
              <p className="slide-item-text">
                Se deja madurar la cerveza, disminuyendo o eliminando subproductos
                indeseados
              </p>
            </div>
            <div className="slide-item-img five"></div>
          </div>

          <div className="slide-item-decorator">
            <div className="slide-item-chip">
              5° PASO
            </div>
            <div className="slide-item-chip-separator"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

