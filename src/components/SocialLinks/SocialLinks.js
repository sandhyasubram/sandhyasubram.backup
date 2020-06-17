import React from "react";
import PropTypes from "prop-types";
import "./SocialLinks.scss";

const SocialLinks = props => {
  return (
    <a
      key={props.icon}
      href={props.link}
      className="social-links"
      target={props.target}
      rel="noopener noreferrer"
    >
      <i className={`scroll-icon fa fa-${props.icon}`} />
    </a>
  );
};

SocialLinks.defaultProps = {
  icon: "",
  link: "",
  target: "_blank"
};

SocialLinks.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  target: PropTypes.string
};

export default SocialLinks;
