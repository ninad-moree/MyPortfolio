import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ninad More </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am a third year student at Pune Institute of Computer Technology <span className="purple"> (PICT).</span>
            <br />
            I am currently persuing <span className="purple"> Computer Engineering</span> course.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (mostly valorant)
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket and Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
