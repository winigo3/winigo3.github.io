import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Small Home Engineered @ Duke",
          "Smart Home for Emergencies & Disasters",
          "Smart Home Engineered @ Duke",
          "Sarah, Hammond, Ewill, Dgaby",
          "Small Home for Emergencies & Disasters",
          "Sorry Hammond, Everyone Disagrees",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
