import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
function About() {
  function getAge(d1, d2) {
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }
  const age = getAge(new Date(2000, 11, 8));
  return (
    <div className="about-bg" id="about">
      <Container>
        <div className="about-head">
          <h2>About</h2>
        </div>
        <div className="about-con">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Row style={{ marginTop: "27px" }}>
            <Col lg="4">
              <img
                className="about-img"
                src="https://avatars.githubusercontent.com/u/53260091?v=4"
                alt="profile"
              />
            </Col>
            <Col lg="8">
              <h3>Software Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Row>
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
                      <strong>Birthday: </strong>8 Nov 2000
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
                      <strong>Phone: </strong> 0812345678
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
                      <strong>Degree: </strong> Junior
                    </p>
                  </div>
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>Email:</strong> pjpure14@gmail.com
                    </p>
                  </div>
                  <div>
                    <FaChevronRight className="about-icon" />
                    <p className="about-info">
                      <strong>City: </strong> Bangkok, Thailand
                    </p>
                  </div>
                </Col>
              </Row>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default About;
