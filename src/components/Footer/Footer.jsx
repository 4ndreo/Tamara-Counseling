import "./Footer.css";

import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer id="contacto">
      <Container>
        <h2>Contacto</h2>
        <p>Recibo consultas, tu pregunta es bienvenida.</p>
        <p>Destinado a personas en edad adulta y adolescente.</p>
        <ul className="mt-4 mb-4">
          <li className="d-flex tamara-name">
            <p>Tamara Cuestas Acosta, Counselor</p>
          </li>
          <li className="d-flex">
            <i class="fa-brands fa-whatsapp icons-footer"></i>
            <a href="https://wa.me/+5491157406006" target="blank">
              +54 911 5740-6006
            </a>
          </li>
          <li className="d-flex">
            <i class="fa-regular fa-envelope icons-footer"></i>
            <a href="mailto:yo.tu.counseling@gmail.com">
              yo.tu.counseling@gmail.com
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
