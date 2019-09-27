import React, { Component } from "react";
import StackWordDiv from "../components/StackWordDiv";
import StackParagraphDiv from "../components/StackParagraphDiv";
import HorizontalRule from "../components/HorizontalRule";
import ProjectProfileDiv from "../components/ProjectProfileDiv";
import ProjectParagraphDiv from "../components/ProjectParagraphDiv";
import SocialDiv from "../components/SocialDiv";
import StackDiv from "../components/StackDiv";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";

const StackPage = props => {
  return (
    <div>
      <br />
      <StackWordDiv />
      <StackParagraphDiv />
      <HorizontalRule />
      <StackDiv />
      <br />
      <HorizontalRule />
      <br />
      <ProjectProfileDiv />
      <ProjectParagraphDiv />
      <SocialDiv />
      <br />
      <Footer />
      <FooterNote />
    </div>
  );
};
export default StackPage;
