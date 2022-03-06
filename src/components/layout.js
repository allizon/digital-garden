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
import Sidebar from "./sidebar";
import Footer from "./footer";
import "../styles.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
        <main className="flex md:space-x-4">
          <Sidebar />
          <section className="content flex-auto p-4 md:text-xl leading-8 md:leading-10">
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
