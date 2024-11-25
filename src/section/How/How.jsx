import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import btn from "../../assets/images/btn.svg";
import img1 from "../../assets/images/how-img-1.png";
import img2 from "../../assets/images/how-img-2.png";
import img3 from "../../assets/images/how-img-3.png";
import "./How.css";

function How() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState(false);

  const items = [
    {
      text:
        "We start with a detailed consultation to understand your needs and desires. After that, our team develops a personalized design that takes into account all the unique features of your home.",
      image: img1,
    },
    {
      text:
        "Once the design is approved, we move on to the installation of equipment and integration of technologies, such as smart lighting systems, climate control, and security.",
      image: img2,
    },
    {
      text:
        "Our team provides full setup and ongoing support. We ensure you can easily manage your smart home from any device, with user-friendly interfaces and seamless integration into your daily life.",
      image: img3,
    },
  ];

  const handleNext = () => {
    setProgress(-10); // Сброс прогресса
    setAnimate(false); // Убираем активное состояние перед сменой слайда
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
      setAnimate(true); // Включаем активное состояние для анимации
    }, 400);
  };

  const handlePrev = () => {
    setProgress(-10); // Сброс прогресса
    setAnimate(false); // Убираем активное состояние перед сменой слайда
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setAnimate(true); // Включаем активное состояние для анимации
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext(); // Переход к следующему слайду
          return 0;
        }
        return prev + 1; // Увеличение прогресса
      });
    }, 50);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    setAnimate(true); // Активируем анимацию при загрузке
  }, []);

  return (
    <section id="how-it-works">
      <div className="how-container container">
        <p className="title">How it works</p>
        <div className="how-content">
          <div className="how-nav">
            <div className="circle">
              <div>
                <div
                  className="circle-container"
                  style={{ width: 30, height: 30 }}
                >
                  <CircularProgressbar
                    value={progress}
                    styles={buildStyles({
                      textColor: "#fff",
                      fontSize: "20px",
                      pathColor: "#6daf7d",
                      trailColor: "transparent",
                      backgroundColor: "transparent",
                    })}
                  />
                </div>
                <p>{index + 1}</p>
              </div>
              / <p>{items.length}</p>
            </div>
            <div className="how-btn-wraper">
              <div className="how-btn-left" onClick={handlePrev}>
                <img src={btn} alt="Previous" />
              </div>
              <div className="how-btn-right" onClick={handleNext}>
                <img src={btn} alt="Next" />
              </div>
            </div>
          </div>
          <div
            className={`how-content-main ${animate ? "active" : ""}`}
          >
            <h2>{items[index].text}</h2>
            <div
              className={`how-img-wraper ${animate ? "active" : ""}`}
            >
              <img src={items[index].image} alt={`Step ${index + 1}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default How;
