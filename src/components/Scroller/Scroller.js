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
        <i className="fa fa-angle-down" />
      </div>
    </div>
  );
};

Scroller.defaultProps = {
  position: "",
  alignment: "",
  color: "light"
};

Scroller.propTypes = {
  position: PropTypes.string,
  alignment: PropTypes.string,
  color: PropTypes.string
};

export default Scroller;
