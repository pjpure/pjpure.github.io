import React, { useState } from "react";
import "./Portfolio.css";
import { Container, Row, Col, Card } from "react-bootstrap";
function Portfolio() {
  const [state, setState] = useState("all");
  const projects = [
    {
      name: "Personal Website",
      type: "web",
      img: "port1.jpg",
      des: "ReactJS",
      github: "https://github.com/pjpure/pjpure.github.io",
    },
    {
      name: "Dogify",
      type: "web",
      img: "port1.jpg",
      des: "ReactJS, Flask, Keras",
      github: "https://github.com/pjpure/Dogify",
    },
    {
      name: "Hostdogs",
      type: "web",
      img: "port2.jpg",
      des: "ReactJS, Django",
      github: "https://github.com/Hostdogs",
    },
    {
      name: "CarParking",
      type: "app",
      img: "port2.jpg",
      des: "Java",
      github:
        "https://github.com/pjpure/ClassDocuments/tree/main/OOP/CarParcking/testproject01",
    },
    {
      name: "Ninninger",
      type: "game",
      img: "port1.jpg",
      des: "C/C++",
      github: "https://github.com/pjpure/ClassDocuments/tree/main/ComFun/Game",
    },
  ];
  const projectsList = projects
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
            <Card.Img variant="top" src={project.img} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.des}</Card.Text>
              <Card.Link href={project.github} target="_blank">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      );
    });

  const onStateChange = (e) => {
    setState(e.target.name);
  };

  return (
    <div className="portfolio-bg" id="portfolio">
      <Container>
        <div className="portfolio-head">
          <h2>Portfolio</h2>
        </div>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="portfolio-con">
            <a
              className={state == "all" ? "port-selected" : "port"}
              name="all"
              onClick={onStateChange}
            >
              All
            </a>
            <a
              className={state == "web" ? "port-selected" : "port"}
              name="web"
              onClick={onStateChange}
            >
              Web
            </a>
            <a
              className={state == "app" ? "port-selected" : "port"}
              name="app"
              onClick={onStateChange}
            >
              App
            </a>
            <a
              className={state == "game" ? "port-selected" : "port"}
              name="game"
              onClick={onStateChange}
            >
              Game
            </a>
          </div>
        </div>
        <Row>{projectsList}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
