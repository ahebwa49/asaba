import React, { Component } from "react";

const ProjectWordDiv = () => {
  const styles = {
    container: {
      display: "flex",
      fontSize: "90px",
      fontWeight: "400",
      padding: "0 5%",
      justifyContent: "start",
      justifySelf: "start",
      alignItems: "center",
      //border: "1px solid blue",
      color: "#444444",
      fontFamily: "dosis"
    }
  };
  return (
    <div style={styles.container} id="wordDiv">
      VISUALISATIONS
    </div>
  );
};

export default ProjectWordDiv;
