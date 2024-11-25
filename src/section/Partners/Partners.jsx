import React from "react";
import "./Partners.css";
import google from "../../assets/images/google.svg";
import microsoft from "../../assets/images/microsoft.svg";
import samsung from "../../assets/images/samsung.svg";
import ikea from "../../assets/images/ikea.svg";
import spotify from "../../assets/images/spotify.svg";

function Partners() {
  const logos = [spotify, google, samsung, microsoft, ikea, spotify, google, samsung, microsoft, ikea, spotify, google, samsung, microsoft, ikea];

  return (
    <section>
      <div className="partners-container ">
        <p className="title">Partners and Collaborations</p>
        <div className="partners-content">
          <div className="partners-scroll">
            {/* Логотипы + дублирование для плавности */}
            {logos.concat(logos).map((logo, index) => (
              <div key={`logo-${index}`} className="partner-logo">
                <img src={logo} alt={`Partner ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
