import React, { useState } from "react";
import { Link } from "gatsby";
import Scrollspy from "react-scrollspy";

import "./navbar.scss";

import { BsList, BsX } from "react-icons/bs";

import Button from "../../components/button/button";

const Navigation = () => {
  const menuItem = [
    { id: "about", name: "Firma" },
    { id: "services", name: "Działalność" },
    { id: "team", name: "Zespół" },
    { id: "gallery", name: "Galeria" },
    { id: "contact", name: "Kontakt" },
    { id: "map", name: "Dojazd" },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenuIcon = () => setToggleMenu(false);
  const toggleMenuIcon = () => setToggleMenu(!toggleMenu);

  const componentRef = React.useRef();

  return (
    <nav id="nav" className="nav">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          aria-current="page"
          onClick={() => {
            closeMenuIcon();
            componentRef.current.classList.remove("show");
          }}
        >
          BMR Sp. z o. o.
        </Link>
        <Button
          extraClass="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            toggleMenuIcon();
            componentRef.current.classList.toggle("show");
          }}
        >
          {!toggleMenu && <BsList />}
          {toggleMenu && <BsX />}
        </Button>
        <div
          className={`collapse navbar-collapse`}
          id="navbarContent"
          ref={(node) => (componentRef.current = node)}
        >
          <Scrollspy
            className="navbar-nav"
            items={["about", "services", "team", "gallery", "contact", "map"]}
            currentClassName="active"
            offset={-150}
          >
            {menuItem.map((item, index) => (
              <li key={item.id + index} className="nav-item">
                <Link
                  to={"/#" + item.id}
                  className={`nav-links`}
                  onClick={() => {
                    closeMenuIcon();
                    componentRef.current.classList.remove("show");
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </Scrollspy>

          <div className="d-flex justify-content-center">
            <Link to="/#contact">
              <Button
                type="button"
                onClick={() => {
                  closeMenuIcon();
                  componentRef.current.classList.remove("show");
                }}
              >
                Skontaktuj się z nami
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
