import React, { Component } from "react";

const NameDiv = () => {
  const styles = {
    fullname: {
      display: "flex",
      fontSize: "1.8rem",
      color: "#444444",
      justifyContent: "center",
      alignItems: "center",
      justifySelf: "center",
      fontFamily: "dosis, HelveticaNeue-CondensedBold,sans-serif",
      //border: "1px solid red",
      margin: "0 5%"
    }
  };
  //className="fullname"
  return (
    <div style={styles.fullname} id="fullName">
      <h1>LIVINGSTONE ASABAHEBWA</h1>
    </div>
  );
};

export default NameDiv;
