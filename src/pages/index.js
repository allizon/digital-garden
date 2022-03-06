import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "../styles.css";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <p>I guess this should be an introduction to Who I Am. And mention that I'm creating this site out in the open</p>

    <ul className="list-disc mb-8">
      <li>Fave articles (blog posts, movie reviews, whatever)</li>
      <li>
        <Link to="/review-birds-of-prey">A sample MDX article</Link>
      </li>
      <li>Artwork</li>
      <li>Tech things</li>
      <li>Stuff about processes</li>
      <li>
        <Link to="/colophon">Colophon</Link>
      </li>
    </ul>

    <p>
      Still lots of stuff that can be imported from{" "}
      <code>~/code/allizone/_posts</code>.
    </p>

    <p>
      Remember to try to lean on the gatsby and tailwind config files where
      appropriate!
    </p>

    <p className="mt-8 pt-8 border-t-2">
      <Link to="/using-typescript/">Go to Using TypeScript</Link> <br />
    </p>
  </Layout>
);

export default IndexPage;
