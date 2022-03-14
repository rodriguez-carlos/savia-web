import React from "react";
import ReactDOM from "react-dom";
import Rutas from "./routes";
import './styles/styles.scss';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Rutas />
  </BrowserRouter>,
  document.getElementById("root")
);
