import React, { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Particle from "../Particle";
import stories from "./storiesData";
import { estimateReadingTime } from "./utils";

function StoryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const story = useMemo(() => stories.find((item) => item.slug === slug), [slug]);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [readingTime, setReadingTime] = useState("");

  useEffect(() => {
    if (!story) {
      setHasError(true);
      setIsLoading(false);
      return;
    }
    let cancelled = false;
    setReadingTime("");
    setIsLoading(true);
    fetch(story.contentPath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${story.contentPath}`);
        }
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          setContent(text);
          setReadingTime(estimateReadingTime(text));
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setHasError(true);
          setIsLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [story]);

  useEffect(() => {
    if (hasError && !isLoading) {
      const timer = setTimeout(() => navigate("/stories", { replace: true }), 2800);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [hasError, isLoading, navigate]);

  const pageTitle = story ? `${story.title} | Thássio Silva` : "Project Story | Thássio Silva";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        {story ? (
          <meta
            name="description"
            content={`Step-by-step breakdown of ${story.title} with lessons learned and implementation notes.`}
          />
        ) : null}
      </Helmet>
      <Container fluid className="project-section story-detail-section">
        <Particle />
        <Container className="story-detail-wrapper">
          {story ? (
            <header className="story-detail-hero">
              <p className="story-detail-back">
                <Link to="/stories">← Back to stories</Link>
              </p>
              <div className="story-detail-meta">
                <span>{story.date}</span>
                <span>• {readingTime || (isLoading ? "estimating…" : "—")}</span>
              </div>
              <h1 className="story-detail-title">{story.title}</h1>
              {story.tags?.length ? (
                <div className="story-detail-tags">
                  {story.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              ) : null}
            </header>
          ) : null}

          <article className="story-detail-content">
            {isLoading ? (
              <div className="story-detail-loading">Loading story…</div>
            ) : null}
            {hasError ? (
              <div className="story-detail-error">
                Unable to load this story. Redirecting you back to the stories hub…
              </div>
            ) : null}
            {!isLoading && !hasError ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            ) : null}
          </article>

          {story?.externalLink ? (
            <footer className="story-detail-footer">
              <span>Related link:</span>
              {story.externalLink.external ? (
                <a
                  className="medium-card-link medium-card-link--secondary"
                  href={story.externalLink.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="medium-card-link-label medium-card-link-label--secondary">
                    {story.externalLink.label} <span aria-hidden="true">→</span>
                  </span>
                  {story.externalLink.platform ? (
                    <span className="medium-card-link-platform">
                      {story.externalLink.platform}
                    </span>
                  ) : null}
                </a>
              ) : (
                <Link
                  className="medium-card-link medium-card-link--secondary"
                  to={story.externalLink.href}
                >
                  <span className="medium-card-link-label medium-card-link-label--secondary">
                    {story.externalLink.label} <span aria-hidden="true">→</span>
                  </span>
                  {story.externalLink.platform ? (
                    <span className="medium-card-link-platform">
                      {story.externalLink.platform}
                    </span>
                  ) : null}
                </Link>
              )}
            </footer>
          ) : null}
        </Container>
      </Container>
    </>
  );
}

export default StoryDetail;
