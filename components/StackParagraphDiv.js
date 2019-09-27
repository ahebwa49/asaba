import React, { Component } from "react";

const StackParagraphDiv = () => {
  const styles = {
    container: {
      //border: "1px solid red",
      fontSize: "1.2em",
      fontFamily: "dosis"
    },
    p: {
      textAlign: "justify",
      padding: "0 5%"
    }
  };
  return (
    <div style={styles.container} id="stackParagraph">
      <p style={styles.p}>
        I often find the time to use new web tech, and when I do, often it's a
        win for me. This encourages me to keep an ear on the ground for
        what's new in the JavaScript world and how best i can use it to solve
        the problems at hand.
      </p>
      <p style={styles.p}>
        Foristance, while we can use local (component) state for a large number of
        situations, e.g., user-interface (UI) state, one will encounter
        situations where state needs to be accessed across a number of
        components across the application (a cross-cutting concern). In this
        case, we need a solid strategy for using global state; in the React
        ecosystem, Redux has become the defacto-standard for this.
      </p>
    </div>
  );
};

export default StackParagraphDiv;
