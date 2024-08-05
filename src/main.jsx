import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Style
import "./index.css";
// Fonts
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/800.css";
// Components
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);
