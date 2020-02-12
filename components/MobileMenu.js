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

  render() {
    return (
      <div className="mobileMenu">
        <div className="listItems">
          <>
            <div className="listItem">
              <Link href="/profile">
                <a style={{ textDecoration: "none", color: "white" }}>
                  Profile
                </a>
              </Link>
            </div>
            <div className="listItem">
              <Link href="/visualizations">
                <a style={{ textDecoration: "none", color: "white" }}>
                  Visualizations
                </a>
              </Link>
            </div>
            <div className="listItem">
              <Link href="https://medium.com/@ahebwa49">
                <a style={{ textDecoration: "none", color: "white" }}>Blog</a>
              </Link>
            </div>
            <div className="listItem">
              <Link href="/stack">
                <a style={{ textDecoration: "none", color: "white" }}>Stack</a>
              </Link>
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
