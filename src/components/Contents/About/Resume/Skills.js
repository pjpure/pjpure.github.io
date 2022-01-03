import React from "react";
import "./Resume.css";
import { Container } from "react-bootstrap";
function Skills() {
  return (
    <div className="skills-bg">
      <Container>
        <div className="resume-head">
          <h2>Skills</h2>
        </div>
        <div className="resume-con">
          <p>
            ReactJS, JavaScript, HTML/CSS, Python, Django, Flask, Keras C/C++,
            Java, R, C#, SQL, ARM Assembly, Arduino, Git
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
