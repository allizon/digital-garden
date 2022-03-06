import React from "react";
import PropTypes from "prop-types";

const StyledLink = ({ children, to }) => (
  <div>
    <a href={to}>{children}</a>
  </div>
);

const Footer = () => (
  <footer className="mt-8 bg-gray-900 text-white text-sm height-24 inset-x-0 bottom-0">
    <div className="max-w-4xl m-0 mx-auto py-8 px-6 flex">
      <div className="w-1/2">
        © {new Date().getFullYear()} Allison Holt.
        <br />
        Built with <a href="https://www.gatsbyjs.com">Gatsby</a>.
      </div>
      <div className="w-1/2 text-right">
        <StyledLink to="https://twitter.com/AllizonPrime">twitter</StyledLink>
        <StyledLink to="https://codepen.io/allizon24">codepen</StyledLink>
        <StyledLink to="https://instagram.com/allizon_prime">
          instagram (personal)
        </StyledLink>
        <StyledLink to="https://instagram.com/allizon_arts">
          instagram (art)
        </StyledLink>
        <StyledLink to="https://github.com/allizon">github</StyledLink>
        <StyledLink to="https://www.duolingo.com/profile/Allizon24">
          duolingo
        </StyledLink>
      </div>
    </div>
  </footer>
);

StyledLink.propTypes = {
  to: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Footer;
