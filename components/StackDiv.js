import React, { Component } from "react";

const StackDiv = () => {
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
        <h2>Frontend</h2>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Webpack</li>
        <li>Babel</li>
        <li>React</li>
        <li>Redux</li>
        <li>Next</li>
        <li>Apollo client</li>
      </div>
      <div style={styles.rightTop} id="loverof">
        <h2>Backend</h2>
        <li>Node</li>
        <li>Express</li>
        <li>Prisma</li>
        <li>Postgres</li>
        <li>MongoDB</li>
        <li>GraphQL-Yoga server</li>
        <li>GraphQL APIs</li>
        <li>REST API's</li>
        
      </div>
    </div>
  );
};
export default StackDiv;
