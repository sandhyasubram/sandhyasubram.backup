import React from "react";
import { Banner, Header, Container, List, Scroller } from "../../components";
import "./AboutScreen.scss";

export default class AboutScreen extends React.Component {
  render() {
    const { pathname } = (this.props && this.props.location) || null;
    return (
      <div className="about-me-wrapper">
        <Header path={pathname} />
        <Container padding="padding-medium" height="full">
          <div class="text-wrap">
            <div>Sorry! This section is under construction. Please check back later!</div>
            <div>Hello there! I'm Sandhya. I design User Experiences for a living. </div>
            <div>Social Links go here </div>
          </div>
          <div class="gallery-wrap">
            <div class="item item-1"></div>
            <div class="item item-2"></div>
            <div class="item item-3"></div>  
            <div class="item item-4"></div>
          </div>
        </Container>
      </div>
    );
  }
}
