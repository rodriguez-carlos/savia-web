import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import ProductCardsContainer from "../components/ProductCardsContainer";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <ShowcaseCarousel />
      <ProductCardsContainer />
      <Footer />
    </>
  );
};

export default Home;
