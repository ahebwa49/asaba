import React, { Component } from "react";

const ProjectParagraphDiv = () => {
  const styles = {
    container: {
      display: "flex",
      //border: "1px solid red",
      fontFamily: "dosis",
      fontSize: "1.2em",
      padding: "0",
      padding: "0 5%"
    }
  };
  return (
    <div style={styles.container} id="projectParagraph">
      <p>
        I put a lot of pressure on myself when it comes to software development
        - most of my work never sees the light of day. *wipes away tear*
      </p>
    </div>
  );
};

export default ProjectParagraphDiv;
