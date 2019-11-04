import React, { Component } from "react";

const RecentProjectsCount = () => {
  const styles = {
    container: {
      display: "flex",
      padding: "0 3%",
      height: "auto",
      fontFamily: "dosis"
    },
    text: {
      flex: "3 1 85%",
      alignSelf: "center",
      fontFamily: "dosis",
      fontSize: "1.2em",
      justifySelf: "start",
      color: "#444444"
    },
    image: {
      flex: "1 2 15%",
      alignItems: "center",
      alignSelf: "center",
      height: "auto",
      justifyItems: "flexStart"
    }
  };
  return (
    <div style={styles.container} id="projectCount">
      <div style={styles.image}>
        <img width="100" src="../static/blackproject.png" />
      </div>
      <div style={styles.text}>
        <h1> 4 RECENT PROJECTS</h1>
      </div>
    </div>
  );
};

export default RecentProjectsCount;
