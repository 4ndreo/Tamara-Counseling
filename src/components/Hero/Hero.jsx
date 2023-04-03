import "./Hero.css";

import React from "react";

export default function Hero() {
  return (
    <section className="hero-cont bg-gray">
      <div className="container">
        <h1 className="hero-card-title mb-5"><span className="hero-yotu">YO-TU</span> <span className="hero-counseling">Counseling</span></h1>
        <div className="hero-bajada">
        <p className="hero-sub-1">Consultoría psicológica para el desarrollo personal</p>
        {/* <p className="hero-sub-1">Asesoramiento y orientación psicológica</p> */}
        <p className="hero-sub-2">Psicología Humanista<span className="hero-guion"> - </span><span className="hero-enfoque">Enfoque Centrado en la Persona</span></p>
        </div>
      </div>
    </section>
  );
}
