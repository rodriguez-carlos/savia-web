import "../styles/pages/_home.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import ProductCardsContainer from "../components/ProductCardsContainer";
import ShowcaseCarouselItem from "../components/ShowcaseCarouselItem";
import AgeAlert from "../components/AgeAlert";
import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllVarieties, getVariety, getCarouselSlides } from "../service/api";

const Home = () => {
  const [varietiesData, setVarietiesData] = useState();
  const callVarietiesApi = async () => {
    const result = await getAllVarieties();
    setVarietiesData(result);
  }
  const [carouselData, setCarouselData] = useState();
  const callCarouselApi = async () => {
    const result = await getCarouselSlides();
    setCarouselData(result);
  }
  useEffect(() => {
    callVarietiesApi();
    callCarouselApi()
  }, [])
   
  const[openAlert, setOpenAlert] = useState(false); //cambiar por true
  const handleClickCloseAlert = () => {
    setOpenAlert(false);
  }

  return (
    <>
      <Nav />
      <Dialog className="age-alert-dialog" open={openAlert} maxWidth={896} >
        <AgeAlert handleClickCloseAlert={handleClickCloseAlert} />
      </Dialog>
      <ShowcaseCarousel />
      <ProductCardsContainer varieties={varietiesData}/>
      <ShowcaseCarouselItem textOnLeft />
      <Footer />
    </>
  );
};

export default Home;
