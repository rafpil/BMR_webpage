import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

import Section from "../../components/section/section";
import Column from "../../components/column/column";
import Button from "../../components/button/button";

import "./contact.scss";

function Contact() {
  return (
    <Section name="contact">
      <Column md={6} type="text" position="left">
        <h2 className="section-header">Skontaktuj się z nami</h2>
        <p>
          Jesteśmy tu aby Ci pomóc. Masz pytania? Skontaktuj się z nami w
          dowolnie wybrany sposób:
        </p>
        <div className="d-flex align-items-center py-3">
          <div className="col-1">
            <FaPhoneAlt className="icon icon--md" />
          </div>
          <div className="col-10">
            <a className="ps-2" href="tel:+485263625">
              (+48) 526 36 25
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center py-3">
          <div className="col-1">
            <FaEnvelope className="icon icon--md" />
          </div>
          <div className="col-11">
            <a className="ps-2" href="mailto:info@email.com">
              info@email.com
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center py-3">
          <div className="col-1">
            <FaClock className="icon icon--md" />
          </div>
          <div className="ps-2 col-11">
            Osobiście od poniedziałku do piątku w godzinach od 8:00 do 16:00.
          </div>
        </div>
        <p>Lub przy pomocy poniższego formularza:</p>
        <form
          action="https://formspree.io/f/mzbylbdr"
          method="POST"
          className="row"
        >
          <div className="col-xs-12 col-xl-6 mb-3">
            <input
              type="text"
              name="Imię i nazwisko: "
              className="form-control"
              placeholder="* Imię i nazwisko"
              aria-label="Imię i nazwisko"
              required
            />
          </div>
          <div className="col-xs-12 col-xl-6 mb-3">
            <input
              type="email"
              name="Adres e-mail: "
              className="form-control"
              placeholder="Adres e-mail"
              aria-label="Adres e-mail"
            />
          </div>

          <div className="col-xs-12 col-xl-6 mb-3">
            <input
              type="text"
              name="Nazwa firmy: "
              className="form-control"
              placeholder="Nazwa firmy"
              aria-label="Nazwa firmy"
            />
          </div>

          <div className="col-xs-12 col-xl-6 mb-3">
            <input
              type="tel"
              pattern="(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)"
              name="Numer telefonu kontaktowego: "
              className="form-control"
              placeholder="* Numer telefonu (format: 111-111-111)"
              aria-label="Numer telefonu"
              required
            />
          </div>

          <div className="col-12 mb-3">
            <textarea
              name="Wiadomość: "
              className="form-control"
              placeholder="* Twoja wiadomość"
              aria-label="Twoja wiadomość"
              required
            ></textarea>
          </div>
          <div className="col-12">
            <span className="d-flex justify-content-end">* Pola wymagane</span>
            <Button type="submit">Wyślij wiadomość</Button>
          </div>
        </form>
      </Column>

      <Column md={6} type="image" position="right">
        <StaticImage
          className="img"
          src="./img/bg5.jpg"
          alt="Mokra droga w górach z lasem"
        />
      </Column>
    </Section>
  );
}

export default Contact;
