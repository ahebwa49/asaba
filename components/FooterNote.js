import React from "react";

const FooterNote = () => {
  const styles = {
    footernote: {
      display: "flex",
      justifyContent: "center",
      justifySelf: "center",
      padding: "5% 5%",
      fontFamily: "dosis",
      //border:"1px solid red"
    }
  };
  return <div style={styles.footernote}>&#169;2019 Livingstone Asabahebwa</div>;
};
export default FooterNote;
