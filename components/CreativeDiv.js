import React, { Component } from "react";

const CreativeDiv = () => {
  const styles = {
    creative: {
      display: "flex",
      justifyContent: "center",
      justifySelf: "center",
      margin: "0%",
      justifyItems: "center",
      fontSize: "1.2em",
      borderRadius: "5px",
      color: "white",
      backgroundColor: "#cc6666",
      fontFamily: "dosis, HelveticaNeue-CondensedBold, trebuchet ms, sans-serif"
      //justifyItems: "center",
      //fontSize: "1.8rem"
      //fontWeight: "100"
    }
  };
  return (
    <div style={styles.creative} id="creativeDiv">
      <h3>LOGICALLY MINDED // CREATIVE AT HEART</h3>
    </div>
  );
};
export default CreativeDiv;
