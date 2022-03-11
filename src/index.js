import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Rutas from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Rutas />
  </BrowserRouter>,
  document.getElementById("root")
);
