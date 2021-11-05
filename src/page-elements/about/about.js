import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Section from "../../components/section/section";
import Column from "../../components/column/column";

import "./about.scss";

const About = () => {
  return (
    <Section name="about">
      <Column type="image" position="left">
        <StaticImage className="img" src="./img/bg1.jpg" alt="Obraz" />
      </Column>
      <Column type="text" position="right">
        <h2 className="section-header">O firmie</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          quasi, totam nesciunt est iusto mollitia illum eveniet id similique
          modi voluptas recusandae nostrum tenetur voluptatem officia at velit
          voluptates hic? Dignissimos culpa aut quia omnis quasi dolore voluptas
          magnam vero, temporibus suscipit! Atque iusto aepe adipisci,
          laudantium illum animi quia dolores dicta inventore praesentium vitae
          fuga tempora, sequi quae suscipit. Alias, itaque tempore numquam
          facilis veritatis ex quam laudantium aspernatur sed, et re doloribus
          in voluptates fugiat cum ipsa quae accusamus? Corporis fugit non odio
          quos in asperio res deserunt explicabo!
        </p>
      </Column>
    </Section>
  );
};

export default About;
