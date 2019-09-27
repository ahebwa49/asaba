import React, { Component } from "react";

import MenuButton from "./MenuButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = {
      header: {
        visibility: "hidden"
      }
    };
    return (
      <div className="header" id="headerBar" >
        <div className="logo">
          <a style={{ color: "black", textDecoration: "none" }} href="/">
            ASABAHEBWA
          </a>
        </div>
        <div className="nav" onClick={this.props.handleMenuButtonClick}>
          <MenuButton
            handleMenuButtonClick={this.props.handleMenuButtonClick}
            menuOpen={this.props.menuOpen}
          />
        </div>
      </div>
    );
  }
}
export default Header;
