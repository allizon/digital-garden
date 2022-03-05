import * as React from "react";
import { Link } from "gatsby";

const Menu = () => (
  <div className="py-1 mb-6">
    <div className="max-w-4xl m-0 mx-auto px-5">
      <Link to="/tech-stuff" className="pr-3">
        Tech Stuff
      </Link>
      <Link to="/art-stuff" className="pr-3">
        Art Stuff
      </Link>
      <Link to="/movie-stuff">Movie Stuff</Link>
    </div>
  </div>
);

export default Menu;
