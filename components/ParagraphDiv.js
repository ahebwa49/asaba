import React, { Component } from "react";

const ParagraphDiv = () => {
  const styles = {
    container: {
      display: "flex",
      padding: "0 5%",
      fontFamily: "dosis"
      //border: "1px solid red",
    },
    p: {
      fontFamily: "dosis",
      fontSize: "1.2em"
    }
  };
  return (
    <div className="paragraph" style={styles.container} id="frontParagraph">
      <p style={styles.p}>
        I am a full stack developer and architect with 2+ years of
        commercial experience. I have consulted for a few clients, providing
        guidance on varied software projects. These days I work mainly with
        react, redux or apollo-client for frontend, architecting solutions
        around node, prisma, express, MongoDB and PostgreSQL at the back-end using
        both GraphQL and REST API's.
        <br />
        <br />
        As an architect I provide my clients with advice and best practice
        recommendations in areas including: source code optimization, unit
        testing and continuous deployment. I have provided software engineering
        practice advice for projects written in only JavaScript.
        <br />
        <br />I am currently located in Kampala, Uganda and work with clients
        from anywhere in the World.
      </p>
    </div>
  );
};

export default ParagraphDiv;
