import "./Work.css";
// import RandomWomanImg from "../../img/random-woman.jpg";
import WorkImg from "../../img/mi-trabajo.png";

import React from "react";

export default function Work() {
  return (
    <section className="work-cont">
      <div className="container">
        <div className="work-img-cont">
          <img className="work-img" src={WorkImg} alt="" />
        </div>
        <div className="work-text-cont">
          <h2 className="work-card-title h2-title">Mi Trabajo</h2>
          <p>
            Por el hecho de vivir, como seres humanos nos vemos atravesados y
            afectados por diferentes situaciones, y a veces necesitamos ser
            acompañados para habilitar lo que nos pasa, ser escuchados,
            comprendidos como seres exclusivos.
          </p>
          <p>
            Desde el counseling realizo un acompañamiento de la persona, como
            una realidad compleja y única, intentando acercarme a su vivencia
            particular y trabajando en sus necesidades.
          </p>
          <p>
            Promoviendo el autoconocimiento y el desarrollo de la persona,
            acompañando el sufrimiento como ser en el mundo, creando condiciones
            que faciliten el despliegue del potencial humano.
          </p>
        </div>
      </div>
    </section>
  );
}
