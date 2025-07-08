/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: CIRCLE VISUALIZER
/////////////////////////////////////

const CircleVisualizer = () => {
  return (
    <section id="circle-visualizer">
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">
        Inspecting <Latex>{"$ \\displaystyle S(\\alpha, N) $"}</Latex> through a
        Visualizer
      </h2>
      Doing an example where <Latex>{"$N = 11 $"}</Latex> yields:
      <span className=" flex-col w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$\\displaystyle S(\\alpha, 11) = \\sum_{p<11} e^{2 \\pi i p \\alpha} = e^{2 \\pi i 2 \\alpha} + e^{2 \\pi i 3 \\alpha} + e^{2 \\pi i 5 \\alpha} + e^{2 \\pi i 7 \\alpha} $"
          }
        </Latex>
      </span>
      <p>
        Each of these individual terms in the sum can be seperated into their
        individual clocks, with the <Latex>{"$p$"}</Latex> term essentially
        affecting the rotation speed, where the larger the value of{" "}
        <Latex>{"$p$"}</Latex> the faster the rotation. Since this is a sum, we
        need to add up the sums of the circles, to arrive at a value for our
        number <Latex>{"$N$"}</Latex>. This has been done graphically in desmos,
        and can be visualized by altering the value of{" "}
        <Latex>{"$\\alpha$"}</Latex> in the calculator. Each of the terms have
        also been sequentially added into the calculator to match.
      </p>
      <br />
      <br />
      <div className="relative w-full h-[600px] ">
        <iframe
          src="https://www.desmos.com/calculator/2ak5vlk0nm?embed?expressions=true"
          className="absolute top-0 left-0 w-full h-full border border-gray-300"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

/////////////////////////////////////
// EXPORTING CIRCLE VISUALIZER
/////////////////////////////////////

export default CircleVisualizer;
