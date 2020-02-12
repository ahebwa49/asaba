import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import MenuButtonClose from "./MenuButtonClose";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
  }

  handleBlogClick = () => {
    Router.push({
      pathname: "https://medium.com/@ahebwa49",
      query: {}
    });
  };

  handleProfileClick = () => {
    Router.push({
      pathname: "/profile",
      query: {}
    });
  };

  handleStackClick = () => {
    Router.push({
      pathname: "/stack",
      query: {}
    });
  };

  handleVisualizationsClick = () => {
    Router.push({
      pathname: "/visualizations",
      query: {}
    });
  };

  render() {
    return (
      <div className="mobileMenu">
        <div className="listItems">
          <>
            <div className="listItem" onClick={this.handleProfileClick}>
              Profile
            </div>
            <div className="listItem" onClick={this.handleVisualizationsClick}>
              Visualizations
            </div>
            <div className="listItem">
              <div onClick={this.handleBlogClick}>Blog</div>
            </div>
            <div className="listItem" onClick={this.handleStackClick}>
              Stack
            </div>
          </>
        </div>
        <div className="close">
          <MenuButtonClose
            handleShowMobileMenu={this.props.handleShowMobileMenu}
          />
        </div>
      </div>
    );
  }
}
export default MobileMenu;
