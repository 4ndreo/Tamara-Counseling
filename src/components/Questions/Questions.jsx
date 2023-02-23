import "./Questions.css";
import pizarraPared from "../../img/pizarra-pared.jpeg";

import React from "react";

export default function Questions() {
  return (
    <section className="questions-cont">
      <div className="container">
        <div className="questions-text-cont">
          <h2 className="questions-card-title h2-title text-center">
            Consultas Posibles
          </h2>
        </div>
        <div className="questions-img-cont ">
        <img className="questions-img" src={pizarraPared} alt=""/>

        </div>
      </div>
    </section>
  );
}
