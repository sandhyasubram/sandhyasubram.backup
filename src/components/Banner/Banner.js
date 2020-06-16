import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Banner.scss";

const Banner = (props) => {
  return (
    <div className="banner-wrapper">
      <div className="banner-image">
        <section className="section top-section">
          <div className="content-container content-theme-dark">
            <div className="content-inner">
              <div className="content-center">
                <h1> {props.bannerText} </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section bottom-section">
          <div className="content-container content-theme-light">
            <div className="content-inner">
              <div className="content-center">
                <div className="content-top">
                {props.links.map((link) => {
                  return (
                    <Link
                      key={link.icon}
                      to={link.link}
                      className="social-links"
                      target="_blank"
                    >
                      <i className={`scroll-icon fa fa-${link.icon}`} />
                    </Link>
                  );
                })}
                </div>
                <h1> {props.bannerText} </h1>
                <div className="content-bottom">
                    <div>A UX DESIGNER &nbsp;|&nbsp;  CAT PERSON  &nbsp;|&nbsp; ALSO A DOG PERSON</div> 
                    <div>Find me @tangenkitty over the web</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  bannerText: "",
  links: [],
};

Banner.propTypes = {
  bannerText: PropTypes.string,
  links: PropTypes.array,
};

export default Banner;
