import React from "react";
import PropTypes from "prop-types";
import "./Tile.scss";

const Tile = props => {
  const { TITLE, IMAGE_SOURCE, LINK } = props.data;
  return (
    <div className="tile-wrapper">
      <div className="tile-content">
        {/* TODO */}
        <img
          className="tile-image"
          src={require(`../../assets/design/${IMAGE_SOURCE}`)}
          alt={TITLE}
        />
        <div className="tile-overlay">
          <a
            className="hover-text"
            href={LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {TITLE}
          </a>
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
