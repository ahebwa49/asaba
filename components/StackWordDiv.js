import React, { Component } from "react";

const StackWordDiv = () => {
  const styles = {
    container: {
      display: "grid",
      fontSize: "90px",
      paddingLeft: "5%",
      justifyItems: "start",
      justifySelf: "start",
      //border: "1px solid red",
      color: "#444444",
      fontFamily: "dosis",
      fontWeight: "400"
    }
  };
  return (
    <div style={styles.container} id="wordDiv">
      STACK
    </div>
  );
};

export default StackWordDiv;
