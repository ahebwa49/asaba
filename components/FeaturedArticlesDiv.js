import React, { Component } from "react";

const FeaturedArticlesDiv = () => {
  const styles = {
    fa: {
      display: "flex",
      paddingLeft: "5%"
    }
  };
  return (
    <div className="fa" style={styles.fa}>
      <img
        style={{ float: "left" }}
        width="50"
        src="../static/blackblog.png"
        alt="project image"
      />
      <h3>FEATURED ARTICLES</h3>
    </div>
  );
};

export default FeaturedArticlesDiv;
