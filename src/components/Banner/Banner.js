import React, {useRef} from "react";
import PropTypes from "prop-types";
import "./Banner.scss";
import { Scroller, SocialLinks } from "../../components";

const Banner = props => {
  const content = useRef(null);

  const scrollToContent = () => {
    console.debug("Scroll Content :: ", content);
    if (content.current) {
      window.scroll({
        left: 0,
        top: content.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="banner-wrapper">
      <div className="banner-image">
        <section className="section top-section">
          <div className="content-container content-theme-dark">
            <div className="content-inner">
              <div className="content-center">
                <h1>
                  {` ${props.bannerText} `}
                </h1>
              </div>
            </div>
          </div>
          <div className="banner-scroller">
            <Scroller onClick={() => {scrollToContent()}} />
          </div>
        </section>

        <section className="section bottom-section" ref={content}>
          <div className="content-container content-theme-light">
            <div className="content-inner">
              <div className="content-center">
                <div className="text"> 
                  <div className="text-top">
                    {props.links.map(link => {
                      return (
                        <SocialLinks
                          key={link.icon}
                          icon={link.icon}
                          link={link.link}
                          target="_blank"
                        />
                      );
                    })}
                  </div>
                  <h1>
                    {" "}{props.bannerText}{" "}
                  </h1>
                  <div className="text-bottom">
                    <div>
                      UX DESIGNER &nbsp;|&nbsp; CAT PERSON &nbsp;|&nbsp; ALSO A
                      DOG PERSON
                    </div>
                    <div>Find me @tangentkitty over the web</div>
                  </div>
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
  links: []
};

Banner.propTypes = {
  bannerText: PropTypes.string,
  links: PropTypes.array
};

export default Banner;
