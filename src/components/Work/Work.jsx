import "./Work.css";
import RandomWomanImg from "../../img/random-woman.jpg";

import React from "react";

export default function Work() {
  return (
    <section className="work-cont">
      <div className="container">
        <div className="work-img-cont">
          <img className="work-img" src={RandomWomanImg} alt="" />
        </div>
        <div className="work-text-cont">
          <h2 className="work-card-title h2-title">Mi Trabajo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
            ipsum bibendum, vestibulum nisi ac, imperdiet mauris. Quisque ut
            odio viverra, facilisis est ut, dignissim augue. Vivamus vitae
            mattis purus. Ut non nibh at turpis placerat mollis vitae ut augue.
            In rhoncus auctor sollicitudin. Nam quis tempus justo, vel dictum
            eros. Aliquam non arcu urna. Aenean commodo ipsum quam, et luctus
            sem consectetur quis. Proin ante felis, rhoncus ut blandit non,
            ultricies vel velit.
          </p>
          <p>
            In mollis ultricies sapien fermentum elementum. Proin congue
            bibendum tempus. Cras sed tristique lectus. Vestibulum nec erat
            tempus, aliquet nibh ullamcorper, ornare erat. Nullam ac feugiat
            est. Quisque lobortis, neque sit amet mollis porttitor, turpis lorem
            sollicitudin sem, at luctus sapien risus et dui. Ut imperdiet
            interdum dapibus. Ut semper gravida ligula vel dignissim. Aenean
            aliquam purus id odio blandit, ut bibendum neque auctor. Fusce
            euismod lectus sit amet mi faucibus, vel consectetur mauris
            molestie. Praesent laoreet odio risus, et laoreet dolor tempor sed.
            Aenean quam risus, tempor eu turpis eu, luctus luctus nibh. Duis
            interdum tellus eget est sodales, in lacinia nisi iaculis. Quisque
            auctor augue tellus, nec ornare odio rhoncus a. Nulla facilisi.
          </p>
        </div>
      </div>
    </section>
  );
}
