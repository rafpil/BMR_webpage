import * as React from "react"

import Seo from "../components/seo"
import "../styles_global/styles.scss";

// page elements
import About from "../page-elements/about/about";
import Services from "../page-elements/services/services";
import Team from "../page-elements/team/team";


const IndexPage = () => (
  <>
    <Seo title="Home" />
    <About />
    <Services />
    <Team />
  </>
)

export default IndexPage
