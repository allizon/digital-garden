import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Menu from "./menu";

const Header = ({ siteTitle }) => (
  <header className="bg-gradient-to-b from-purple-500 to-slate-700">
    <div className="flex max-w-4xl m-0 mx-auto">
      <div className="py-8 px-5 w-1/2">
        <h1 className="text-5xl m-0 font-extrabold">
          <Link to="/" className="text-white">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="w-1/2 place-self-end text-right">
        <Menu />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
