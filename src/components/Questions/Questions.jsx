import "./Questions.css";
import pizarraPared from "../../img/pizarra-pared.jpeg";
import pizarraCorcho from "../../img/pizarra-corcho.png";
import pizarraChica from "../../img/pizarra-chica.png";
import pizarraGrande from "../../img/pizarra-grande.png";
import pizarraHor from "../../img/pizarra-hor.png";

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
          {/* <picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(max-width:500px)" srcset={pizarraGrande}>
  <img className="questions-img pizarra-sticky"
            src={pizarraHor}
            alt="" />
            </picture> */}
          <img
            className="questions-img pizarra-sticky"
            src={pizarraHor}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
