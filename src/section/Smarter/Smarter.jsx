import React from "react";
import "./Smarter.css";
import img from "../../assets/images/smarter-img.png";

import Liam from "../../assets/images/Liam.png";
import Amelia from "../../assets/images/Amelia.png";
import Sofia from "../../assets/images/Sofia.png";
import Ethan from "../../assets/images/Ethan.png";
import Clara from "../../assets/images/Clara.png";
import Anna from "../../assets/images/Anna.png";

function Smarter() {
  const team = [
    {
      name: "Liam Thatcher",
      role: "Chief Technology Officer",
      description:
        "Liam drives technological innovation, integrating cutting-edge solutions into our projects. His leadership ensures every home is at the forefront of smart technology.",
      img: Liam,
    },
    {
      name: "Amelia Novak",
      role: "Head of Sustainability",
      description:
        "Amelia champions eco-friendly designs, focusing on renewable energy and sustainable practices to minimize environmental impact.",
      img: Amelia,
    },
    {
      name: "Sofia Moretti",
      role: "Lead Interior Designer",
      description:
        "Sofia combines style and functionality, creating elegant interiors tailored to individual lifestyles and modern aesthetics.",
      img: Sofia,
    },
    {
      name: "Anna Hughes",
      role: "Senior Automation Engineer",
      description:
        "Anna specializes in smart home systems, ensuring seamless automation and advanced functionality for every project.",
      img: Anna,
    },
    {
      name: "Clara Johansen",
      role: "Environmental Consultant",
      description:
        "Clara develops strategies to reduce environmental impact, emphasizing sustainable materials and energy efficiency.",
      img: Clara,
    },
    {
      name: "Ethan Laurent",
      role: "Project Manager",
      description:
        "Ethan oversees projects with precision, ensuring timely delivery and exceptional results through strategic planning.",
      img: Ethan,
    },
  ];

  return (
    <section>
      <div className="smarter-container container">
        <p className="title">OUR TEAM</p>
        <div className="team-content">
          {team.map((member, index) => (
            <div key={index} className="team-item">
              <img src={member.img} alt={member.name} />
              <div className="team-item-text">
                <h3>{member.name}</h3>
                <p className="team-item-role">{member.role}</p>
                <div className="team-item-caption">
                  <p style={{ opacity: 1 }}>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Smarter;
