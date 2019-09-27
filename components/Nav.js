import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { relative } from "path";

/* Open 
function openNav() {
  console.log("been clicked");
  //document.getElementById("myNav").style.height = "100%";
}
*/

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleBlogClick = this.handleBlogClick.bind(this);
  }
  handleBlogClick(event) {
    Router.push({
      pathname: "https://medium.com/@ahebwa49",
      query: {}
    });
  }
  render() {
    const styles = {};
    return (
      <div>
        {this.props.menuOpen ? (
          // the overlay
          <div id="myNav" className="overlay">
            <div className="close" id="close">
              <a
                href="javascript:void(0)"
                id="closebutton"
                className="closebtn"
                onClick={this.props.closeMenu}
                style={{ textDecoration: "none" }}
              >
                <strong>&times;</strong>
              </a>
            </div>
            <Link href="/">
              <div id="name" className="name">
                asabahebwa.com
              </div>
            </Link>
            <Link href="/profile">
              <div id="profile" className="profile">
                <div>
                  <img
                    width="100"
                    src="../static/profile.png"
                    alt="project image"
                  />
                  <br />
                  <strong>PROFILE</strong>
                </div>
              </div>
            </Link>
            <Link href="projects">
              <div id="projects" className="projects">
                <div>
                  <img
                    width="100"
                    src="../static/project.png"
                    alt="project image"
                  />
                  <br />
                  <strong>PROJECTS</strong>
                </div>
              </div>
            </Link>

            <div id="notes" className="notes" onClick={this.handleBlogClick}>
              <div>
                <img width="100" src="../static/blog.png" alt="blog image" />
                <br />
                <strong>BLOG</strong>
              </div>
            </div>

            <Link href="/stack">
              <div id="stack" className="stack">
                <div>
                  <img
                    width="100"
                    src="../static/stack.png"
                    alt="project image"
                  />
                  <br />
                  <strong>STACK</strong>
                </div>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Nav;
