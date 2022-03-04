import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ShowcaseCarouselItem from "../components/ShowcaseCarouselItem";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <ProductCard />
        <ShowcaseCarouselItem />
      <Footer />
    </>
  );
};

export default Home;
