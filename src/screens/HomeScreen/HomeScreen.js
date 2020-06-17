import React from "react";
import { Banner, Filter, Header, List, Scroller } from "../../components";
import { Images, Strings } from "../../constants";
import "./HomeScreen.scss";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollToTopButton: "",
      designs: []
    };
    this.designs = React.createRef();
    this.applyFilter = this.applyFilter.bind(this);
  }

  /**** LIFE CYCLE LISTENERS - START ****/

  componentDidMount = () => {
    this.setState({
      designs: Object.values(Images.DESIGNS) || []
    });
    window.addEventListener("scroll", this.checkScroller);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.checkScroller);
  };

  /**** LIFE CYCLE LISTENERS - END ****/

  /**** COMPONENT HELPER FUNCTIONS - START ****/

  checkScroller = event => {
    if (
      event.target.scrollingElement.scrollTop >= 1000 &&
      this.state.scrollToTopButton !== "active"
    ) {
      this.setState({
        scrollToTopButton: "active"
      });
    } else if (
      event.target.scrollingElement.scrollTop < 600 &&
      this.state.scrollToTopButton === "active"
    ) {
      this.setState({
        scrollToTopButton: ""
      });
    }
  };

  scrollToTop = () => {
    window.scroll({ left: 0, top: 0, behavior: "smooth" });
  };

  applyFilter = filter => {
    if (this.designs.current) {
      let top = this.designs.current.offsetTop;
      window.scroll({ left: 0, top: top, behavior: "smooth" });
    }
    var designs = [];
    if (filter === Strings.IMAGE_CATEGORY.ALL.FILTER) {
      designs = Images.DESIGNS;
    } else {
      designs = Images.DESIGNS.filter(design =>
        design.CATEGORY.includes(filter)
      );
    }
    this.setState({ designs });
  };

  /**** COMPONENT HELPER FUNCTIONS - END ****/

  render() {
    const { pathname } = (this.props && this.props.location) || null;

    return (
      <div className="home-screen-wrapper">
        <Header path={pathname} />
        <div className="banner-container">
          <Banner
            bannerText={Strings.APPLICATION.SCREENS.HOME.BANNER_TEXT}
            links={Strings.APPLICATION.SOCIAL}
          />
        </div>
        <div>
          <Filter
            data={Object.values(Strings.IMAGE_CATEGORY)}
            onClick={filter => this.applyFilter(filter)}
          />
          <div ref={this.designs}>
            <List data={this.state.designs} filter={this.state.filter} />
          </div>
        </div>
        <div
          className={`scroll-to-top-wrapper ${this.state.scrollToTopButton}`}
        >
          <Scroller
            type="fa-chevron-up"
            onClick={() => {
              this.scrollToTop();
            }}
          />
        </div>
        <div className="footer"> That's all folks! </div>
      </div>
    );
  }
}
