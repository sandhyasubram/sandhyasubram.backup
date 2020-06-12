import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = props => {
  return (
    <div className="banner-wrapper">
      <div
        className="banner-image"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="banner-text">
          {props.bannerText.map((text, index) => {
            return (
              <div className="inner-content" key={index}>
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  image: "",
  bannerText: []
};

Banner.propTypes = {
  image: PropTypes.string,
  bannerText: PropTypes.array
};

export default Banner;
