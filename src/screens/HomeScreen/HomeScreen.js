import React from "react";
import { Banner, Header, Container, List, Scroller } from "../../components";
import { Images, Strings } from "../../constants";
import "./HomeScreen.scss";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollToTopButton: "",
    };
    this.content = React.createRef();
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  /**** LIFE CYCLE LISTENERS - START ****/

  componentDidMount = () => {
    window.addEventListener("scroll", this.checkScroller);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.checkScroller);
  };

  /**** LIFE CYCLE LISTENERS - END ****/

  /**** COMPONENT HELPER FUNCTIONS - START ****/

  checkScroller = (event) => {
    if (event.target.scrollingElement.scrollTop >= 600) {
      this.setState({
        scrollToTopButton: "active",
      });
    } else if (this.state.scrollToTopButton === "active") {
      this.setState({
        scrollToTopButton: "",
      });
    }
  };

  scrollToContent = () => {
    if (this.content.current) {
      window.scroll({
        left: 0,
        top: this.content.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  scrollToTop = () => {
    window.scroll({ left: 0, top: 0, behavior: "smooth" });
  };

  /**** COMPONENT HELPER FUNCTIONS - END ****/

  render() {
    const { pathname } = (this.props && this.props.location) || null;
    const designs = Images.DESIGNS || {};
    const images = Object.values(designs) || [];
    return (
      <div className="home-screen-wrapper">
        <Header path={pathname} />
        <div className="banner-container">
          <Banner
            bannerText={Strings.APPLICATION.SCREENS.HOME.BANNER_TEXT}
            links={Strings.APPLICATION.SOCIAL}
          />
          {/* <div className="banner-scroller">
            <Scroller onClick={() => this.scrollToContent()} />
          </div> */}
        </div>
        <div ref={this.content}>
          {/* <Container padding="padding-medium" links={Strings.APPLICATION.SOCIAL}/> */}
        </div>
        <List data={images} />
        <div
          className={`scroll-to-top-wrapper ${this.state.scrollToTopButton}`}
        >
          <Scroller
            type="fa-angle-up"
            onClick={() => {
              this.scrollToTop();
            }}
          />
        </div>
      </div>
    );
  }
}
