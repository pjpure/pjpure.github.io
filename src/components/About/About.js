import React from "react";
import "./About.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import Resume from "../Resume/Resume.js";
import resumePDF from "../../assets/about/resume.pdf";
import profileData from "../../data/profile";

function About() {
  return (
    <div id="about" className="about-bg">
      <Container>
        <div className="about-head" id="about-head">
          <h2>About Me</h2>
        </div>
        <div className="about-con">
          <Row style={{ marginTop: "27px" }}>
            <Col lg="4">
              <img
                className="about-img"
                src={profileData.photo}
                alt="profile"
              />
            </Col>
            <Col lg="8">
              <Row>
                <Col lg="12">
                  <h3>{profileData.position}</h3>{" "}
                </Col>
                <Col style={{ marginBottom: "14px" }} lg="12">
                  <p>{profileData.description}</p>
                </Col>

                <Col lg="6">
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Name: </strong> {profileData.name}
                    </p>
                  </div>

                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Age: </strong>
                      {profileData.age}
                    </p>
                  </div>
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Phone: </strong> {profileData.phone}
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Website: </strong> {profileData.website}
                    </p>
                  </div>

                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Email:</strong> {profileData.email}
                    </p>
                  </div>
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>City: </strong> {profileData.city}
                    </p>
                  </div>
                </Col>

                <Col style={{ marginTop: "14px" }} lg="12">
                  <a
                    href={resumePDF}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Button
                      style={{
                        width: "200px",
                        height: "50px",
                        background: "#173b6c",
                      }}
                    >
                      Resume
                    </Button>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Resume />
      </Container>
    </div>
  );
}

export default About;
