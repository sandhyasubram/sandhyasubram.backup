import React from "react";

import PropTypes from "prop-types";
import "./Scroller.scss";

const Scroller = props => {
  return (
    <div className={`scroller-wrapper ${props.position}`}>
      <div
        className={`scroller ${props.alignment} ${props.color}`}
        onClick={() => {
          props.onClick();
        }}
      >
        <i className={`scroll-icon fa ${props.type}`} />
      </div>
    </div>
  );
};

Scroller.defaultProps = {
  type: "fa-angle-down",
  position: "",
  alignment: "",
  color: "light"
};

Scroller.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.string,
  alignment: PropTypes.string,
  color: PropTypes.string
};

export default Scroller;
