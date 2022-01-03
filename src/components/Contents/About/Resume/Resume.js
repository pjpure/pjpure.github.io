import React from "react";
import "./Resume.css";
import { Container } from "react-bootstrap";
import Education from "./Education.js";
import Skills from "./Skills.js";
function Resume() {
  return (
    <div>
      <Skills />
      <Education />
    </div>
  );
}

export default Resume;
