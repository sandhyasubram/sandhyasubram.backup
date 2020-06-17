import React from "react";

import PropTypes from "prop-types";
import "./Scroller.scss";

const Scroller = props => {
  let type = props.type;
  let markup;
  if(type !== 'down') {
    markup = <i className={`scroll-icon fa ${props.type}`} />
  } else {
    markup = <div className = "scroll-text"> <i className={`scroll-icon fa fa-chevron-down`} /> </div>
  }
  return (
    <div className={`scroller-wrapper`}>
      <div
        className={`scroller ${props.color}`}
        onClick={() => {
          props.onClick();
        }}
      > 
      { markup }
      </div>
    </div>
  );
};

Scroller.defaultProps = {
  type: "down",
  color: "light"
};

Scroller.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Scroller;
