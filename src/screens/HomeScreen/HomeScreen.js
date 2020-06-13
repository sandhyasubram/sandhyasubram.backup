import React from "react";
import { Banner, Header, Container, List, Scroller } from "../../components";
import { Images, Strings } from "../../constants";
import "./HomeScreen.scss";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  renderIntroText = () => {
    return (
      <div className="intro-text">
        {Strings.APPLICATION.SCREENS.HOME.INTRO_TEXT}
      </div>
    );
  };

  scrollToContent = () => {
    if (this.myRef.current) {
      window.scrollTo({
        left: 0,
        top: this.myRef.current.offsetTop,
        behavior: "smooth"
      });
    }
  };

  render() {
    const { pathname } = (this.props && this.props.location) || null;
    const designs = Images.DESIGNS || {};
    const images = Object.values(designs) || [];
    return (
      <div className="home-screen-wrapper">
        <Header path={pathname} />
        <div className="banner-container">
          <Banner
            image={Images.SCREENS.HOME.PRIMARY_BANNER}
            bannerText={Strings.APPLICATION.SCREENS.HOME.BANNER_TEXT}
          />
          <Scroller
            position="bottom"
            alignment="center"
            onClick={() => this.scrollToContent()}
          />
        </div>
        <div ref={this.myRef}>
          <Container padding="padding-large">
            {this.renderIntroText()}
          </Container>
        </div>
        <List data={images} />
      </div>
    );
  }
}
