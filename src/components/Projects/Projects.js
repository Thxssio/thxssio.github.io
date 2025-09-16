import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Imagens adicionadas
import navmsImg from "../../Assets/Projects/navms.PNG";
import digitalTwinImg from "../../Assets/Projects/digitaltwin.PNG";
import agropulseImg from "../../Assets/Projects/agropulsehub.png";
import capacitacaoImg from "../../Assets/Projects/capacitacao4.0.jpeg";
import gsecImg from "../../Assets/Projects/gsec.PNG";
import caranchoImg from "../../Assets/Projects/carancho.png";
import fbotImg from "../../Assets/Projects/fbot.PNG";
import hydroneImg from "../../Assets/Projects/hydrone.PNG";
import taurabotsImg from "../../Assets/Projects/taurabots.PNG";
import tunedropImg from "../../Assets/Projects/tunedrop.png";
import { Helmet } from "react-helmet";
// Imagens dos projetos serão adicionadas depois; removidas por ora

function Projects() {
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
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Thássio Silva | Projects & Experiences</title>
        <meta
          name="description"
          content="Portfolio of robotics, machine learning, and software projects ranging from autonomous UAV navigation to SaaS platforms."
        />
      </Helmet>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Projects & <strong className="purple">Experiences</strong>
          </h1>
          <p style={{ color: "white" }}>
            A selection of recent projects and experiences.
          </p>
          <Row ref={gridRef} style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Capacitacao 4.0 Program"
              subtitle="EMBRAPII · Part-time · Santa Maria/RS · On-site · Sep 2025 – Present"
              description={
                <>
                  <p>Training in project management and innovation, deal
                    prospecting and negotiation, process standardization, and
                    intellectual property.</p>
                  <ul>
                    <li>Soft skills</li>
                    <li>Software project management</li>
                    <li>Software development</li>
                    <li>QA</li>
                  </ul>
                </>
              }
              imgPath={capacitacaoImg}
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              title="NAVMS"
              subtitle="AEL · Part-time · Remote · May 2024 – Present"
              description={
                <>
                  <p>Autonomous UAV navigation in GNSS-degraded/denied
                    environments using multi-sensor fusion and computer vision
                    (visual SLAM, VIO, and DL for image matching).</p>
                  <ul>
                    <li>Stereo vision and CNNs</li>
                    <li>Sensor fusion: IMU, magnetometer, altimeter</li>
                    <li>Use cases: monitoring, reconnaissance, inspections</li>
                    <li>Stack: ROS2, Python, C++, OpenCV, MATLAB/Simulink</li>
                  </ul>
                </>
              }
              imgPath={navmsImg}
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              title="Carancho Aerodesign — Electronics Designer"
              subtitle={
                "Aug 2023 – Present · On-site | Trainee (Aug 2023 – Dec 2023) → Electronics Designer (Jan 2024 – Present)"
              }
              description={
                <>
                  <p>From Trainee to Electronics Designer, working on embedded
                    systems for aeromodelling (RF, digital electronics, and PCB
                    layout).</p>
                  <ul>
                    <li>Test support and documentation</li>
                    <li>Altium Designer and Eagle PCB</li>
                    <li>Aeromodelling · Microelectronics · RF</li>
                  </ul>
                </>
              }
              imgPath={caranchoImg}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="TauraBOTS — Researcher"
              subtitle="Part-time · Jun 2023 – Present · Hybrid"
              description={
                <>
                  <p>Applied machine learning R&D with focus on pipelines and
                    infrastructure.</p>
                  <ul>
                    <li>Machine Learning and Deep Learning</li>
                    <li>Algorithms and bots</li>
                    <li>JS libraries and clusters</li>
                  </ul>
                </>
              }
              imgPath={taurabotsImg}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="AgroPulse — Software Developer (Internship)"
              subtitle="Remote · Mar 2025 – Jul 2025"
              description={
                <>
                  <p>Agri-tech platform with modules for Precision Agriculture,
                    Livestock, Digital Solutions, Bioinputs, and FoodTech, in
                    collaboration with UFSM/InovaTec.</p>
                  <ul>
                    <li>SaaS · PHP · Laravel</li>
                    <li>PostgreSQL · WordPress</li>
                  </ul>
                </>
              }
              imgPath={agropulseImg}
              demoLink="https://agropulsehub.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="TuneDrop"
              subtitle="Side project · 2023 – Present"
              description={
                <>
                  <p>
                    Fast converter turning YouTube links into direct audio
                    downloads, with theme preferences and instant feedback.
                  </p>
                  <ul>
                    <li>Dark/light mode preference persistence</li>
                    <li>RapidAPI integration for audio links</li>
                    <li>Real-time toasts with react-hot-toast</li>
                  </ul>
                </>
              }
              imgPath={tunedropImg}
              demoLink="/tunedrop"
              cardClassName="project-card-view--tunedrop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="GSEC — R&D"
              subtitle="Part-time · Sep 2023 – Mar 2025 · Santa Maria/RS"
              description={
                <>
                  <p>AI for analysis and dataset creation from ultrasonic
                    measurements of partial discharges, assessing insulation
                    degradation in instrument transformers and energized surge
                    arresters.</p>
                  <ul>
                    <li>AutoCAD · Altium Designer</li>
                    <li>YOLO · Keras · Python</li>
                    <li>Supervised ML · MATLAB</li>
                  </ul>
                </>
              }
              imgPath={gsecImg}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="FBOT — Researcher"
              subtitle="Part-time · Sep 2021 – Sep 2023 · Rio Grande/RS"
              description={
                <>
                  <p>Research in RPA and mobile robotics with ROS/ROS2.</p>
                  <ul>
                    <li>RPA · Python</li>
                    <li>ROS · ROS2</li>
                  </ul>
                </>
              }
              imgPath={fbotImg}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Hydrone — R&D"
              subtitle="Part-time · Apr 2021 – Apr 2023 · On-site"
              description={
                <>
                  <p>Hybrid amphibious UAV (land/water) for missions in complex
                    environments, with computer vision and DL, sensor fusion,
                    and modular payloads.</p>
                  <ul>
                    <li>Resilient control (ADRC)</li>
                    <li>ROS · OpenCV · SLAM · ROS2</li>
                  </ul>
                </>
              }
              imgPath={hydroneImg}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="FURG — FINEP Scholar"
              subtitle="Part-time · Apr 2021 – Apr 2022 · Hybrid"
              description={
                <>
                  <p>Platform for visual defect inspection on parts using
                    computer vision and machine learning — from data capture to
                    processing and modeling.</p>
                  <ul>
                    <li>ROS · Python · C++</li>
                    <li>Control and Automation · Electronics</li>
                    <li>Computer Engineering · ML</li>
                  </ul>
                </>
              }
              imgPath={digitalTwinImg}
            />
          </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
