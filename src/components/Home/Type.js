import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <Typewriter
      words={[
        "Software Developer",
        "Freelancer",
        "MERN Stack Developer",
        "Open Source Contributor",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  );
}

export default Type;
