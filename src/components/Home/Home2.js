import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "lottie-react";
import profileAnimation from "@/Assets/profile.json";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF 🚀
            </h1>
            <p className="home-about-body">
              I fell in love with programming, hardware, and robotics — and
              along the way, I’ve learned a lot (and I keep learning every day).
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C, C++, Python, and JavaScript</b>
              </i>
              , and I also explore
              <i>
                <b className="purple"> Go, VHDL, and Embedded C</b>
              </i>
              &nbsp;for my hardware projects.
              <br />
              <br />
              I’m a
              <i>
                <b className="purple"> MERN Stack developer</b>
              </i>
              , a
              <i>
                <b className="purple"> robotics‑focused RPA</b>
              </i>
              &nbsp;practitioner, and an
              <i>
                <b className="purple"> open‑source contributor</b>
              </i>
              .
              <br />
              <br />
              <b>My main fields of interest are:</b>
              <br />
              - Robotics & Embedded Systems (STM32, ESP32, NRF24L01+, sensors,
              motion control, FPGA design)
              <br />
              - Computer Vision & Navigation (ROS2, SLAM, Visual-Inertial
              Odometry, UAVs)
              <br />
              - Web Development & Cloud (
              <i>
                <b className="purple">Next.js, Firebase, Firestore, Cloud Functions</b>
              </i>
              )
              <br />
              - Remote Sensing & Mapping (DJI drones, Mapillary, Earth Engine,
              GeoAI)
              <br />
              <br />
              Whenever possible, I bring together my passion for building
              real-world solutions — from robotics research to modern web
              platforms with
              <i>
                <b className="purple"> React.js, Next.js, and Firebase</b>
              </i>
              , always aiming to create systems that make a difference.
              <br />
              <br />
              <span style={{ color: "var(--imp-text-color)" }}>
                "Striving to innovate at the intersection of hardware and
                software." ⚡
              </span>
              <br />— Thassio
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Lottie
                animationData={profileAnimation}
                loop={true}
                className="img-fluid"
                style={{ maxHeight: "260px" }}
              />
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
                  href="https://github.com/thxssio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/thxssio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thxssio/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thxssio"
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
