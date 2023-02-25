import "./Footer.css";

import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer id="contacto">
      <Container>
        <h2>Contacto</h2>
        <ul className="mt-4 mb-4">
          <li>
            <p className="negritas mb-2">Teléfono</p>
            <a href="https://wa.me/+5491157406006" target="blank">
              +54 911 5740-6006
            </a>
          </li>
          <li>
            <p className="negritas mb-2">Mail</p>
            <a href="mailto:yotucounseling@gmail.com">
              yo.tu.counseling@gmail.com
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
