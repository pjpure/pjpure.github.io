import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

function Contents() {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Contents;
