import Nav from "./components/Nav";
import "./App.css";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <ProductCard />
      <Footer/>
    </div>
  );
}

export default App;
