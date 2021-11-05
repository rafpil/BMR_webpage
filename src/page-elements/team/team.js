import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

import Section from "../../components/section/section";
import Column from "../../components/column/column";

import { Row, Col } from "react-bootstrap";

import "./team.scss";

function Team() {
  return (
    <Section name="team">
      <Column
        md={6}
        type="image"
        position="left"
        className="order-1 order-md-0"
      >
        <StaticImage
          className="img"
          src="./img/bg11.jpg"
          alt="Mężczyzna tnacy asflat"
        />
      </Column>
      <Column
        md={6}
        type="text"
        position="right"
        className="order-0 order-md-1"
      >
        <Row>
          <Col sm={12}>
            <h2 className="section-header">Nasz zespół</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              quasi, totam nesciunt est iusto mollitia illum eveniet. Alias,
              itaque tempore numquam facilis veritatis ex quam audantium
              aspernatur sed, et rem doloribus in voluptates fugiat cum ipsa
              quae accusamus? Corporis fugit non odio quos in asperiores
              deserunt explicabo!
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="person mx-auto">
            <StaticImage
              src="./img/image1.jpg"
              alt="Mężczyzna"
              className="img-fluid"
            />
            <h3>
              Janina <br /> Kowalska
            </h3>
            <h4>Prezes spółki</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique in commodi corrupti dolore sequi ratione quas.
            </p>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <TiSocialFacebookCircular className="icon icon--xxl" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <TiSocialTwitterCircular className="icon icon--xxl" />
              </a>
            </div>
          </Col>
          <Col sm={6} className="person mx-auto">
            <StaticImage
              src="./img/image2.jpg"
              alt="Obraz"
              className="img-fluid"
            />
            <h3>
              Janusz <br /> Nowak
            </h3>
            <h4>Wiceprezes spółki</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique in commodi corrupti dolore sequi ratione quas.
            </p>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <TiSocialFacebookCircular className="icon icon--xxl" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <TiSocialTwitterCircular className="icon icon--xxl" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <TiSocialLinkedinCircular className="icon icon--xxl" />
              </a>
            </div>
          </Col>
        </Row>
      </Column>
    </Section>
  );
}

export default Team;
