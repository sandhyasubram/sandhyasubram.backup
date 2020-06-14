import React from "react";

import PropTypes from "prop-types";
import "./Scroller.scss";

const Scroller = props => {
  return (
    <div className={`scroller-wrapper`}>
      <div
        className={`scroller ${props.color}`}
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
  color: "light"
};

Scroller.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Scroller;
