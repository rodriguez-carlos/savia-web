import React from "react";
import ReactDOM from "react-dom";
import Rutas from "./routes";
import './styles/styles.scss';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Rutas />
  </BrowserRouter>,
  document.getElementById("root")
);
