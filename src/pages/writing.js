import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Writing = () => (
  <Layout>
    <h1>Writing</h1>
    <ul>
      <li>
        <Link to="/writing/review-birds-of-prey">Harley</Link>
      </li>
      <li>
        <Link to="/writing/my-dad">My dad</Link>
      </li>
    </ul>
  </Layout>
);

export default Writing;
