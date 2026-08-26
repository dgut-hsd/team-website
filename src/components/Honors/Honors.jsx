import React from "react";
import Marquee from "react-fast-marquee";
import { Tooltip } from "react-tooltip";
import { honorsData } from "../../data/honors-data";

import "./Honors.css";

export function Honors() {
  return (
    <div className="honors-container" id="honors" data-aos="fade-up">
      <h2 className="text-container">
        <span>荣誉</span>
        <span className="text">殿堂</span>
      </h2>

      <Marquee
        speed={60}
        gradient={true}
        gradientColor={[240, 244, 248]}
        gradientWidth={100}
      >
        {honorsData.map((honor) => {
          return (
            <div
              className="honor-card"
              key={honor.id}
              data-tooltip-id="honor-tooltip"
              data-tooltip-content={honor.title}
            >
              <img src={honor.src} alt={honor.title} />
            </div>
          );
        })}
      </Marquee>

      <Tooltip id="honor-tooltip" className="custom-tooltip" />
    </div>
  );
}
