import "./Hero.css";

import React from "react";

export default function Hero() {
  return (
    <section className="hero-cont bg-gray">
      <div className="container">
        <h1 className="hero-card-title mb-5"><span className="hero-yotu">YO-TU</span> <span className="hero-counseling">Counseling</span></h1>
        <p className="hero-sub-1">Consultoría psicológica para el desarrollo personal</p>
        <p className="hero-sub-2">Psicología Humanista - Enfoque Centrado en la Persona</p>
      </div>
    </section>
  );
}
