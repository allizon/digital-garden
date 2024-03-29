import React from "react";
import PropTypes from "prop-types";

const BlogPostHeader = ({ title, date }) => (
  <div className="mb-4">
    <div className="text-sm bold">{title}</div>
    <div className="text-xs lowercase text-gray-50">
      {"//"} posted {date}
    </div>
  </div>
);

BlogPostHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};

export default BlogPostHeader;
