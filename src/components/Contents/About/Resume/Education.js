import React from "react";
import "./Resume.css";
import { Container } from "react-bootstrap";
import {
  Timeline,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";
function Education() {
  const customTheme = {
    lineColor: "#173b6c",
    dotColor: "#ffffff",
    borderDotColor: "#173b6c",
    titleColor: "#405b73",
    subtitleColor: "#bf9765",
    textColor: "#262626",
  };
  return (
    <div className="edu-bg">
      <Container>
        <div className="resume-head">
          <h2>Education</h2>
        </div>
        <div className="edu-con">
          <Timeline theme={customTheme} dateFormat="ll">
            <BodyContent>
              <Section
                title={
                  <h5>King Mongkut's Institute of Technology Ladkrabang</h5>
                }
              >
                <Description text="2019 - Present" />
                <Description text="Computer Engineering" />
              </Section>

              <Section title={<h5>Phatthalung School</h5>}>
                <Description text="2012 - 2018" />
                <Description text="High School Diploma" />
              </Section>
            </BodyContent>
          </Timeline>
        </div>
      </Container>
    </div>
  );
}

export default Education;
