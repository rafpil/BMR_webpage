import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import "./copyright.scss";

function Copyright() {
  return (
    <Container fluid className="copyright">
      <Row>
        <Col xs={12}>
          &copy; Copyright{" "}
          <strong>
            <Link to="/">BMR Sp. z o. o.</Link>
          </strong>{" "}
          All Rights Reserved
        </Col>
        <Col xs={12}>
          Designed by{" "}
          <a href="https://github.com/rafpil" target="_blank" rel="noreferrer">
            Rafał Pilśniak
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Copyright;
