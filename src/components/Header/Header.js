import React, { useState } from "react";
import PropTypes from "prop-types";
import Menu from "./Menu/Menu";
import "./Header.scss";

const Header = props => {
  const [mobileFlag, setMobileFlag] = useState(false);
  const [mobileMenu, setMobileMenu] = useState("fa fa-bars");
  const [overlayMenu, setOverlayMenu] = useState("");

  const renderMobileMenu = () => {
    document.querySelector("body").classList.toggle("menu-overlay");
    console.log(!mobileFlag);
    setMobileFlag(!mobileFlag);
    mobileMenu === "fa fa-close"
      ? setMobileMenu("fa fa-bars")
      : setMobileMenu("fa fa-close");
    overlayMenu === "active" ? setOverlayMenu("") : setOverlayMenu("active");
  };

  return (
    <div className="header-wrapper">
      <div className="menu-wrapper">
        <Menu path={props.path} />
      </div>
      <div className="hamburger-menu">
        <i onClick={() => renderMobileMenu()} className={mobileMenu} />
      </div>
      <div className={`menu-overlay ${overlayMenu}`}>
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
