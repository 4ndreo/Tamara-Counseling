import "./Work.css";
// import RandomWomanImg from "../../img/random-woman.jpg";
import FlorImg from "../../img/Flor.png";
import TrebolImg from "../../img/Trebol.png";

import React from "react";

export default function Work() {
  return (
    <section className="work-cont">
      {/* <div className="work-img-cont">
        </div> */}
      <div className="work-text-cont">
        {/* <h2 className="work-card-title h2-title">Mi Trabajo</h2> */}
        <p>
          Por el hecho de vivir,{" "}
          <span className="negritas">
            como seres humanos nos vemos atravesados y afectados por diferentes
            situaciones, y a veces necesitamos ser acompañados
          </span>{" "}
          para habilitar lo que nos pasa, ser escuchados, comprendidos como
          seres exclusivos.
        </p>
        <p>
          Desde el counseling{" "}
          <span className="negritas">
            realizo un acompañamiento de la persona, como una realidad compleja
            y única
          </span>
          , intentando acercarme a su vivencia particular y trabajando en sus
          necesidades.
        </p>
        <div className="collage">
          <img className="work-img trebol" src={TrebolImg} alt="" />
          <div className="img-text">
            <img className="work-img flor" src={FlorImg} alt="" />
            <p>
              Promoviendo el autoconocimiento y el desarrollo de la persona,
              <span className="negritas">
                acompañando el sufrimiento como ser en el mundo, creando
                condiciones que faciliten el despliegue del potencial humano
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
