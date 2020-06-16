import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem/MenuItem";
import { Strings } from "../../../constants";
import "./Menu.scss";

const Menu = props => {
  return (
    <ul className="menu">
      <MenuItem
        title="My Work"
        path={Strings.APPLICATION.ROUTES.HOME}
        active={props.path === Strings.APPLICATION.ROUTES.HOME ? "active" : ""}
      />
      <MenuItem
        title="Know Me!"
        path={Strings.APPLICATION.ROUTES.ABOUT}
        active={props.path === Strings.APPLICATION.ROUTES.ABOUT ? "active" : ""}
      />
    </ul>
  );
};

Menu.defaultProps = {
  path: ""
};

Menu.propTypes = {
  path: PropTypes.string
};

export default Menu;
