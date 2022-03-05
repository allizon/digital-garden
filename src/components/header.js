import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header className="bg-gradient-to-b from-purple-300 to-purple-900 mb-8 border-b-8 border-black">
    <div className="max-w-4xl m-0 mx-auto py-8 px-5">
      <h1 className="text-5xl m-0 font-extrabold">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
