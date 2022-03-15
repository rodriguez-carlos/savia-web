import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import ProductCardsContainer from "../components/ProductCardsContainer";

const Home = () => {
  return (
    <>
      <Nav />
      <ShowcaseCarousel />
      <ProductCardsContainer />
      <Footer />
    </>
  );
};

export default Home;
