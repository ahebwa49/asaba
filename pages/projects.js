import React, { Component } from "react";
import Link from "next/link";
import ProjectWordDiv from "../components/ProjectWordDiv";
import ProjectParagraphDiv from "../components/ProjectParagraphDiv";
import HorizontalRule from "../components/HorizontalRule";
import ProjectCount from "../components/ProjectCount";
import ProjectsDiv from "../components/ProjectsDiv";
import ProjectProfileDiv from "../components/ProjectProfileDiv";
import SocialDiv from "../components/SocialDiv";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";

const ProjectsPage = props => {
  return (
    <div>
      <br />
      <ProjectWordDiv />
      <ProjectParagraphDiv />
      <HorizontalRule />
      <br />
      <ProjectCount />
      <ProjectsDiv />
      <br/>
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
export default ProjectsPage;
