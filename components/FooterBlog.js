import React, { Component } from "react";
import Router from "next/router";

class FooterBlog extends Component {
  constructor(props) {
    super(props);
    this.handleFooterBlogClick = this.handleFooterBlogClick.bind(this);
  }
  handleFooterBlogClick() {
    Router.push({
      pathname: "https://medium.com/@ahebwa49",
      query: {}
    });
  }
  render() {
    const styles = {
      container: {
        display: "flex",
        //border: "1px solid red",
        height: "auto",
        fontFamily: "dosis",
        cursor: "pointer"
        //flexDirection: "column",
      },
      text: {
        fontFamily: "dosis",
        fontSize: "1em",
        justifySelf: "center",
        color: "#444444",
        flexBasis: "25%",
        justifyContent: "flexEnd"
        //gridColumn: "2/3",
        //paddingLeft: "10%",
        //flex: "3 1 60%",
      },
      image: {
        flexBasis: "10%",
        justifyContent: "center",
        justifySelf: "center",
        alignItems: "center",
        alignSelf: "center",
        //border: "1px solid red",
        paddingLeft: "5%"
        //flex: "1 2 40%",
        //display: "grid",
        //gridColumn: "1/2",
        //justifyItems: "center",
      }
    };
    return (
      <div
        style={styles.container}
        onClick={this.handleFooterBlogClick}
        id="footerlink"
      >
        <div style={styles.image}>
          <img width="50" src="../static/blackblog.png" />
        </div>
        <div style={styles.text}>
          <h2>BLOG</h2>
        </div>
      </div>
    );
  }
}

export default FooterBlog;
