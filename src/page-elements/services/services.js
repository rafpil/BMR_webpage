import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Section from "../../components/section/section";
import Column from "../../components/column/column";

import "./services.scss";

const Services = () => {
  return (
    <Section name="services">
      <Column type="text" position="left">
        <h2 className="section-header">Czym się zajmujemy</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          quasi, totam nesciunt est iusto mollitia illum eveniet. Alias, itaque
          tempore numquam facilis veritatis ex quam laudantium aspernatur sed,
          et rem doloribus in voluptates fugiat cum ipsa quae accusamus?
          Corporis fugit non odio quos in asperiores deserunt explicabo!
        </p>

        <hr className="line" />
        <h3>Budowa dróg</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          quasi, totam nesciunt est iusto mollitia illum eveniet. Alias, itaque
          tempore numquam facilis veritatis ex quam laudantium aspernatur sed,
          et rem!
        </p>
        <hr className="line" />
        <h3>Remonty nawierzchni</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          quasi, totam nesciunt est iusto mollitia illum eveniet. Alias, itaque
          tempore numquam facilis veritatis ex quam laudantium aspernatur sed,
          et rem!
        </p>
        <hr className="line" />
        <h3>Budowa chodników</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          quasi, totam nesciunt est iusto mollitia illum eveniet. Alias, itaque
          tempore numquam facilis veritatis ex quam laudantium aspernatur sed,
          et rem!
        </p>
        <hr className="line" />
        <h3>Transport materiałów</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          quasi, totam nesciunt est iusto mollitia illum eveniet. Alias, itaque
          tempore numquam facilis veritatis ex quam laudantium aspernatur sed,
          et rem!
        </p>
        <hr className="line" />
        <h3>Wypożyczalnia znaków</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          quasi, totam nesciunt est iusto mollitia illum eveniet. Alias, itaque
          tempore numquam facilis veritatis ex quam laudantium aspernatur sed,
          et rem!
        </p>
        <hr className="line" />
        <h3>Inne roboty inwestycyjne</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          quasi, totam nesciunt est iusto mollitia illum eveniet. Alias, itaque
          tempore numquam facilis veritatis ex quam laudantium aspernatur sed,
          et rem!
        </p>
      </Column>
      <Column type="image" position="right">
        <StaticImage className="img" src="./img/bg3.jpg" alt="Obraz" />
      </Column>
    </Section>
  );
};

export default Services;
