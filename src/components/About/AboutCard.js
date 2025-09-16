import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thassio Silva</span> from
            <span className="purple"> São Luis, Brazil.</span>
            <br />
            I am currently engaged in research and development projects in
            robotics, embedded systems, and software engineering.
            <br />
            I study at <span className="purple">Universidade Federal de Santa Maria (UFSM)</span>,
            where I work on projects that combine hardware, software, and applied
            sciences.
            <br />
            I’m a
            <i>
              <b className="purple"> MERN Stack developer</b>
            </i>
            , a
            <i>
              <b className="purple"> robotics‑focused RPA</b>
            </i>
            &nbsp;practitioner, a
            <i>
              <b className="purple"> student</b>
            </i>
            , and an
            <i>
              <b className="purple"> open‑source contributor</b>
            </i>
            .
            <br />
            Apart from coding and research, here are some activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and building creative projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and sharing knowledge
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and discovering new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games in my free time
            </li>
          </ul>

          <p style={{ color: "var(--imp-text-color)" }}>
            "Always striving to create solutions that make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Thassio</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
