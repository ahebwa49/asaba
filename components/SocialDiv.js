import React, { Component } from "react";
import Router from "next/router";

class SocialDiv extends Component {
  constructor(props) {
    super(props);
    this.handleFollowClick = this.handleFollowClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }
  handleFollowClick() {
    Router.push({
      pathname: "https://twitter.com/ahebwa49",
      query: {}
    });
  }
  handleProfileClick() {
    Router.push({
      pathname: "/profile",
      query: {}
    });
  }
  render() {
    const styles = {
      social: {
        display: "grid",
        paddingLeft: "5%"
      }
    };
    return (
      <div className="social" style={styles.social}>
        <div className="follow" id="follow" onClick={this.handleFollowClick}>
          FOLLOW
        </div>
        <div
          className="profileb"
          id="profileb"
          onClick={this.handleProfileClick}
        >
          PROFILE
        </div>
      </div>
    );
  }
}

export default SocialDiv;
