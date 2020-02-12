import React, { Component } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Meta from "./Meta";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false
    };
  }

  handleShowMobileMenu = () => {
    const { showMobileMenu } = this.state;
    this.setState(
      {
        showMobileMenu: !showMobileMenu
      },
      () => {
        document
          .querySelector(".mobileMenu")
          .addEventListener("click", this.handleCloseMobileMenu);
      }
    );
  };

  handleCloseMobileMenu = () => {
    this.setState({
      showMobileMenu: false
    });
  };

  render() {
    const { showMobileMenu } = this.state;
    return (
      <div className="container">
        <Meta />
        {/* <Nav menuOpen={this.state.menuOpen} closeMenu={this.closeMenu} /> */}
        {showMobileMenu && (
          <MobileMenu
            handleShowMobileMenu={this.handleShowMobileMenu}
            handleCloseMobileMenu={this.handleCloseMobileMenu}
          />
        )}
        <Header handleShowMobileMenu={this.handleShowMobileMenu} />
        {this.props.children}
      </div>
    );
  }
}
export default Page;
