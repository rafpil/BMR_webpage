import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="not-found-wraper"> 
      <h1>
        Upss.. Nie znaleziono strony.
        <br />
        <Link to="/">Przejdź na stronę główną</Link>
      </h1>
    </div>
  </Layout>
);

export default NotFoundPage;
