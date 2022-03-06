/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
import "../styles.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleAndPageQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Menu />
      <div className="max-w-4xl px-4 m-0 mx-auto">
        <main className="w-full">
          <section
            className="content flex-auto p-4 
                       prose md:prose-lg prose-invert 
                       prose-a:text-purple-300 prose-a:font-bold
                       prose-a:underline 
                       prose-a:underline-offset-2 
                       prose-a:decoration-2 
                       prose-a:decoration-blue-200
                       prose-h2:mt-6 prose-h2:pt-6
                       prose-h2:md:mt-6 prose-h2:md:pt-6
                       max-w-none text-white"
          >
            {children}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
