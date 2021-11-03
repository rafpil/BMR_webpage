import * as React from "react"

import Seo from "../components/seo"
import "../styles_global/styles.scss";

import Layout from "../components/layout/layout";

// page elements
import Hero from "../page-elements/hero/hero";
import About from "../page-elements/about/about";
import Services from "../page-elements/services/services";
import Team from "../page-elements/team/team";
import Gallery from "../page-elements/gallery/gallery";
import Map from "../page-elements/map/map";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero
        firstLine="BMR Sp.&nbsp;z&nbsp;o.&nbsp;o."
        secondLine="Budujemy nowoczesne drogi"
    />
    <About />
    <Services />
    <Team />
    <Gallery />
    <Map />
  </Layout>
)

export default IndexPage
