/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
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
      <LayoutDiv className="max-w-4xl">
        <main className="flex md:space-x-4">
          <section
            className="content flex-auto p-4
                       prose md:prose-lg prose-invert
                       prose-a:text-purple-300 prose-a:font-bold
                       prose-a:underline
                       prose-a:underline-offset-2
                       prose-a:decoration-2
                       prose-a:decoration-blue-200
                       max-w-none text-white"
          >
            {children}
          </section>
        </main>
      </LayoutDiv>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const LayoutDiv = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
`;

export default Layout;
