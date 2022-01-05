import React, { useState } from "react";
import "./Portfolio.css";
import { Container, Row, Col, Card } from "react-bootstrap";
function Portfolio() {
  const [state, setState] = useState("all");
  const projects = [
    {
      name: "Personal Website",
      type: "web",
      img: "personalwebsite.png",
      des: "ReactJS",
      github: "https://github.com/pjpure/pjpure.github.io",
      demo: "",
      product: "https://pjpure.github.io/",
    },
    {
      name: "Dogify",
      type: "web",
      img: "dogify.png",
      des: "ReactJS, Flask, Keras",
      github: "https://github.com/pjpure/Dogify",
      demo: "https://www.youtube.com/watch?v=Haj0N2hehrs",
      product: "https://dogify.netlify.app/",
    },
    {
      name: "Hostdogs",
      type: "web",
      img: "hostdog.png",
      des: "ReactJS, Django",
      github: "https://github.com/Hostdogs",
      demo: "",
      product: "https://hostdog.netlify.app/",
    },
    {
      name: "CarParking",
      type: "app",
      img: "carpark.png",
      des: "Java",
      github:
        "https://github.com/pjpure/ClassDocuments/tree/main/OOP/CarParcking/testproject01",
      demo: "https://drive.google.com/file/d/10oj0SkvespgUO9Ej2jB8yTUD4WF_VsBP/view",
      product:
        "https://github.com/pjpure/ClassDocuments/tree/main/OOP/CarParcking/testproject01",
    },
    {
      name: "Ninninger",
      type: "game",
      img: "ninninger.png",
      des: "C/C++",
      github: "https://github.com/pjpure/ClassDocuments/tree/main/ComFun/Game",
      demo: "https://www.youtube.com/watch?v=0WoHkXPbGPA",
      product:
        "https://drive.google.com/file/d/1HiHjTBcLXPcHWFj7VSK_E-4j4kndxnAw/view",
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
            <div className="port-box">
              <a
                className={state == "all" ? "port-selected" : "port"}
                name="all"
                onClick={onStateChange}
              >
                All
              </a>
            </div>
            <div className="port-box">
              <a
                className={state == "web" ? "port-selected" : "port"}
                name="web"
                onClick={onStateChange}
              >
                Web
              </a>
            </div>
            <div className="port-box">
              <a
                className={state == "app" ? "port-selected" : "port"}
                name="app"
                onClick={onStateChange}
              >
                App
              </a>
            </div>
            <div className="port-box">
              <a
                className={state == "game" ? "port-selected" : "port"}
                name="game"
                onClick={onStateChange}
              >
                Game
              </a>
            </div>
          </div>
        </div>
        <Row>{projectsList}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
