import React from "react";
import { Header } from "../../components";
import "./AboutScreen.scss";

export default class AboutScreen extends React.Component {
  render() {
    const { pathname } = (this.props && this.props.location) || null;
    return (
      <div className="about-me-wrapper">
        <Header path={pathname} />
        About Me
      </div>
    );
  }
}
