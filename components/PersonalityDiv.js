import React, { Component } from "react";

const PersonalityDiv = () => {
  const styles = {
    container: {
      display: "grid",
      justifyItems: "center",
      JustifySelf: "center",
      fontFamily: "dosis, HelveticaNeue-CondensedBold,sans-serif",
      color: "#444444",
      fontSize: "1.2rem"
      //border: "1px solid red"
      //gridColumnGap: "2rem"
      //gridTemplateColumns: "1fr 1fr",
      //padding: "0 10%",
    },
    leftTop: {
      //gridColumn: "1/2",
      //justifyItems: "center",
      //border: "1px solid red"
    },
    rightTop: {
      //justifyItems: "center",
      //border: "1px solid red",
      //gridColumn: "2/3"
    }
  };
  return (
    <div style={styles.container} id="personalityDiv">
      <div style={styles.leftTop} id="lifesofar">
        <h2>Life so far...</h2>
        <li>Breathing since 1995</li>
        <li>Nearly died in 2004</li>
        <li>Got my first gig in 2010</li>
        <li>Started engineering school in 2014</li>
        <li>Got my first career job school in 2016</li>
        <li>Met the perfect girl in 2017</li>
        <li>Finished college in 2018</li>
      </div>
      <div style={styles.rightTop} id="loverof">
        <h2>Lover of...</h2>
        <li>Atomic design</li>
        <li>Good coding practices</li>
        <li>Performance</li>
        <li>Characterful Copy</li>
        <li>Intuitive Interfaces</li>
        <li>Fast Loading Time</li>
        <li>Simple Sign-up</li>
        <li>Awesome Alliteration</li>
      </div>
    </div>
  );
};
export default PersonalityDiv;
