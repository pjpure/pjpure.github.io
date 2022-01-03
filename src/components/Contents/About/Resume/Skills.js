import React from "react";
import "./Resume.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiDjango,
  SiFlask,
  SiKeras,
  SiCplusplus,
  SiCoursera,
  SiCsharp,
  SiArduino,
  SiJava,
} from "react-icons/si";
function Skills() {
  return (
    <div className="skills-bg">
      <Container>
        <div className="resume-head">
          <h3>Skills</h3>
        </div>
        <div className="resume-con">
          <Row>
            <Col className="skill-name">
              <div>
                <FaReact className="skill-icon" size={40} /> ReactJS
              </div>
              <div>
                <IoLogoJavascript className="skill-icon" size={40} /> JavaScript
              </div>
              <div>
                <FaHtml5 className="skill-icon" size={40} /> HTML/CSS
              </div>
              <div>
                <FaCss3Alt className="skill-icon" size={40} /> CSS
              </div>
            </Col>
            <Col className="skill-name">
              <div>
                <FaPython className="skill-icon" size={40} /> Python
              </div>
              <div>
                <SiDjango className="skill-icon" size={39} /> Django
              </div>
              <div>
                <SiFlask className="skill-icon" size={38} /> Flask
              </div>
              <div>
                <SiKeras className="skill-icon" size={39} /> Keras
              </div>
            </Col>
            <Col className="skill-name">
              <div>
                <SiCoursera className="skill-icon" size={40} /> C
              </div>
              <div>
                <SiCplusplus className="skill-icon" size={40} /> C++
              </div>
              <div>
                <SiCsharp className="skill-icon" size={40} /> C#
              </div>
              <div>
                <SiArduino className="skill-icon" size={40} /> Arduino
              </div>
            </Col>

            <p style={{ marginTop: "14px" }}>
              ReactJS, JavaScript, HTML/CSS, Python, Django, Flask, Keras C/C++,
              Java, R, C#, SQL, ARM Assembly, Arduino, Git
            </p>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
