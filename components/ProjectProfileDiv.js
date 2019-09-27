import React, { Component } from "react";

const ProjectProfileDiv = () => {
  const styles = {
    container: {
      display: "flex",
      height: "auto",
      fontFamily: "dosis"
      //borderRadius: "2px"
      //display: "grid",
      //gridTemplateColumns: "1fr 2fr",
      //flexDirection: "column",
    },
    text: {
      flex: "3 1 70%",
      fontFamily: "dosis",
      justifyContent: "flexEnd",
      justifySelf: "flexEnd",
      color: "#444444",
      //border: "1px solid red",
      paddingLeft: "5%"
      //fontSize: "1.2em",
      //gridColumn: "2/3",
    },
    image: {
      flex: "1 3 30%",
      justifySelf: "flexStart",
      alignItems: "center",
      height: "auto",
      paddingLeft: "5%"
      //display: "grid",
      //gridColumn: "1/2",
      //justifyItems: "center",
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.image}>
        <img width="100%" height="100%" src="../static/asaba.jpg" />
      </div>
      <div style={styles.text} id="profileName">
        <h1>LIVINGSTONE ASABAHEBWA</h1>
        <p>Software Developer from Uganda</p>
      </div>
    </div>
  );
};

export default ProjectProfileDiv;
