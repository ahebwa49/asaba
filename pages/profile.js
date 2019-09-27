import React, { Component } from "react";
import Link from "next/link";
import ProfileImage from "../components/ProfileImage";
import NameDiv from "../components/NameDiv";
import CaptionDiv from "../components/CaptionDiv";
import HorizontalRule from "../components/HorizontalRule";
import ProfileParagraph from "../components/ProfileParagraph";
import PersonalityDiv from "../components/PersonalityDiv";
import Footer from "../components/Footer";
import FooterNote from "../components/FooterNote";

const ProfilePage = props => {
  return (
    <div>
      <br />
      <ProfileImage />
      <NameDiv />
      <CaptionDiv />
      <HorizontalRule />
      <ProfileParagraph />
      <HorizontalRule />
      <PersonalityDiv />
      <br />
      <HorizontalRule />
      <Footer />
      <FooterNote />
    </div>
  );
};
export default ProfilePage;
