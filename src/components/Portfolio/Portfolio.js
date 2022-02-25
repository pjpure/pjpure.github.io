import React, { useState } from "react";
import "./Portfolio.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import personalwebsiteImg from "../../assets/portfolio/personalwebsite.png";
import dogifyImg from "../../assets/portfolio/dogify.png";
import hostdogImg from "../../assets/portfolio/hostdog.png";
import carparkImg from "../../assets/portfolio/carpark.png";
import ninningerImg from "../../assets/portfolio/ninninger.png";

function Portfolio() {
  const [state, setState] = useState("all");
  const projects = [
    {
      name: "Personal Website",
      type: "web",
      img: personalwebsiteImg,
      des: "ReactJS",
      github: "https://github.com/pjpure/pjpure.github.io",
      demo: "",
      product: "https://pjpure.github.io/",
    },
    {
      name: "Dogify",
      type: "web",
      img: dogifyImg,
      des: "ReactJS, Flask, Keras",
      github: "https://github.com/pjpure/Dogify",
      demo: "https://www.youtube.com/watch?v=Haj0N2hehrs",
      product: "https://dogify.netlify.app/",
    },
    {
      name: "Hostdogs",
      type: "web",
      img: hostdogImg,
      des: "ReactJS, Django",
      github: "https://github.com/Hostdogs",
      demo: "",
      product: "https://hostdog.netlify.app/",
    },
    {
      name: "CarParking",
      type: "app",
      img: carparkImg,
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
      img: ninningerImg,
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
