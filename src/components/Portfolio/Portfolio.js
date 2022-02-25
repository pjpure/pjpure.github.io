import React, { useState } from "react";
import "./Portfolio.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import portfolioData from "../../data/portfolio";

function Portfolio() {
  const [state, setState] = useState("all");

  const projectsList = portfolioData
    .filter((project) => {
      if (state === "all") {
        return true;
      }
      return project.type === state;
    })
    .map((project, index) => {
      return (
        <Col key={index} sm="12" md="6" lg="4" style={{ marginBottom: "20px" }}>
          <Card className="port-card">
            <Card.Link href={project.product} target="_blank">
              <Card.Img className="port-img" variant="top" src={project.img} />
            </Card.Link>

            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.des}</Card.Text>
              <Card.Link href={project.github} target="_blank">
                Github
              </Card.Link>
              {project.demo !== "" ? (
                <Card.Link href={project.demo} target="_blank">
                  Demo
                </Card.Link>
              ) : null}
            </Card.Body>
          </Card>
        </Col>
      );
    });

  const onStateChange = (tag) => {
    setState(tag);
  };

  return (
    <div id="portfolio" className="portfolio-bg">
      <Container>
        <div className="portfolio-head" id="portfolio-head">
          <h2>Portfolio</h2>
        </div>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="portfolio-con">
            <div className="port-box">
              <span
                className={state === "all" ? "port-selected" : "port"}
                onClick={() => onStateChange("all")}
              >
                All
              </span>
            </div>
            <div className="port-box">
              <span
                className={state === "web" ? "port-selected" : "port"}
                onClick={() => onStateChange("web")}
              >
                Web
              </span>
            </div>
            <div className="port-box">
              <span
                className={state === "app" ? "port-selected" : "port"}
                onClick={() => onStateChange("app")}
              >
                App
              </span>
            </div>
            <div className="port-box">
              <span
                className={state === "game" ? "port-selected" : "port"}
                onClick={() => onStateChange("game")}
              >
                Game
              </span>
            </div>
          </div>
        </div>
        <Row>{projectsList}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
