import React from "react";
import PropTypes from "prop-types";
import "./Tile.scss";

const Tile = props => {
  const { TITLE, IMAGE_SOURCE } = props.data;
  return (
    <div className="tile-wrapper">
      <div className="tile-content">
        {/* TODO */}
        <img className="tile-image" src={IMAGE_SOURCE} alt={TITLE} />
        <div className="tile-overlay">
          <div className="hover-text">
            {TITLE}
          </div>
        </div>
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
