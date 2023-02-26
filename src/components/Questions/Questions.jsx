import "./Questions.css";
import pizarraPared from "../../img/pizarra-pared.jpeg";
import pizarraCorcho from "../../img/pizarra-corcho.png";

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
        {/* <div className="questions-img-cont pizarra-pared-cont">
          <img
            className="questions-img pizarra-pared"
            src={pizarraPared}
            alt=""
          />
        </div> */}
        <div className="questions-img-cont pizarra-sticky-cont">
          <img
            className="questions-img pizarra-sticky"
            src={pizarraCorcho}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
