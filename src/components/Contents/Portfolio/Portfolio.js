import React from "react";
import "./Portfolio.css";
// import projects from "./Portfolio.json";
import { Container, Row, Col, Card } from "react-bootstrap";
function Portfolio() {
  const projects = [
    { name: "A", type: "A", img: "port1.jpg", des: "React" },
    { name: "B", type: "B", img: "port2.jpg", des: "React" },
    { name: "C", type: "C", img: "port2.jpg", des: "React" },
    { name: "A", type: "A", img: "port1.jpg", des: "React" },
    { name: "B", type: "B", img: "port2.jpg", des: "React" },
    { name: "C", type: "C", img: "port2.jpg", des: "React" },
  ];
  const projectsList = projects.map((project, index) => {
    console.log(project);
    return (
      <Col key={index} sm="12" md="6" lg="4" style={{ marginBottom: "20px" }}>
        <Card className="port-card">
          <Card.Img variant="top" src={project.img} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.des}</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <div className="portfolio-bg" id="portfolio">
      <Container>
        <div className="portfolio-head">
          <h2>Portfolio</h2>
        </div>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="portfolio-con">
            <a className="port">All</a>
            <a className="port">Web</a>
            <a className="port">App</a>
            <a className="port">Game</a>
          </div>
        </div>
        <Row>{projectsList}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
