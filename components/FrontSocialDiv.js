import React, { Component } from "react";
import Router from "next/router";
import Link from "next/link";

class FrontSocialDiv extends Component {
  constructor(props) {
    super(props);
    this.handleTwitterClick = this.handleTwitterClick.bind(this);
    this.handleStackClick = this.handleStackClick.bind(this);
    this.handleGitHubClick = this.handleGitHubClick.bind(this);
    this.handleLinkedInClick = this.handleLinkedInClick.bind(this);
  }
  handleTwitterClick() {
    Router.push({
      pathname: "https://twitter.com/ahebwa49",
      query: {}
    });
  }
  handleStackClick() {
    Router.push({
      pathname: "https://stackoverflow.com/users/9640709/ahebwa49",
      query: {}
    });
  }
  handleGitHubClick() {
    Router.push({
      pathname: "https://github.com/ahebwa49",
      query: {}
    });
  }
  handleLinkedInClick() {
    Router.push({
      pathname: "https://www.linkedin.com/in/livingstone-asabahebwa-290594108/",
      query: {}
    });
  }
  render() {
    const email = "ahebwa49@gmail.com";
    const styles = {
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 5%"
      },
      social: {
        cursor: "pointer"
      }
    };
    return (
      <div className="social" style={styles.container}>
        <img
          style={styles.social}
          width="50"
          src="../static/twitter.png"
          onClick={this.handleTwitterClick}
        />
        <img
          width="50"
          src="../static/stack-overflow.png"
          style={styles.social}
          onClick={this.handleStackClick}
        />
        <img
          width="50"
          src="../static/github.png"
          style={styles.social}
          onClick={this.handleGitHubClick}
        />
        {/**<Link
          href={`mailto:${email}?subject=Mail from https://www.asabahebwa.com&body=Body goes here`}
        >
          <a textDecoration="none">
            <img width="50" src="../static/email.png" style={styles.social} />
          </a>
        </Link> */}
        <img
          width="50"
          src="../static/linkedin.png"
          style={styles.social}
          onClick={this.handleLinkedInClick}
        />
      </div>
    );
  }
}

export default FrontSocialDiv;
