import React from "react";

const BeerProcess = () => {
  return (
    <>
      <div className="beer-process-container">
        <div className="lateral">
          <p className="pasos">PASOS</p>
          <div className="number">1</div>
          <div className="line-one"></div>
        </div>
        <div className="info-img">
          <div className="image one"></div>
          <p className="info-title">Molienda:</p>
          <p className="info-text">
            Se muele el grano de la malta exponiendo las enzimas y otros
            componentes para prepararlos para el paso siguiente.
          </p>
        </div>
      </div>
      <div className="beer-process-container">
        <div className="lateral">
          <div className="number">2</div>
          <div className="line-two"></div>
        </div>
        <div className="info-img">
          <div className="image two"></div>
          <p className="info-title">Cocción:</p>
          <p className="info-text">
            Para esterilizar se hierve el “wort” por 60 a 120 minutos. Además se
            le agregan lúpulos en distintos momentos de la duración del hervor
            para obtener resultados variados de amargor, sabor y aroma final en
            la cerveza.
          </p>
        </div>
      </div>
      <div className="beer-process-container">
        <div className="lateral">
          <div className="number">3</div>
          <div className="line-three"></div>
        </div>
        <div className="info-img">
          <div className="image three"></div>
          <p className="info-title">Maceración:</p>
          <p className="info-text">
            Se mezcla la malta molida con agua a una temperatura entre 65° y 75°
            para hidratar los granos, activar las enzimas y convertir el grano
            en azúcares fermentables. El líquido resultante de este proceso se
            le denomina “wort”.
          </p>
        </div>
      </div>
      <div className="beer-process-container">
        <div className="lateral">
          <div className="number">4</div>
          <div className="line-four"></div>
        </div>
        <div className="info-img">
          <div className="image four"></div>
          <p className="info-title">Fermentación:</p>
          <p className="info-text">
            Se le agrega levadura al líquido enfriado del proceso anterior.
            Controlando y manteniendo la temperatura en un rango de trabajo apto
            para la levadura, esta se encarga de transformar los azúcares en
            alcohol.
          </p>
        </div>
      </div>
      <div className="beer-process-container">
        <div className="lateral">
          <div className="number">5</div>
          <div className="line-five"></div>
        </div>
        <div className="info-img">
          <div className="image five"></div>
          <p className="info-title">Condicionamiento:</p>
          <p className="info-text">
            Se deja madurar la cerveza, disminuyendo o eliminando subproductos
            indeseados.
          </p>
        </div>
      </div>
    </>
  );
};

export default BeerProcess;
