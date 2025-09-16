import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const {
    imgPath,
    title,
    subtitle,
    description,
    ghLink,
    demoLink,
    isBlog,
  } = props;

  return (
    <Card className="project-card-view">
      {imgPath ? (
        <Card.Img variant="top" src={imgPath} alt="card-img" />
      ) : null}
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {subtitle && (
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        )}
        {description && (
          <div style={{ textAlign: "justify" }}>{description}</div>
        )}
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: ghLink ? "10px" : 0 }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
