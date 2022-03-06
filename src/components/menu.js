import * as React from "react";
import { Link } from "gatsby";

const StyledLink = ({ children, to }) => (
  <Link to={to} className="pr-3">
    {children}
  </Link>
);

const Menu = () => (
  <div className="py-1 mb-6">
    <div className="max-w-4xl m-0 mx-auto px-5">
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/tech-stuff">Tech</StyledLink>
      <StyledLink to="/art-stuff">Art</StyledLink>
      <StyledLink to="/movie-stuff">Writing</StyledLink>
    </div>
  </div>
);

export default Menu;
