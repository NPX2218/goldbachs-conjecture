/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
import primeCountingFunction from "../../../data/prime_counting_function.png";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: GUASS CONJECTURE
/////////////////////////////////////

const GuassConjecture = (): JSX.Element => {
  return (
    <section id="guass-conjecture" className="">
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">Gauss's Conjecture</h2>
      <p>
        Carl Friedrich Gauss inspected the relationship between prime numbers
        and if there was a quantifiable relationship that could help predict the
        number of prime numbers in relation to the real numbers. For that, he
        made tables consisting of the primes up to 3 million and looked for
        patterns. To graph a relationship, Gauss created a function called the
        Prime Counting Function. For every prime number reached on the x-axis,
        the y-axis was incremented by one. This essentially created a step-like
        function. An example of the function can be seen here:
      </p>
      <div className="flex items-center justify-center">
        {" "}
        <img src={primeCountingFunction} className="p-8" alt="" />
      </div>
      As the function is tested and for larger and larger number values, Gauss
      had realized if <Latex>{"$\\pi(n) = f(x)$"}</Latex> that must mean that{" "}
      <Latex>{"$\\frac{\\pi(n)}{f(x)} = 1$"}</Latex> assuming that{" "}
      <Latex>{"$f(x)$ "}</Latex>
      correctly evaluates to <Latex>{"$\\pi(n)$"}</Latex>. Gauss had noticed
      that a function <Latex>{"$f(x) = \\frac{n}{ln(n)}$"}</Latex> and where{" "}
      <Latex>{"$\\frac{\\pi(n)}{\\frac{n}{ln(n)}} = 1$"}</Latex> had fit his
      model as <Latex>{"$N \\rightarrow \\infin$"}</Latex>. Or more simply:
      <span className="p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "$\\displaystyle \\lim_{x \\rightarrow \\infin} \\frac{\\pi(n)}{\\frac{n}{ln(n)}} = 1$"
          }
        </Latex>
      </span>
      This allowed him to postulate that the prime counting function could be
      defined as:
      <span className="w-full flex items-center justify-center p-8">
        {" "}
        <Latex>{"$\\displaystyle \\pi(n) \\sim  \\frac{n}{ln(n)}$"}</Latex>
      </span>
      Gauss's conjecture was later proved to be true mathematically true
      independently by both Jacques Hadamard and Charles Jean de la Vallée
      Poussin. Both mathematicians used the Riemann zeta function to prove the
      prime number theorem.
    </section>
  );
};

/////////////////////////////////////
// EXPORTING GUASS CONJECTURE
/////////////////////////////////////

export default GuassConjecture;
