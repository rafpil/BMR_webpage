import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import "../styles_global/styles.scss";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button className="btn btn-danger">tset</button>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </>
)

export default IndexPage
