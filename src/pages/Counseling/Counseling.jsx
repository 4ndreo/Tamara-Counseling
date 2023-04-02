import "./Counseling.css";

import React from "react";

export default function Counseling() {
  return (
    <main className="counseling-cont container">
      <h1 className="pt-4 mb-4">Counseling</h1>
      <div className="counseling-info-cont">
        <div className="counseling-text-cont">
          <p>
            El <span className="negritas">Counseling</span> es una profesión para el desarrollo y el despliegue de
            las capacidades y las potencialidades del ser humano y para su
            bienestar.
          </p>
          <p>
            Cada persona tiene su individualidad y la expresa de diferentes
            modos en la vida, através de sus palabras, de sus sentimientos, de
            sus emociones, de sus conductas.
          </p>
          <p>
            El counseling <span className="negritas">crea condiciones que faciltan la expresion de la
            persona</span>. Trabajando con el vinculo humano, en un espacio de
            consulta. Facilitando la toma de contacto con el presente, con la
            vivencia del momento.
          </p>
          <p>
          <span className="negritas">La finalidad es el bienestar de la persona</span> y que en el avance del
            proceso pueda: <span className="negritas">reconocerse a sí misma con sus necesidades</span> y hacer
            frente a ellas, poniendo al servicio sus recursos internos y sus
            herramientas personales; <span className="negritas">desarrollar y desplegar sus capacidades;
            ampliar las posibilidades de elección; tomar mejores desiciones;
            contactar con sus emociones, sentimientos, pensamientos y ser su
            propia guía; resolver con mayor solvencia ciertas dificultades u
            obstáculos; empoderarse de si mísma; sentirse funcionando
            plenamente; mejorar su calidad de vida</span>, sus vínculos, sus relaciones
            con el mundo; <span className="negritas">desenvolverse creativamente; habilitarse a transitar
            la vida desplegando todo su ser</span>, deseando, sintiendo, pensando,
            haciendo, creando.
          </p>
          <p>
            Como counselor <span className="negritas">puedo ofrecer una invitación a habitar un espacio de
            escucha de lo que esté atravesando la persona en el momento
            presente</span>. Para que se permita expresar en un ambiente de seguridad,
            de respeto, de comprensión.
          </p>
          <p>
            Una de las ventajas importantes del trabajo en tiempo presente, es
            la <span className="negritas">posibilidad de Resignificar situaciones pasadas</span>, es decir de
            percibir “que me sucede hoy con eso que pasó”, y darle un nuevo
            sentido, y avanzar más livianos por la vida.
          </p>
          <p>
            Por el hecho de vivir, nos vemos atravesados y afectados por
            diferentes situaciones, y a veces necesitamos ser acompañados para
            habilitar lo que nos pasa, ser escuchados, comprendidos como seres
            exclusivos.
          </p>
          <p>
            Desde el counseling <span className="negritas">realizamos un acompañamiento de la persona, como
            una realidad compleja y única, intentando acercarnos a su vivencia
            particular</span>. Y desde este lugar trabajamos con ella, en las
            necesidades que fueran surgiendo durante el proceso.
          </p>
          <p>
            Promoviendo el autoconocimiento y el desarrollo de la persona.
            Acompañando el sufrimiento como ser en el mundo, con miras al
            despliegue del potencial humano.
          </p>
        </div>
        {/* <div className="counseling-img-cont">
          <img src={WomanCounseling} alt="" />
        </div> */}
      </div>
      <section className="temas-counseling-cont">
        <h2 className="text-center">Temas que aborda el counseling</h2>
        <ul className="temas-counseling-list d-flex flex-row">
          <li className="pe-1">Etapas vitales -</li>
          <li className="pe-1">Identidad - </li>
          <li className="pe-1">Adolescencia - </li>
          <li className="pe-1">Pareja y familia - </li>
          <li className="pe-1">Educación - </li>
          <li className="pe-1">Adicciones - </li>
          <li className="pe-1">Desarrollo personal - </li>
          <li className="pe-1">Sexualidad - </li>
          <li className="pe-1">Espiritualidad - </li>
          <li>Laboral</li>
        </ul>
      </section>
      <section className="pilares-cont">
        <h2>Pilares Fundamentales de nuestra profesión</h2>
        <div className="pilares-list">
        <ul className="mb-4">
          <li>
            <span className="negritas">
              Formación académica teórico-vivencial:
            </span>{" "}
            abordamos el potencial humano con sus aspectos biológicos,
            psíquicos, sociológicos y espirituales. Con la responsabilidad de
            una formación continua en todo lo que contribuya a nuestro
            despliegue personal de modo creativo, a enriquecer nuestra
            existencia como personas en el mundo, y a la facilitación de la
            escucha como counselors.
          </li>
          <li>
            <span className="negritas">Proceso personal</span>
          </li>
          <li>
            <span className="negritas">Supervisión del trabajo</span>
          </li>
        </ul>
        <p>
          En estos pilares nos apoyamos para desarrollar las actitudes
          personales y profesionales necesarias para crear condiciones
          facilitadoras de un vínculo humano y una comunicación fluida en cada
          encuentro.
        </p>
        </div>
      </section>
    </main>
  );
}
