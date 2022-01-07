import React from "react";
import "./Services.css";

function Services({ options, icon }) {
  return (
    <div className="services">
      <div className="services__Cards">
        {options.map(({ image, text, about }) => (
          <div className="services__Card">
            <div className="services__CardImage">
              <img src={image} alt="" className={icon && "icon"} />
            </div>
            <div className="services__CardContent">
              <h3> {text}</h3>
              <p>{about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
