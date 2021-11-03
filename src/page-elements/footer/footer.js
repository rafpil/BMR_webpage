import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./footer.scss";

function Footer() {
  return (
    <Container fluid className="footer">
      <Container>
        <Row>
          <Col sm={6} md={4} className="p-2 order-sm-0">
            <span>BMR Sp. z o. o.</span>
            <span>Aleja Niepodlegości 1000</span>
            <span>00-000 Warszawa</span>
          </Col>
          <Col sm={12} md={4} className="p-2 order-sm-2">
            <span>
              Telefon: <a href="tel:+485263625">(+48) 526 36 25</a>
            </span>
            <span>
              FAX: <a href="tel:+485263626">(+48) 526 36 26</a>
            </span>
            <span>
              E-mail: <a href="mailto:sekretariat@bmr.pl">sekretariat@bmr.pl</a>
            </span>
            <span>
              E-mail: <a href="mailto:ksiegowosc@bmr.pl">ksiegowosc@bmr.pl</a>
            </span>
          </Col>
          <Col sm={6} md={4} className="p-2 order-sm-1">
            <span>NIP: 874 14 78 153</span>
            <span>REGON: 871 117 182</span>
            <span>KRS: 0000094540</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
