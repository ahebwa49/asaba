import React, { Component } from "react";

const CaptionDiv = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      fontSize: "1.2rem",
      marginRight: "5%"
    }
  };
  return (
    <div className="fullname" style={styles.container} id="caption">
      <h3>SOFTWARE DEVELOPER FROM THE INTERNET</h3>
    </div>
  );
};

export default CaptionDiv;
