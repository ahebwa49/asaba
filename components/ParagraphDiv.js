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
        I am a full stack developer from the internet with over 2 years of
        commercial experience. I have consulted for a few clients, providing
        guidance on varied software projects. These days I work mainly with
        react, react native, redux or apollo-client and D3 for frontend,
        architecting solutions around node, express, and MongoDB at the back-end
        using both GraphQL and REST API's.
        <br />
        <br />I am currently located in Kampala, Uganda and work with clients
        from anywhere in the World.
      </p>
    </div>
  );
};

export default ParagraphDiv;
