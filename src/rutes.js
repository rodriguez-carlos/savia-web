import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/App.css";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/nosotros" element={<About />} exact />
    </Routes>
  );
}

export default Rutas;
