import Nav from "./components/Nav";
import "./styles/App.css";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ShowcaseCarouselItem from "./components/ShowcaseCarouselItem";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <ProductCard />
      <ShowcaseCarouselItem />
      <Footer/>
    </div>
  );
}

export default App;
