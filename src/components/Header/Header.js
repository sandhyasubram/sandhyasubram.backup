import React from "react";
import PropTypes from "prop-types";
import Menu from "./Menu/Menu";
import "./Header.scss";

const Header = props => {
  return (
    <div className="header-wrapper">
      <div className="menu-wrapper">
        <Menu path={props.path} />
      </div>
    </div>
  );
};

Header.defaultProps = {
  path: ""
};

Header.propTypes = {
  path: PropTypes.string
};

export default Header;
