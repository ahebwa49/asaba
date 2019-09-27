import React, { Component } from "react";

const ProfileImage = () => {
  const styles = {
    container: {
      display: "flex",
      margin: "0 5%",
      border: "12px solid #444444",
      borderRadius: "5px",
      width: "auto"
    },
    img: {
      width: "100%",
      height: "100%"
    }
  };
  return (
    <div style={styles.container}>
      <img style={styles.img} src="../static/profilePic.jpg" />
    </div>
  );
};

export default ProfileImage;
