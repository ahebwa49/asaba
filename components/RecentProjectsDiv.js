import React, { Component } from "react";
import Router from "next/router";
import Link from "next/link";

class RecentProjectsDiv extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      container: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        height: "auto",
        fontFamily: "dosis",
        cursor: "pointer",
        padding: "0 5%"
      },
      text: {
        gridColumn: "1/2",
        fontFamily: "dosis",
        color: "#444444"
      },
      image: {
        display: "grid",
        gridColumn: "2/3",
        justifyItems: "center",
        alignItems: "center"
      }
    };
    return (
      <div>
        <div style={styles.container}>
          <div style={styles.text} id="projectDiv">
            <h2>PLANOGY</h2>
            <p>
              Planogy is the fastest tool to share your screenshots and get
              feedback from your team and clients. See project{" "}
              <Link href="https://planogy.com">
                <a target="_blank">here</a>
              </Link>{" "}
            </p>
          </div>
          <div style={styles.image}>
            <img
              style={{ float: "right" }}
              width="75%"
              height="auto"
              src="../static/planogy.png"
              alt="project image"
            />
          </div>
        </div>
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
        <div style={styles.container} onClick={this.handleProggieClick}>
          <div style={styles.text} id="projectDiv">
            <h2>MINDSET</h2>
            <p>
              Mindset aims to expose digital skills like programming to every
              school going child . See project{" "}
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
        <div style={styles.container} onClick={this.handleProggieClick}>
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
              alt="tunda new image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RecentProjectsDiv;
