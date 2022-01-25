import React from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import { FaMobileAlt } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import { SiNamebase } from "react-icons/si";
function Contact() {
  return (
    <div id="contact" className="contact-bg">
      <Container>
        <div className="contact-head" id="contact-head">
          <h2>Contact</h2>
        </div>
        <div className="contact-con">
          <div style={{ marginTop: "50px" }}>
            <div className="contact-icon">
              <SiNamebase size={45} />
            </div>
            <div>
              <h5>Name </h5>
              <p>Pattapon Janchoo</p>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <div className="contact-icon">
              <FaMobileAlt size={45} />
            </div>
            <div>
              <h5>Call </h5>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="Tel: +66 91 846 9519"
              >
                +6691-846-9519
              </a>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <div className="contact-icon">
              <RiMailOpenFill size={45} />
            </div>
            <div>
              <h5>Email </h5>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="mailto:pjpure14@gmail.com"
              >
                pjpure14@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
