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
        {carouselData ? carouselData.map((slide) => {
          return <ShowcaseCarouselItem slide={slide} key={slide.id} />
        }) : ''}
      </ShowcaseCarousel>
      <ProductCardsContainer varieties={varietiesData}/>
      <ShowcaseCarouselItem textOnLeft />
      <Footer />
    </>
  );
};

export default Home;
