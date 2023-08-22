import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Career from "./components/Career";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />      
      <Career />
      <About />
      <Contact />
    </BrowserRouter>
  );
};

export default App;