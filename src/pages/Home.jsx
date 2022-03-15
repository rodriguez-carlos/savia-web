import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import ProductCardsContainer from "../components/ProductCardsContainer";
import ShowcaseCarouselItem from "../components/ShowcaseCarouselItem";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <ShowcaseCarousel />
      <ProductCardsContainer />
      <ShowcaseCarouselItem textOnLeft />
      <Footer />
    </>
  );
};

export default Home;
