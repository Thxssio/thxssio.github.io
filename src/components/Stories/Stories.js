import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import stories from "./storiesData";
import { estimateReadingTime } from "./utils";


const useReadingTimes = () => {
  const [readingTimes, setReadingTimes] = useState({});

  useEffect(() => {
    let active = true;

    const loadReadingTimes = async () => {
      try {
        const entries = await Promise.all(
          stories.map(async (story) => {
            try {
              const response = await fetch(story.contentPath);
              if (!response.ok) throw new Error("Failed to fetch story content");
              const text = await response.text();
              return [story.slug, estimateReadingTime(text)];
            } catch (error) {
              console.warn(`Reading time generation failed for ${story.slug}`, error);
              return [story.slug, "—"];
            }
          })
        );
        if (active) setReadingTimes(Object.fromEntries(entries));
      } catch (error) {
        console.warn("Unable to compute reading times", error);
      }
    };

    loadReadingTimes();

    return () => {
      active = false;
    };
  }, []);

  return readingTimes;
};

const StoryLink = ({ slug, externalLink }) => {
  const primaryCta = {
    label: "Read the walkthrough",
    href: `/stories/${slug}`,
    external: false,
  };

  const secondaryCta = externalLink;

  const renderLink = (cta, variant = "primary") => {
    if (!cta) return null;
    const isExternal = Boolean(cta.external);
    const label = (
      <span className={`medium-card-link-label medium-card-link-label--${variant}`}>
        {cta.label} <span aria-hidden="true">→</span>
      </span>
    );
    const platformBadge = cta.platform ? (
      <span className="medium-card-link-platform">{cta.platform}</span>
    ) : null;

    const children = (
      <>
        {label}
        {platformBadge}
      </>
    );

    return isExternal ? (
      <a
        key={variant}
        className={`medium-card-link medium-card-link--${variant}`}
        href={cta.href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ) : (
      <Link
        key={variant}
        className={`medium-card-link medium-card-link--${variant}`}
        to={cta.href}
      >
        {children}
      </Link>
    );
  };

  const content = (
    <div className="medium-card-links">
      {renderLink(primaryCta, "primary")}
      {secondaryCta ? renderLink(secondaryCta, "secondary") : null}
    </div>
  );
  return content;
};

function Stories() {
  const readingTimes = useReadingTimes();
  return (
    <>
      <Helmet>
        <title>Thássio Silva | Project Stories</title>
        <meta
          name="description"
          content="Narrative-driven spotlights that unpack the decisions, lessons, and impact behind each project in Thássio Silva's portfolio."
        />
      </Helmet>
      <Container fluid className="project-section medium-page">
        <Particle />
        <Container className="medium-wrapper">
          <header className="medium-hero">
            <span className="medium-hero-badge">Project Field Notes</span>
            <h1 className="medium-hero-title">
              Story-driven <span className="purple">Project Chronicles</span>
            </h1>
            <p className="medium-hero-subtitle">
              Bite-sized narratives that spotlight the decisions, experiments, and ripple effects behind the products I build with multidisciplinary teams.
            </p>
          </header>

          <Row className="medium-grid">
            {stories.map((story) => (
              <Col md={6} key={story.title} className="medium-grid-item">
                <article className="medium-card">
                  <figure className="medium-card-thumb">
                    <img src={story.img} alt={story.title} loading="lazy" />
                  </figure>
                  <div className="medium-card-body">
                    <div className="medium-card-meta">
                      <span>{story.date}</span>
                      <span>• {readingTimes[story.slug] ?? "estimating…"}</span>
                    </div>
                    <h2 className="medium-card-title">{story.title}</h2>
                    <p className="medium-card-excerpt">{story.excerpt}</p>
                    <div className="medium-card-footer">
                      <div className="medium-card-tags">
                        {story.tags.map((tag) => (
                          <span key={tag} className="medium-card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <StoryLink slug={story.slug} externalLink={story.externalLink} />
                    </div>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Stories;
