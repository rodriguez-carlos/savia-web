import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import ProductCardsContainer from "../components/ProductCardsContainer";
import ShowcaseCarouselItem from "../components/ShowcaseCarouselItem";

const Home = () => {
  return (
    <>
      <Nav />
      <ShowcaseCarousel />
      <ProductCardsContainer />
      <ShowcaseCarouselItem textOnLeft />
      <Footer />
    </>
  );
};

export default Home;
