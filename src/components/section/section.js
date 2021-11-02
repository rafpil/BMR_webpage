import React from "react";

import { Container, Row } from "react-bootstrap";

const Section = (props) => {
  return (
    <section id={props.name} className={`${props.name}`}>
      <Container>
        <Row>
          {props.children}
        </Row>
      </Container>
    </section>
  );
}

export default Section;