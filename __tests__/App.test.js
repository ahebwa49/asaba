import React from "react";
import ReactDOM from "react-dom";
import Footer from "../components/Footer";

test("renders without failing", () => {
  //arrange
  const container = document.createElement("div");
  ReactDOM.render(<Footer />, container);
});
