import * as React from "react";
import PropTypes from "prop-types";

import Navigation from "../../page-elements/navbar/navbar";
import Footer from "../../page-elements/footer/footer";
import Copyright from "../../page-elements/copyright/copyright";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
        <main>{children}</main>
      <footer>
        <Footer />
        <Copyright />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
