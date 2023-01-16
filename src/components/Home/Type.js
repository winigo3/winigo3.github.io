import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Smart Home Engineered @ Duke",
          "Sketch of the SHED! →",
          "Smart Home to Explore and Do",
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
