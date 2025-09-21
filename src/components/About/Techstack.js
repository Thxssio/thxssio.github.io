import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiPython, DiJava } from "react-icons/di";
import {
  SiC,
  SiRust,
  SiNextdotjs,
  SiDjango,
  SiPhp,
  SiFirebase,
  SiAmazonaws,
  SiOracle,
  SiRos,
  SiKicad,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import solidworksIcon from "@/Assets/icons/solidworks.png";
import onshapeIcon from "@/Assets/icons/onshape.png";
import easyedaIcon from "@/Assets/icons/easyeda.png";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython title="Python" />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC title="C" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRust title="Rust" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang title="Golang" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRos title="ROS2" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango title="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp title="PHP" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle title="Oracle" />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava title="Java" />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons" title="SolidWorks">
          <img src={solidworksIcon} alt="SolidWorks" className="solidworks-logo" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Onshape">
          <img src={onshapeIcon} alt="Onshape" className="onshape-logo" />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="EasyEDA">
          <img src={easyedaIcon} alt="EasyEDA" className="easyeda-logo" />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="KiCad">
          <SiKicad />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
