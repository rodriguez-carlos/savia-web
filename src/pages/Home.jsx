import "../styles/pages/_home.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import ProductCardsContainer from "../components/ProductCardsContainer";
import ShowcaseCarouselItem from "../components/ShowcaseCarouselItem";
import AgeAlert from "../components/AgeAlert";
import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllVarieties, getCarouselSlides } from "../service/api";

const Home = () => {
  const staticInfo = {
    title: "Nuestras Cervezas",
    description: "Savia es cerveza 100% artesanal y chilena. \n Presentamos nuestras variedades, no dejes de probarlas todas!"
  }
  const bottomImage = {
    attributes: {
      titulo: "Nuestra Filosofía", 
      descripcion: "Somos una empresa independiente y consciente del medio ambiente. Conoce más sobre Savia!",
      imagen: { data: { attributes: { url: "/uploads/nuestra_filosofia_home_1a31e03e65.jpg" } } },
      ruta_link: '/nosotros'
    }
  }
  const [varietiesData, setVarietiesData] = useState();
  const callVarietiesApi = async () => {
    const result = await getAllVarieties();
    setVarietiesData(result.data);
  }
  const [carouselData, setCarouselData] = useState();
  const callCarouselApi = async () => {
    const result = await getCarouselSlides();
    setCarouselData(result.data);
  }
  useEffect(() => {
    callVarietiesApi();
    callCarouselApi()
  }, [])
   
  const[openAlert, setOpenAlert] = useState(!localStorage.getItem("isOfAge"));
  const handleClickCloseAlert = () => {
    localStorage.setItem("isOfAge", true);
    setOpenAlert(false);
  }

  return (
    <>
      <Nav />
      <Dialog className="age-alert-dialog" open={openAlert} maxWidth="896px" >
        <AgeAlert handleClickCloseAlert={handleClickCloseAlert} />
      </Dialog>
      <ShowcaseCarousel>
        {carouselData
          ? carouselData.map((slide) => (
              <ShowcaseCarouselItem slide={slide} key={slide.id} />
            ))
          : ''
        }
      </ShowcaseCarousel>
      <ProductCardsContainer staticInfo={staticInfo} varieties={varietiesData}/>
      <ShowcaseCarouselItem slide={bottomImage} textOnLeft />
      <Footer />
    </>
  );
};

export default Home;
