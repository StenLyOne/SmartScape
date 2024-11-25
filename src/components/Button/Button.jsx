import React from "react";
import "./Button.css";

function Button({ text, targetId }) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      <span className="span">{text}</span>
    </button>
  );
}

export default Button;
