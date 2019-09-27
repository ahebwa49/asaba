import React, { Component } from "react";

const HorizontalRule = () => {
  const styles = {
    hr: {
      margin: "0 5%",
      height: "12px",
      backgroundColor: "#cc6666",
      borderRadius: "6px"
    }
  };
  return (
    <div style={styles.hr} id="horizontalRule">
      {/*<hr />*/}
    </div>
  );
};
export default HorizontalRule;
