import React from "react";
import "./About.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import Resume from "../Resume/Resume.js";
import resumePDF from "../../assets/about/resume.pdf";

function About() {
  function getAge(d1, d2) {
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }
  const age = getAge(new Date(2000, 11, 8));
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
                src="https://avatars.githubusercontent.com/u/53260091?v=4"
                alt="profile"
              />
            </Col>
            <Col lg="8">
              <Row>
                <Col lg="12">
                  <h3>Software Developer</h3>{" "}
                </Col>
                <Col style={{ marginBottom: "14px" }} lg="12">
                  <p>
                    Hi, I am a 3rd year computer engineering student at King
                    Mongkut's Institute of Technology Ladkrabang. I am
                    interested in software development and innovations that will
                    make everything easier, and have experience in front-end and
                    back-end development. I intended to develop my skills and
                    learn something new every day from your company.
                  </p>
                </Col>

                <Col lg="6">
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Name: </strong> Pattapon Janchoo
                    </p>
                  </div>

                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Age: </strong>
                      {age}
                    </p>
                  </div>
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Phone: </strong> +6691-846-9519
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Website: </strong> pjpure.github.io
                    </p>
                  </div>

                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Email:</strong> pattapon.pj@gmail.com
                    </p>
                  </div>
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>City: </strong> Bangkok, Thailand
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
