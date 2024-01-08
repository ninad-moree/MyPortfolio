import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Computer Engineering student in my third year at Pune Institute of Computer Technology (PICT).
              I am also a full stack flutter developer and currently learning React and exploring AI and ML.
              In my free time, I like to solve problems on Leetcode, Codechef and watch animes.
              <br />
              <br />
              I am familiar with programming languages such as
              <i>
                <b className="purple"> C++, Python, Java, Javascript and Dart. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Applications using Flutter</b> and
                also in areas related to{" "}
                <b className="purple">
                  Web Technologies.
                </b>
              </i>
              <br />
              <br />
              I am constantly working toards building new apps 
              <b className="purple">  Flutter</b> for
              <i>
                <b className="purple">
                  {" "}
                  Android as well as IOS.
                </b>
              </i>
              &nbsp; Also i am currently exploring the field of
              <i>
                <b className="purple">  Web Technology </b>
              </i>
              and learning 
              <i>
                <b className="purple">  ReactJS </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ninad-moree"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ninad-more-65a942231/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__ninad._18/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
