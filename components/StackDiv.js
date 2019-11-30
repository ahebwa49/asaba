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
    }
  };
  return (
    <div style={styles.container} id="personalityDiv">
      <div id="lifesofar">
        <h2>Frontend</h2>
        <li>Jest</li>
        <li>Enzyme</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>d3</li>
        <li>Webpack</li>
        <li>Babel</li>
        <li>React</li>
        <li>Redux</li>
        <li>Next</li>
        <li>Apollo client</li>
      </div>
      <div id="loverof">
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
