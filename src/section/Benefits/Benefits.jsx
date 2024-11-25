import React, { useState, useEffect, useRef } from "react";
import "./Benefits.css";
import img1 from "../../assets/images/Benefits-1.png";
import img2 from "../../assets/images/Benefits-2.png";
import img3 from "../../assets/images/Benefits-3.png";
import img4 from "../../assets/images/Benefits-4.png";
import img5 from "../../assets/images/Benefits-5.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Benefits() {
  const [index, setIndex] = useState(0);
  const itemsRef = useRef([]); // Хранение рефов для каждого элемента;

  useEffect(() => {
    const triggers = itemsRef.current.map((item, i) =>
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => setIndex(i),
        onEnterBack: () => setIndex(i),
      })
    );

    return () => {
      // Очистка всех триггеров для компонента
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="benefits">
      <div className="benefits-container container">
        <p className="title">Benefits</p>
        <div className="benefits-content">
          {[
            {
              text: "Energy Optimization",
              desc:
                "Optimize your energy use with intelligent systems designed to reduce costs and your carbon footprint.",
              advantages: [
                "Lower energy bills",
                "Reduced carbon footprint",
                "Smart monitoring and control",
              ],
              image: img1,
            },
            {
              text: "Advanced Security Features",
              desc:
                "State-of-the-art security solutions for comprehensive home protection, even when you’re away.",
              advantages: [
                "24/7 remote monitoring",
                "AI-driven threat detection",
                "Easy integration with smart devices",
              ],
              image: img2,
            },
            {
              text: "Climate Control",
              desc:
                "Maintain a perfect indoor environment year-round with our advanced climate control systems.",
              advantages: [
                "Automatic temperature adjustment",
                "Humidity control",
                "Energy-efficient solutions",
              ],
              image: img3,
            },
            {
              text: "Eco-Friendly Materials",
              desc:
                "Eco-friendly materials selected for durability and minimal environmental impact, ensuring sustainable luxury.",
              advantages: [
                "Sustainably sourced materials",
                "Durable and long-lasting",
                "Minimal environmental impact",
              ],
              image: img4,
            },
            {
              text: "Smart Home Integration",
              desc:
                "Control every aspect of your home from one device, making life simpler and more connected.",
              advantages: [
                "Centralized control system",
                "Voice assistant compatibility",
                "Seamless device integration",
              ],
              image: img5,
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`benefits-item ${index === i ? "activ" : ""}`}
            >
              <div className="benefits-item-text">
                <div
                  className={`benefits-item-anim ${index === i ? "activ" : ""}`}
                >
                  {item.text}
                </div>
                {index === i && (
                  <ul className="benefits-list">
                    {item.advantages.map((advantage, idx) => (
                      <li key={idx} className="benefits-list-item">
                        {advantage}
                      </li>
                    ))}
                  </ul>
                )}
                <p>{item.desc}</p>
              </div>
              <div
                className={`benefits-item-img ${index === i ? "activ" : ""}`}
              >
                <img src={item.image} alt={item.text} />
              </div>
              <div className={`benefits-blur ${index === i ? "activ" : ""}`}>
                <div className="benefits-big-blur">
                  {/* <img src={bigBlur} alt="" /> */}
                  <div></div>
                </div>
                <div className="benefits-small-blur">
                  {/* <img src={smallBlur} alt="" /> */}
                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
