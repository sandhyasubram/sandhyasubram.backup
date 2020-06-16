import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = (props) => {
  let className = "menu-item";
  if (props.active) className += " active";
  return (
    <li className={className}>
      <Link to={props.path} className={props.active}>
        <span>{props.title}</span>
      </Link>
    </li>
  );
};

MenuItem.defaultProps = {
  active: "",
  title: "",
  path: "",
};

MenuItem.propTypes = {
  active: PropTypes.string,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default MenuItem;
