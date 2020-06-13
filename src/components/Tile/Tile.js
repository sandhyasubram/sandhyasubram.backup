import React from "react";
import PropTypes from "prop-types";
import "./Tile.scss";

const Tile = props => {
  const { TITLE, IMAGE_SOURCE } = props.data;
  return (
    <div className="tile-wrapper">
      <div className="tile-content">
        <img className="tile-image" src={IMAGE_SOURCE} alt={TITLE} />
        <div className="hover-text">
          {TITLE}
        </div>
        <div className="tile-overlay"></div>
      </div>
    </div>
  );
};

Tile.defaultProps = {
  data: {}
};

Tile.propTypes = {
  data: PropTypes.object.isRequired
};

export default Tile;
