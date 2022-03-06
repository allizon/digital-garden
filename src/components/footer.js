import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="mt-8 bg-gray-800 text-white text-sm height-24 inset-x-0 bottom-0">
    <div className="max-w-4xl m-0 mx-auto py-8 px-5 flex">
      <div className="w-1/2">
        © {new Date().getFullYear()} Allison Holt.
        <br />
        Built with <a href="https://www.gatsbyjs.com">Gatsby</a>.
      </div>
      <div className="w-1/2 text-right">
        <a href="https://twitter.com/AllizonPrime">twitter</a>
        <br />
        <a href="https://instagram.com/allizon_prime">instagram (personal)</a>
        <br />
        <a href="https://instagram.com/allizon_arts">instagram (art)</a>
        <br />
        <a href="https://github.com/allizon">github</a>
        <br />
        <a href="https://www.duolingo.com/profile/Allizon24">duolingo</a>
      </div>
    </div>
  </footer>
);

export default Footer;
