import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Menu from "./menu";

const Header = ({ siteTitle }) => (
  <HeaderDiv className="bg-gradient-to-b from-purple-500 to-slate-700 header">
    <div className="flex max-w-4xl m-0 mx-auto">
      <div className="py-8 px-5 w-1/2">
        <h1 className="text-6xl m-0 font-extrabold">
          <Link to="/" className="text-white no-underline">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="hidden md:block md:w-1/2 md:place-self-end md:text-right">
        <Menu />
      </div>
    </div>
    <div className="md:hidden">
      <Menu />
    </div>
  </HeaderDiv>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const HeaderDiv = styled.div``;

export default Header;
