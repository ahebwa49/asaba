import React, { Component } from "react";

const ProjectCount = () => {
  const styles = {
    container: {
      display: "flex",
      //border: "1px solid red",
      padding: "0 5%",
      height: "auto",
      fontFamily: "dosis"
      //gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
    text: {
      flex: "3 1 85%",
      alignSelf: "center",
      fontFamily: "dosis",
      fontSize: "1.2em",
      justifySelf: "start",
      color: "#444444",
      //border: "1px solid red"
      //gridColumn: "2/3",
      //paddingLeft: "10%",
    },
    image: {
      flex: "1 2 15%",
      alignItems: "center",
      alignSelf: "center",
      height: "auto",
      //border: "1px solid red",
      //paddingLeft: "2%"
      justifyItems: "flexStart"
      //display: "grid",
      //gridColumn: "1/2",
      //justifySelf: "start",
    }
  };
  return (
    <div style={styles.container} id="projectCount">
      <div style={styles.image}>
        <img width="100" src="../static/blackproject.png" />
      </div>
      <div style={styles.text}>
        <h1> 3 PROJECTS</h1>
      </div>
    </div>
  );
};

export default ProjectCount;
