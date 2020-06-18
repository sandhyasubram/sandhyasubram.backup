import React from "react";
import PropTypes from "prop-types";
import "./Container.scss";

const Container = (props) => {
  return (
    <div className={`container ${props.size} ${props.padding} ${props.height}`}>
      {props.children}
    </div>
  );
};

Container.defaultProps = {
  size: "",
  padding: "",
  height: "",
  links: [],
};

Container.propTypes = {
  size: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
  links: PropTypes.array,
};

export default Container;
