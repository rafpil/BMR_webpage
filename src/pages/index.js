import * as React from "react"

import Seo from "../components/seo"
import "../styles_global/styles.scss";

// page elements
import About from "../page-elements/about/about";


const IndexPage = () => (
  <>
    <Seo title="Home" />
    <About />
  </>
)

export default IndexPage
