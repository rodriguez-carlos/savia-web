import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shimpments from "./pages/Shipments";
import Contact from "./pages/Contact";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/nosotros" element={<About />} exact />
      <Route path="/envios" element={<Shimpments />} exact />
      <Route path="/contacto" element={<Contact />} exact />
    </Routes>
  );
}

export default Rutas;
