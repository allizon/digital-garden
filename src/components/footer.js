import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="mt-8 bg-gray-800 text-white">
    <div className="max-w-4xl m-0 mx-auto py-8 px-5">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
);

export default Footer;
