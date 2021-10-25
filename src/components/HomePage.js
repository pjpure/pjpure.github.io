import React from "react";
import { Button } from "react-bootstrap";

function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "300px" }}>
      <h1>Pattapon Janchoo</h1>
      <Button href="https://github.com/pjpure" variant="primary">
        Github
      </Button>
    </div>
  );
}

export default HomePage;
