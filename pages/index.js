import React, { Component } from "react";
import Animation from "../components/Animation";
import CreativeDiv from "../components/CreativeDiv";
import NameDiv from "../components/NameDiv";
import ParagraphDiv from "../components/ParagraphDiv";
import FrontSocialDiv from "../components/FrontSocialDiv";
import HorizontalRule from "../components/HorizontalRule";
import ProfileImage from "../components/ProfileImage";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";
import RecentProjectsCount from "../components/RecentProjectsCount";
import RecentProjectsDiv from "../components/RecentProjectsDiv";

const Home = props => {
  return (
    <div>
      <br />
      <ProfileImage />
      <br />

      {/** <Animation />*/}
      <CreativeDiv />
      <NameDiv />
      <ParagraphDiv />
      <br />
      <FrontSocialDiv />
      <br />
      <HorizontalRule />
      <br />
      <RecentProjectsCount />
      <RecentProjectsDiv />
      <br />
      <HorizontalRule />
      <br />
      <Footer />
      <FooterNote />
    </div>
  );
};
export default Home;
