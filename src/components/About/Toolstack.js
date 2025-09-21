import React from "react";
import { Row, Col } from "react-bootstrap";
import { SiUbuntu, SiWindows, SiMacos, SiVisualstudiocode, SiCanva, SiAdobepremierepro, SiAdobelightroom } from "react-icons/si";
import capcutIcon from "@/Assets/icons/capcut.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Ubuntu">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mac">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Zed">
        <span style={{ fontSize: "0.45em", fontWeight: 600 }}>ZED</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Canva">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CapCut">
        <img src={capcutIcon} alt="CapCut" className="capcut-logo" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Lightroom">
        <SiAdobelightroom />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Adobe Premiere">
        <SiAdobepremierepro />
      </Col>
    </Row>
  );
}

export default Toolstack;
