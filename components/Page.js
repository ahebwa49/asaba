import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import Nav from "./Nav";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleMenuButtonClick() {
    this.setState({ menuOpen: !this.state.menuOpen }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ menuOpen: !this.state.menuOpen }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }
  render() {
    return (
      <div className="container">
        <Meta />
        <Nav menuOpen={this.state.menuOpen} closeMenu={this.closeMenu} />
        <Header
          handleMenuButtonClick={this.handleMenuButtonClick}
          menuOpen={this.state.menuOpen}
        />
        {this.props.children}
      </div>
    );
  }
}
export default Page;
