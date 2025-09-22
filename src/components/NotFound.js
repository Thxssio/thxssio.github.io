import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import Particle from "./Particle";
import emptyAnimation from "../Assets/empty.json";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Thássio Silva</title>
        <meta
          name="description"
          content="The page you requested could not be found on Thássio Silva's portfolio."
        />
      </Helmet>
      <Container fluid className="project-section notfound-section">
        <Particle />
        <Container className="notfound-wrapper">
          <div className="notfound-illustration" aria-hidden="true">
            <Lottie
              className="notfound-lottie"
              animationData={emptyAnimation}
              loop
            />
          </div>
          <div className="notfound-copy">
            <p className="notfound-breadcrumb">Error 404</p>
            <h1 className="notfound-title">
              Lost in the <span className="purple">particles</span>?
            </h1>
            <p className="notfound-subtitle">
              This page doesn’t exist or may have been moved. Let’s guide you back
              to the core sections of the portfolio.
            </p>
            <div className="notfound-actions">
              <Link className="notfound-link" to="/">
                Return home
              </Link>
              <Link className="notfound-link" to="/stories">
                Explore project stories
              </Link>
              <Link className="notfound-link" to="/project">
                See projects
              </Link>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default NotFound;
