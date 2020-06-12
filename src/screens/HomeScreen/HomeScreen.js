import React from "react";
import { Banner, Header } from "../../components";
import { Images, Strings } from "../../constants";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { pathname } = (this.props && this.props.location) || null;
    return (
      <div className="home-screen-wrapper">
        <Header path={pathname} />
        <Banner
          image={Images.SCREENS.HOME.PRIMARY_BANNER}
          bannerText={Strings.APPLICATION.SCREENS.HOME.BANNER_TEXT}
        />
      </div>
    );
  }
}
