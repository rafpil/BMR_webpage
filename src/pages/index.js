import * as React from "react"

import Seo from "../components/seo"
import "../styles_global/styles.scss";

// page elements
import About from "../page-elements/about/about";
import Services from "../page-elements/services/services";



const IndexPage = () => (
  <>
    <Seo title="Home" />
    <About />
    <Services />
  </>
)

export default IndexPage
