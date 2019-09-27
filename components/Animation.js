import React, { Component } from "react";

const Animation = () => {
  const styles = {
    container: {
      display: "flex",
      position: "relative",
      justifyContent: "center",
      //border: "1px solid blue",
      borderRadius: "5px",
      width: "100%",
      height: "87vh"
    },
    oAI: {
      display: "flex",
      position: "absolute",
      zIndex: 3,
      justifyContent: "center",
      //border: "1px solid red",
      height: "100%"
    },
    cAI: {
      display: "flex",
      //display: "none",
      position: "absolute",
      zIndex: 1,
      justifyContent: "center",
      //border: "1px solid yellow",
      height: "100%"
    },
    lAI: {
      display: "flex",
      //display:"none",
      position: "absolute",
      zIndex: 2,
      //border: "1px solid green",
      justifyContent: "center",
      height: "100%"
    }
  };
  return (
    <div className="animation" style={styles.container} id="animationImages">
      <div style={styles.cAI} id="cityImage">
        <img
          width="100%"
          height="100%"
          src="../static/cityAnimationImage.png"
        />
      </div>
      <div style={styles.oAI} id="originalImage">
        <img
          width="100%"
          height="100%"
          src="../static/originalAnimationImage.png"
        />
      </div>
      <div style={styles.lAI} id="landscapeImage">
        <img
          width="100%"
          height="100%"
          src="../static/landscapeAnimationImage.png"
        />
      </div>
      {/*<div id="ball-1" />
        <div id="ball-2" />
        <div id="ball-3" /> */}
    </div>
  );
};

export default Animation;
