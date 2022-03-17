import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import ProductCardsContainer from "../components/ProductCardsContainer";
import ShowcaseCarouselItem from "../components/ShowcaseCarouselItem";
import AgeAlert from "../components/AgeAlert";

const Home = () => {
  return (
    <>
      <Nav />
      <AgeAlert />
      <ShowcaseCarousel />
      <ProductCardsContainer />
      <ShowcaseCarouselItem textOnLeft />
      <Footer />
    </>
  );
};

export default Home;
