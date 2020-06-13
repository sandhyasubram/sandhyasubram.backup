import React from "react";
import { Banner, Header, Container, List, Scroller } from "../../components";
import { Images, Strings } from "../../constants";
import "./HomeScreen.scss";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderIntroText = () => {
    return (
      <div className="intro-text">
        {Strings.APPLICATION.SCREENS.HOME.INTRO_TEXT}
      </div>
    );
  };

  scrollToContent = () => {
    console.log("clicked");
  };

  render() {
    const { pathname } = (this.props && this.props.location) || null;
    const designs = Images.DESIGNS || {};
    const images = Object.values(designs) || [];
    console.log(images);
    return (
      <div className="home-screen-wrapper">
        <Header path={pathname} />
        <Banner
          image={Images.SCREENS.HOME.PRIMARY_BANNER}
          bannerText={Strings.APPLICATION.SCREENS.HOME.BANNER_TEXT}
        />
        <Scroller
          position="bottom"
          alignment="center"
          onClick={() => this.scrollToContent()}
        />
        <Container padding="padding-large">
          {this.renderIntroText()}
        </Container>
        <List data={images} />
      </div>
    );
  }
}
