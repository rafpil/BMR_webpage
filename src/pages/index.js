import * as React from "react"

import Seo from "../components/seo"
import "../styles_global/styles.scss";

import Layout from "../components/layout/layout";

// page elements
import About from "../page-elements/about/about";
import Services from "../page-elements/services/services";
import Team from "../page-elements/team/team";
import Map from "../page-elements/map/map";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <About />
    <Services />
    <Team />
    <Map />
  </Layout>
)

export default IndexPage
