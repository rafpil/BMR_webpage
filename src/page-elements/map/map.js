import React from "react";

import Section from "../../components/section/section";
import { Col } from "react-bootstrap";

import "./map.scss";

function Map() {
  return (
    <Section name="map">
      <Col sm={12}>
        <h2 className="section-header">Sprawdź jak do nas dojechać</h2>
      </Col>
      <Col sm={12} className="map-content">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.3389930904004!2d21.0091129156084!3d52.200886867581865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccd7215c13d9%3A0xebee228f39b814ff!2saleja%20Niepodleg%C5%82o%C5%9Bci%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1615724546712!5m2!1spl!2spl"
          width="100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Col>
    </Section>
  );
}

export default Map;
