import React from "react";
import Typewriter from "typewriter-effect";

{/* "Smart Home to Explore and Do", */}

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Smart Home Engineered @ Duke",
          "Sketch of the SHED! →",
          "Built by Duke Students",
          "Small Home Engineered @ Duke",
          "Email us at thedukeshed@gmail.com",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
