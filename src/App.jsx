import React, { useEffect } from "react";
import Home from "./section/Home/Home";
import Mission from "./section/Mission/Mission";
import How from "./section/How/How";
import Benefits from "./section/Benefits/Benefits";
import Partners from "./section/Partners/Partners";
import Smarter from "./section/Smarter/Smarter";
import Contact from "./section/Contact/Contact";
import Questions from "./section/Questions/Questions";
import Footer from "./section/Footer/Footer";
import Header from "./section/Header/Header";
import "./styles.css";
import { initScrollTrigger } from "../gsap";

const App = () => {
  useEffect(() => {
    initScrollTrigger(); // Регистрация GSAP и ScrollTrigger один раз
  }, []);

  return (
    <div className="main-wraper">
      <Header />
      <Home />
      <Mission />
      <How />
      <Benefits />
      <Partners />
      <Smarter />
      <Contact />
      <Questions />
      <Footer />
    </div>
  );
};

export default App;
