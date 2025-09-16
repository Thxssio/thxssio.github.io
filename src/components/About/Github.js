import React, { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const animateCells = () => {
      const rects = node.querySelectorAll("svg rect");
      rects.forEach((r, i) => {
        if (r.dataset.animated) return;
        r.style.animation = "gh-pop-in 0.6s ease forwards";
        r.style.animationDelay = `${i * 0.012}s`;
        r.dataset.animated = "true";
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCells();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div ref={wrapperRef} className="github-animated">
        <GitHubCalendar
          username="thxssio"
          blockSize={15}
          blockMargin={5}
          color="#00bf63"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
