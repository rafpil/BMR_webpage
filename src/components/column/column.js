import React from "react";
import { Col } from "react-bootstrap";

import "./column.scss";

const Column = (props) => {
  return (
    <Col
      md={6}
      className={`column-${props.type} column-${props.type}--${
        props.position
      } ${
        (props.type === "image") & (props.position === "left")
          ? "order-1 order-md-0"
          : ""
      }`}
    >
      {props.children}
    </Col>
  );
};

export default Column;
