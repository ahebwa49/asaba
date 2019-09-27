import React, { Component } from "react";
import Router from "next/router";

class FooterProjects extends Component {
  constructor(props) {
    super(props);
    this.handleFooterProjectsClick = this.handleFooterProjectsClick.bind(this);
  }
  handleFooterProjectsClick() {
    Router.push({
      pathname: "/projects",
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
        flexBasis: "25%"
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
        height: "auto",
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
        onClick={this.handleFooterProjectsClick}
        id="footerlink"
      >
        <div style={styles.image}>
          <img width="50" src="../static/blackproject.png" />
        </div>
        <div style={styles.text}>
          <h2>PROJECTS</h2>
        </div>
      </div>
    );
  }
}

export default FooterProjects;
