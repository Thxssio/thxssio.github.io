import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  const {
    imgPath,
    title,
    subtitle,
    description,
    ghLink,
    demoLink,
    isBlog,
    cardClassName,
  } = props;

  const isExternalDemoLink =
    typeof demoLink === "string" &&
    (/^(https?:)?\/\//i.test(demoLink) || demoLink.startsWith("mailto:"));

  return (
    <Card className={`project-card-view${cardClassName ? ` ${cardClassName}` : ""}`}>
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
            {...(isExternalDemoLink
              ? { href: demoLink, target: "_blank", rel: "noreferrer" }
              : { as: Link, to: demoLink })}
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
