import React, { useState, useRef, useEffect } from "react";
import "./Questions.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const questions = [
  {
    question: "What makes our smart home solutions different?",
    answer:
      "Our solutions stand out because they seamlessly blend sustainable architecture with cutting-edge technology. We focus on creating homes that are intelligent, efficient, and environmentally responsible. By using renewable energy sources, integrating smart automation, and optimizing energy usage, we help you live in a home that’s not only convenient but also contributes positively to the planet.",
  },
  {
    question: "Can I customize the features in my smart home?",
    answer:
      "Absolutely! Customization is at the heart of our process. We begin with a detailed consultation to understand your needs, lifestyle, and preferences. Whether it’s smart lighting, advanced security systems, or integrated climate control, our team will work closely with you to design and implement features that perfectly align with your vision for a smart home.",
  },
  {
    question: "How do our services help save on energy costs?",
    answer:
      "Our services are designed to minimize energy consumption and maximize efficiency. By incorporating energy-efficient appliances, smart thermostats, and renewable energy systems such as solar panels, we reduce your reliance on traditional energy sources. Additionally, our real-time monitoring and automation systems ensure that no energy is wasted, significantly lowering your utility bills while benefiting the environment.",
  },
  {
    question: "What eco-friendly materials do we use?",
    answer:
      "We prioritize materials that are both sustainable and high-quality. For construction, we use recycled and responsibly sourced materials, including reclaimed wood, bamboo, and low-carbon concrete. For interiors, we offer non-toxic paints, energy-efficient windows, and sustainable flooring options. Every choice we make is aimed at reducing environmental impact while enhancing the durability and aesthetics of your home.",
  },
  {
    question: "Is remote control possible for all smart features?",
    answer:
      "Yes, all our smart systems are designed for full remote accessibility. Using our intuitive mobile app or voice control devices, you can manage lighting, adjust temperature, monitor security cameras, and even control appliances from anywhere in the world. Our user-friendly interfaces make it simple to stay connected to your home, providing convenience, security, and peace of mind at your fingertips.",
  },
];

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);
  const headingRef = useRef(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const heading = headingRef.current;

    // Разделяем текст на отдельные буквы
    const splitText = heading.innerText.split("");
    heading.innerHTML = "";

    splitText.forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char; // Учитываем пробелы
      heading.appendChild(span);
    });

    gsap.fromTo(
      heading.querySelectorAll("span"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05, // Задержка между буквами
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true, // Запуск анимации только один раз
        },
      }
    );
  }, []);

  return (
    <section id="faq">
      <div className="container container-faq">
        <p className="title">FAQ</p>
        <div className="faq-content">
          <div className="faq-left">
            <h2 ref={headingRef}>Questions?</h2>
            <p>
              Dive deeper into our FAQ <br />
              or get in touch.
            </p>
          </div>
          <div className="faq-right">
            {questions.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`faq-icon ${
                      activeIndex === index ? "minus" : "plus"
                    }`}
                  ></span>
                </button>
                <div
                  className={`faq-answer-wrapper ${
                    activeIndex === index ? "show" : "hide"
                  }`}
                >
                  <div className="faq-answer">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
