import React, { Component } from "react";
import Link from "next/link";
import FooterProfile from "../components/FooterProfile";
import FooterProjects from "../components/FooterProjects";
import FooterBlog from "../components/FooterBlog";
import FooterStack from "../components/FooterStack";

const Footer = () => {
  const styles = {
    container: {
      display: "flex"
    }
  };
  return (
    <div id="footer">
      <FooterProfile />
      <FooterProjects />
      <FooterBlog />
      <FooterStack />
    </div>
  );
};
export default Footer;
