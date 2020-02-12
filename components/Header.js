import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

import MenuButton from "./MenuButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBlogClick = () => {
    Router.push({
      pathname: "https://medium.com/@ahebwa49",
      query: {}
    });
  };
  render() {
    const styles = {
      header: {
        visibility: "hidden"
      }
    };
    return (
      <div className="header" id="headerBar">
        <div className="logo">
          <a style={{ color: "black", textDecoration: "none" }} href="/">
            ASABAHEBWA
          </a>
        </div>
        <div className="nav" onClick={this.props.handleMenuButtonClick}>
          <MenuButton
            handleShowMobileMenu={this.props.handleShowMobileMenu}
            
          />
        </div>
        <div className="desktop-nav">
          <Link href="/profile">
            <div
              className="desktop-nav-item"
              style={{
                display: "inline",
                marginRight: "15px",
                cursor: "pointer"
              }}
            >
              profile
            </div>
          </Link>

          <Link href="/visualizations">
            <div
              className="desktop-nav-item"
              style={{
                display: "inline",
                marginRight: "15px",
                cursor: "pointer"
              }}
            >
              Visualizations
            </div>
          </Link>

          <div
            className="desktop-nav-item"
            onClick={this.handleBlogClick}
            style={{
              display: "inline",
              marginRight: "15px",
              cursor: "pointer"
            }}
          >
            Blog
          </div>

          <Link href="/stack">
            <div
              className="desktop-nav-item"
              style={{
                display: "inline",
                marginRight: "15px",
                cursor: "pointer"
              }}
            >
              Stack
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
