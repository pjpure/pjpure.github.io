import React from "react";
import "./Resume.css";
import { Container, Row, Col } from "react-bootstrap";
import Education from "./Education.js";
import Skills from "./Skills.js";
function Resume() {
  return (
    <div>
      <Row>
        <Col xs="12" lg="7">
          <Skills />
        </Col>
        <Col xs="12" lg="5">
          <Education />
        </Col>
      </Row>
    </div>
  );
}

export default Resume;
