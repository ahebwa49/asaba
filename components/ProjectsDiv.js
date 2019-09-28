import React, { Component } from "react";
import Router from "next/router";
import Link from "next/link";

class ProjectsDiv extends Component {
  constructor(props) {
    super(props);
    this.handleProggieClick = this.handleProggieClick.bind(this);
    this.handleTundaClick = this.handleTundaClick.bind(this);
  }
  handleProggieClick(e) {
    Router.push({
      pathname: "https://proggie.ug",
      query: {}
    });
  }
  handleTundaClick(e) {
    Router.push({
      pathname: "https://github.com/ahebwa49/e-commerce",
      query: {}
    });
  }
  render() {
    const styles = {
      container: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        //border: "1px solid red",
        height: "auto",
        fontFamily: "dosis",
        cursor: "pointer",
        padding: "0 5%"
      },
      text: {
        gridColumn: "1/2",
        //paddingLeft: "5%",
        fontFamily: "dosis",
        color: "#444444"
        //border: "1px solid red"
      },
      image: {
        display: "grid",
        gridColumn: "2/3",
        justifyItems: "center",
        alignItems: "center"
        //border: "1px solid red"
      }
    };
    return (
      <div>
        <div style={styles.container} onClick={this.handleProggieClick}>
          <div style={styles.text} id="projectDiv">
            <h2>PROGGIE</h2>
            <p>
              Uganda’s pioneer and biggest events portal. See project{" "}
              <Link href="https://proggie.ug">
                <a target="_blank">here</a>
              </Link>{" "}
            </p>
          </div>
          <div style={styles.image}>
            <img
              style={{ float: "right" }}
              width="75%"
              height="auto"
              src="../static/proggie.png"
              alt="project image"
            />
          </div>
        </div>
        <div style={styles.container} onClick={this.handleTundaClick}>
          <div style={styles.text} id="projectDiv">
            <h2>MINDSET</h2>
            <p>
              Mindset aims to expose digital skills like programming to every
              school going child. See project{" "}
              <Link href="https://www.mindset-group.org">
                <a target="_blank">here</a>
              </Link>{" "}
            </p>
          </div>
          <div style={styles.image}>
            <img
              style={{ float: "right" }}
              width="75%"
              height="auto"
              src="../static/mindset-home.png"
              alt="project image"
            />
          </div>
        </div>

        <div style={styles.container} onClick={this.handleTundaClick}>
          <div style={styles.text} id="projectDiv">
            <h2>TUNDA</h2>
            <p>
              Designed to be Uganda’s biggest e-commerce platform. See project{" "}
              <Link href="https://github.com/ahebwa49/e-commerce">
                <a target="_blank">here</a>
              </Link>{" "}
            </p>
          </div>
          <div style={styles.image}>
            <img
              style={{ float: "right" }}
              width="75%"
              height="auto"
              src="../static/tundaNew.png"
              alt="project image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsDiv;
