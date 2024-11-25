import React, { useEffect, useRef } from "react";
import "./Mission.css";
import hand from "../../assets/images/hand.png";
import water from "../../assets/images/water.png";
import leaf from "../../assets/images/leaf.png";
import sunflower from "../../assets/images/sunflower.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Mission() {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    // Разделение текста на отдельные буквы
    const splitText = heading.innerText.split("");
    heading.innerHTML = ""; // Очищаем текст внутри элемента

    splitText.forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char; // Учитываем пробелы
      heading.appendChild(span);
    });

    const animation = gsap.fromTo(
      heading.querySelectorAll("span"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05, // Задержка между анимациями символов
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill(); // Удаление триггера при размонтировании
    };
  }, []);

  return (
    <section id="mission">
      <div className="mission-container container">
        <p className="title">MISSION</p>
        <div className="mission-content">
          <div className="mission-text">
            <h2 ref={headingRef}>
              Prioritizing Sustainability <br />
              in Every Design
            </h2>
            <p>
              Our architectural solutions integrate eco-friendly practices and
              technology to reduce environmental impact and improve the quality
              of life, ensuring a sustainable future for you and the planet.
            </p>
          </div>
          <div className="mission-img-wraper">
            <img src={hand} alt="" />
          </div>
        </div>
        <div className="line"></div>
        <p className="title">Impact</p>
        <div className="inpact-content">
          <div className="inpact-item">
            <div className="inpact-img">
              <img src={leaf} alt="" />
              <img className="inpact-img-blur" src={leaf} alt="" />
            </div>
            <div className="inpact-text">
              <h3>Energy Efficiency</h3>
              <p>
                Smart energy systems to reduce consumption and costs while
                maintaining comfort.
              </p>
            </div>
          </div>
          <div className="inpact-item">
            <div className="inpact-img">
              <img src={sunflower} alt="" />
              <img className="inpact-img-blur" src={sunflower} alt="" />
            </div>
            <div className="inpact-text">
              <h3>Renewable Energy</h3>
              <p>
                Innovative water-saving features that help you conserve
                resources effortlessly.
              </p>
            </div>
          </div>
          <div className="inpact-item">
            <div className="inpact-img">
              <img src={water} alt="" />
              <img className="inpact-img-blur" src={water} alt="" />
            </div>
            <div className="inpact-text">
              <h3>Water Conservation</h3>
              <p>
                Innovative water-saving features that help you conserve
                resources effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
