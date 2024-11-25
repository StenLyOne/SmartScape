import React, { useEffect, useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import Button from "../../components/Button/Button";
import bigBlur from "../../assets/images/big-blur.svg";
import smallBlur from "../../assets/images/small-blur.svg";
import smallOrbit from "../../assets/images/small-orbit.svg";
import normalOrbit from "../../assets/images/normal-orbit.svg";
import bigOrbit from "../../assets/images/big-orbit.svg";
import planet from "../../assets/images/planet.svg";

function Home() {
  const maskRef = useRef(null);

  useEffect(() => {
    const elements = maskRef.current.querySelectorAll(".mask-blur div img");

    // Используем setTimeout для задержки анимации
    setTimeout(() => {
      gsap.to(elements, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 0.1,
        ease: "power3.out",
        stagger: 0.3,
      });
    }, 100); // Задержка в 100 миллисекунд
  }, []);

  return (
    <main>
      <div className="container main-container">
        <div className="main-text">
          <h1>
            Redefining Architecture <br />
            for a Sustainable Future
          </h1>
          <p>
            Creating spaces that blend cutting-edge technology with sustainable
            architecture, <br className="br-pc" /> designed to enhance both
            comfort and environmental responsibility.
          </p>
        </div>
        <div className="main-btn">
          <Button text="Learn More" color="#171717" bg="#FFFFFF" />
        </div>
        <div className="main-mask" ref={maskRef}>
          <div className="mask-blur">
            <div className="big-blur">
              <img src={bigBlur} alt="" />
            </div>
            <div className="small-blur">
              <img src={smallBlur} alt="" />
            </div>
            <div className="small-orbit">
              <img src={smallOrbit} alt="" />
            </div>
            <div className="normal-orbit">
              <img src={normalOrbit} alt="" />
            </div>
            <div className="big-orbit">
              <img src={bigOrbit} alt="" />
              <div className="planet">
                <img src={planet} alt="" />
              </div>
            </div>

            <div className="mask-gradient"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
