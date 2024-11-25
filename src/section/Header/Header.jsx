import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container-header">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className={`header-content ${isMenuOpen ? "open" : ""}`}>
          <div className="header-link">
            <a href="#mission">
              <p>Mission</p>
            </a>
            <a href="#how-it-works">
              <p>How it works</p>
            </a>
            <a href="#benefits">
              <p>Benefits</p>
            </a>
            <a href="#faq">
              <p>FAQ</p>
            </a>
          </div>
          <button className="contact-button">
            <a href="#contact">
              <span>Contact us</span>
            </a>
          </button>
        </div>
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? "rotate" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "fade-out" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "rotate-reverse" : ""}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;

