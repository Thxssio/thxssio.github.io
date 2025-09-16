import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaExternalLinkAlt } from "react-icons/fa";

function PublicationCard({ title, authors, venue, year, link }) {
  const targetLink = link || "https://scholar.google.com/citations?hl=es&user=hUG_r3kAAAAJ";
  return (
    <Card className="publication-card-view">
      <Card.Body>
        <div className="pub-header">
          <Card.Title className="pub-title">{title}</Card.Title>
          <div className="pub-badges">
            {venue && <span className="pub-badge pub-venue">{venue}</span>}
            {year && <span className="pub-badge pub-year">{year}</span>}
          </div>
        </div>
        <Card.Text className="pub-authors">{authors}</Card.Text>
        {targetLink && (
          <Button variant="primary" href={targetLink} target="_blank" rel="noreferrer">
            View <FaExternalLinkAlt style={{ marginLeft: 6, marginBottom: 2 }} />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default PublicationCard;
