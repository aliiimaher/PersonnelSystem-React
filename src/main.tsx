// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import axios from "axios";
import "./App.css";

axios.defaults.baseURL = "http://api.mzgrco.ir/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // ehtiat
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
