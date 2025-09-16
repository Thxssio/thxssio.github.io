import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PublicationCard from "./PublicationCard";
import { Helmet } from "react-helmet";

function Publications() {
  const gridRef = useRef(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const cards = node.querySelectorAll(".project-card");
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 80}ms`;
      card.classList.add("reveal");
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const pubs = [
    {
      title:
        "Visual Sensors Benchmark for Development of an Autonomous Navigation Setup for a Hybrid Unmanned Aerial Underwater Vehicle",
      authors:
        "Mateus, Matheus G; Corçaque, Pedro L; Pedroso-Jr, Adir A; da Silva, Andressa C; Oliveira, Guilherme C; de Almeida, Gustavo P; Silva, Thássio G; Guerra, Rodrigo S; Drews-Jr, Paulo LJ",
      venue: "Climbing and Walking Robots Conference",
      year: "2023",
    },
    {
      title:
        "Low-Cost Prototype for Analysis and Monitoring of Underwater Structures",
      authors:
        "Oliveira, Guilherme C; Evald, Paulo Jefferson DO; Mateus, Matheus G; Corçaque, Pedro L; Pedroso-Jr, Adir A; da Silva, Andressa C; de Almeida, Gustavo P; Silva, Thássio G; Drews-Jr, Paulo LJ; Neto, Jorge Arigony",
      venue: "Climbing and Walking Robots Conference",
      year: "2023",
    },
    {
      title:
        "A comparison between deep reinforcement learning methods applied to the control of a mobile robot in a Very Small Size Soccer environment",
      authors:
        "Schmitt, Nata Ismael; de Castro, Bruno Silva; Cukla, Anselmo Rafael; Tarnowski, Gabriel; Emmendörfer, Leonardo R; De Andrade, Thiago AN; Gomes Silva, Thássio",
      venue: "Journal/Preprint",
      year: "—",
    },
    {
      title:
        "Simulation-Based Autonomous Drone Navigation for Security and Monitoring Using Deep Reinforcement Learning",
      authors:
        "Silva, Thássio Gomes; Bonfá, Kauê F; Goulart, Gabriela M; Do Nascimento, Mikael F; Brisolla, Leonardo M; Mahlke, Angela; Dorneles, Evandro Luz; Bevilacqua, Solon; Dos Santos, Luana Machado; Cukla, Anselmo Rafael; others",
      venue: "Brazilian Conference on Robotics (CROS)",
      year: "2025",
    },
    {
      title:
        "Deep Reinforcement Learning Using the Soft Actor-Critic Method for Goalkeeper Control in a Very Small Size Soccer Environment",
      authors:
        "Da Silva, Lucas Marchesan; Silva, Thássio Gomes; Costa, Enzo Fernando Simão; Righi, João Pedro Azenha; Schmitt, Natã Ismael; Cukla, Anselmo",
      venue: "Brazilian Conference on Robotics (CROS)",
      year: "2025",
    },
    {
      title:
        "Simulation-Based Approaches for Autonomous Security and Monitoring Using Drones",
      authors:
        "Kolling, Álisson H; Gonçalves, Marcos; Castro, Bruno S; Glass, Gustavo; Pereira, Leonardo F; Schmitt, Natã I; Lik, Vitoria; Gomes, Thássio; Bevilacqua, Solon; Cukla, Anselmo; others",
      venue: "International Conference on Hybrid Intelligent Systems",
      year: "2023",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Thássio Silva | Publications</title>
        <meta
          name="description"
          content="Academic publications and conference papers on robotics, reinforcement learning, and autonomous systems by Thássio Silva."
        />
      </Helmet>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Publications</strong>
          </h1>
          <p style={{ color: "white" }}>
            A selection of academic publications and conference papers.
          </p>
          <Row ref={gridRef} style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {pubs.map((p, idx) => (
              <Col md={6} className="project-card" key={idx}>
                <PublicationCard
                  title={p.title}
                  authors={p.authors}
                  venue={p.venue}
                  year={p.year}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Publications;
