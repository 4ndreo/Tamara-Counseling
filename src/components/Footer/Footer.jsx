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
            <a href="https://wa.me/+541112345678" target="blank">
              +54 11 1234-5678
            </a>
          </li>
          <li>
            <p className="negritas mb-2">Mail</p>
            <a href="mailto:yotucounseling@gmail.com">
              yotucounseling@gmail.com
            </a>
          </li>
          <li>
            <p className="negritas mb-2">Instagram</p>
            <span>@yotucounseling</span>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
