/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
import primesPyramid from "../../../data/primes_pyramid.png";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: PRIMES PYRAMID
/////////////////////////////////////

const PrimesPyramid = (): JSX.Element => {
  return (
    <section id="primes-pyramid">
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">
        Sums of two primes at the intersections of three lines
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-top">
        <div className="lg:w-full md:w-2/3 pr-12">
          <p>
            By overlaying a pattern between prime numbers and their sums, it is
            obviously evident that even numbers can be formed by two prime
            numbers, but it is unclear if this relationship is true for all even
            numbers. This can be seen by the photo attatched to this paragraph.
            By adding numbers on the left and right hand side, the sum can be
            seen as even numbers. Although this can partically be seen
            diagramatially, we can prove this using prove this using the
            Hardy-Littlewood circle method.
            <br />
            <br />
            This method provides a method for analyzing the distribution of
            prime sums through integration over the unit circle. By moving
            beyond isolated numerical cases and adressing the conjecture
            probabilistically and asymptotically across the infinite set of even
            numbers, a result can be found.
          </p>
        </div>
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <img src={primesPyramid} alt="" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};

/////////////////////////////////////
// EXPORTING PRIMES PYRAMID
/////////////////////////////////////

export default PrimesPyramid;
