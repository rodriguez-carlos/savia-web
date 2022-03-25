import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shimpments from "./pages/Shipments";
import Contact from "./pages/Contact";
import BeersKinds from "./pages/BeersKinds";
import BeerKegs from "./pages/BeerKegs";
import BeerPack from "./pages/BeerPack";
import ProductsPage from "./pages/ProductsPage";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/nosotros" element={<About />} exact />
      <Route path="/envios" element={<Shimpments />} exact />
      <Route path="/contacto" element={<Contact />} exact />
      <Route path="/productos" element={<ProductsPage />} exact />
      <Route path="/variedades/:paramId" element={<BeersKinds  />} exact/>
      <Route path="/barriles/:paramId" element={<BeerKegs  />} exact/>
      <Route path="/variedades/mixto/:paramId" element={<BeerPack  />} exact/>
    </Routes>
  );
}

export default Rutas;
