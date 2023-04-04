import "./Footer.css";

import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer id="contacto">
      <Container>
        <h2>Contacto</h2>
        <p className="footer-consultas">Recibo consultas, tu pregunta es bienvenida.</p>
        <p className="footer-destinado">Destinado a personas en edad adulta y adolescente.</p>
        <ul className="mt-4 mb-4 d-flex justify-content-between">
          <li className="d-flex tamara-name">
            <i class="fa-regular fa-id-badge icons-footer"></i>
            <p className="ms-2">Tamara Cuestas Acosta, Counselor</p>
          </li>
          <li className="d-flex">
            <a href="https://wa.me/+5491157406006" target="blank">
              <i class="fa-brands fa-whatsapp icons-footer"></i>
              <span className="ms-2">+54 911 5740-6006</span>
            </a>
          </li>
          <li className="d-flex">
            <a href="mailto:yo.tu.counseling@gmail.com">
              <i class="fa-regular fa-envelope icons-footer"></i>
              <span className="ms-2">yo.tu.counseling@gmail.com</span>
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
