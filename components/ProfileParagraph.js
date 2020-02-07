import React from "react";
import FrontSocialParagraph from "./FrontSocialDiv";

const ProfileParagraph = () => {
  const styles = {
    paragraph: {
      fontSize: "1.2rem",
      //color: "444444",
      fontFamily: "dosis, HelveticaNeue-CondensedBold,sans-serif",
      padding: "0 5%"
    }
  };
  return (
    <div className="paragraph" style={styles.paragraph} id="profileParagraph">
      <p>
        Hello, Night Owl. I’m Livingstone, a software developer from the
        internet building apps for devices, big and small. I have a hardwired
        desire to be better, an instinct for good design, a strong ambition to
        make a difference on the web, embracing hang-ups on semantics and
        evangelistic tendencies.
        <br />
        Look me up on: <FrontSocialParagraph />
      </p>
    </div>
  );
};
export default ProfileParagraph;
