/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: RIEMMAN HYPOTHESIS
/////////////////////////////////////

const RiemmanHypothesis = () => {
  return (
    <section id="riemann-hypothesis" className="">
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">Riemann Hypothesis</h2>
      <p>The Zeta function is shown as below:</p>
      <span className="p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "$\\zeta(s)=\\frac{1}{1^s}+\\frac{1}{2^s}+\\frac{1}{3^s}+\\frac{1}{4^s}+\\frac{1}{5^s}+...$"
          }
        </Latex>
      </span>
      Euler had proved that the zeta function converges for all values where{" "}
      <Latex>{"$s > 1$"}</Latex>. This can essentially be done by using the
      p-test, which states that a sum{" "}
      <Latex>{"$\\sum_{n=1}^{\\infin} \\frac{1}{x^n}$"}</Latex> only converges
      when <Latex>{"$p > 1$"}</Latex>. Finding the zeros of the zeta function
      was necessary to proving the prime number theory, and the Riemann
      Hypothesis helps refine that.
      {/*! ADD THE PROOF OF THE P-TEST FROM CALC II */}
      Euler had tried to connect this zeta function with prime numbers, and done
      so like this.
      <span className="flex-col p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "(1) $\\zeta(s)=1+\\frac{1}{2^s}+\\frac{1}{3^s}+\\frac{1}{4^s}+\\frac{1}{5^s}+...$"
          }
        </Latex>
      </span>
      <p>
        Multiplying each side by <Latex>{"$\\frac{1}{2^s}$"}</Latex>
      </p>
      <span className="flex-col p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "(2) $\\frac{1}{2^s}\\zeta(s)=\\frac{1}{2^s}+\\frac{1}{4^s}+\\frac{1}{6^s}+\\frac{1}{8^s}+\\frac{1}{10^s}+...$"
          }
        </Latex>
      </span>
      <p>Then by subtracting equation (2) from (1), we get:</p>
      <span className="flex-col p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "$LHS = \\zeta(s) - \\frac{1}{2^s}\\zeta = (1-\\frac{1}{2^s})\\zeta(s)$"
          }
        </Latex>
        <br />
        <Latex>
          {
            "$RHS = 1+\\frac{1}{3^s}+\\frac{1}{5^s}+\\frac{1}{7^s}+\\frac{1}{9^s}+\\frac{1}{11^s}+\\frac{1}{13^s} +...$"
          }
        </Latex>
      </span>
      <p>
        Repeating for the <Latex>{"$\\frac{1}{3^s}$ term we get:"}</Latex>
      </p>
      <span className="flex-col p-8 w-full flex items-center justify-center">
        <Latex>{"$LHS = (1-\\frac{1}{2^s})(1-\\frac{1}{3^s})\\zeta(s)$"}</Latex>
        <br />
        <Latex>
          {
            "$RHS = 1+\\frac{1}{5^s}+\\frac{1}{7^s}+\\frac{1}{11^s}+\\frac{1}{13^s}+\\frac{1}{17^s}+...$"
          }
        </Latex>
      </span>
      Repeating this process for all the terms, we arrive at:
      <span className="flex-col p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "$LHS = (1-\\frac{1}{2^s})(1-\\frac{1}{3^s})(1-\\frac{1}{5^s})(1-\\frac{1}{7^s})(1-\\frac{1}{11^s})\\zeta(s)$"
          }
        </Latex>
        <br />
        <Latex>{"$RHS = 1$"}</Latex>
      </span>
      Isolating back for our zeta function:
      <span className="flex-col p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "$\\zeta(s)=\\frac{1}{(1-\\frac{1}{2^s})(1-\\frac{1}{3^s})(1-\\frac{1}{5^s})(1-\\frac{1}{7^s})(1-\\frac{1}{11^s})...}$"
          }
        </Latex>
      </span>
      This can be condensed into:
      <span className="flex-col p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "$\\displaystyle \\zeta(s) = \\prod_{p\\ \\text{prime}} \\frac{1}{(1 - \\frac{1}{p^s})}$"
          }
        </Latex>
      </span>
      Using this very definition, the idea of prime numbers and the zeta
      function were connected. This means understanding the behaviour of{" "}
      <Latex>{"$ \\displaystyle \\zeta(s)$ "}</Latex>
      we can understand the encoding of primes. There were several steps needed
      to deepen and create a connection that directly help support the prime
      counting function, which can be explored further online.
      <br />
      <br />
      Below are two parts that were explored by mathematicians related the zeta
      function, but which do not directly have an impact on the placement of
      primes. These two are the simple poles and the trivial zeros. However,
      before exploring these two areas, Riemann had to extend the zeta function
      to accept complex function arguments:
      <span className="p-8 w-full flex items-center justify-center">
        <Latex>{"$s = \\sigma + it$ where "}</Latex>
        <Latex>{" $\\ \\in \\mathbb{C}$"}</Latex>
      </span>
      By doing so with anayltic continuation, he had shown that{" "}
      <Latex>{"$\\displaystyle \\zeta(s)$ "}</Latex>
      has a simple pole at <Latex>{"$s=1$"}</Latex>. This essentially means
      there exists a singularity at <Latex>{"$s=1$"}</Latex>. A function is said
      to have a simple pole when:
      <span className="p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "$\\displaystyle \\lim_{s \\to a} (s - a)f(s) = finite \\ and \\ non zero$"
          }
        </Latex>
      </span>
      In this case:
      <span className="p-8 w-full flex items-center justify-center">
        <Latex>
          {"$\\displaystyle \\lim_{s \\to 1} (s - 1)\\zeta(s) = 1$"}
        </Latex>
      </span>
      This means that there exists a simple pole at <Latex>{"$s=1$"}</Latex>.
      <br />
      There are trivial zeros at <Latex>{"$s=-2, -4, -6, ...$"}</Latex>. These
      need to be explored by using the extended domain of our function, which
      rewrites the zeta function as.
      <span className="sm:flex-row flex-col space-x-1 sm:space-y-0 space-y-5 w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$\\displaystyle \\zeta(s) = 2^s \\pi^{s-1}\\sin(\\frac{\\pi s}{2}) \\Gamma(1-s)\\zeta(1-s) \\  $"
          }
        </Latex>
        <p>where</p>
        <Latex>
          {
            "$\\ \\displaystyle \\Gamma(s) = \\int_{0}^{\\infty} x^{s-1}e^{-x}dx$"
          }
        </Latex>
      </span>
      A negative even number can be written as{" "}
      <Latex>{"$s = -2m, m \\in \\mathbb{Z}^+$"}</Latex>. This means the zeta
      function is equal to{" "}
      <span className="sm:flex-row flex-col space-x-1 sm:space-y-0 space-y-5 w-full flex items-center justify-center pl-8 pr-8 pt-8">
        <Latex>
          {
            "$\\displaystyle \\zeta(-2m) = 2^{-2m} \\pi^{-2m-1}\\sin(\\frac{\\pi (-2m)}{2}) $"
          }
        </Latex>
        <Latex>{"$\\times \\ \\Gamma(1-(-2m))\\zeta(1-(-2m)) $"}</Latex>
      </span>
      <span className="space-y-8 p-8 w-full flex items-center justify-center flex-col">
        <Latex>
          {
            "$\\displaystyle = 2^{-2m} \\pi^{-2m-1}\\sin(-\\pi m) \\Gamma(1 + 2m)\\zeta(1 + 2m) $"
          }
        </Latex>
        <Latex>
          {
            "$\\displaystyle = 2^{-2m} \\pi^{-2m-1}\\underbrace{\\sin(-\\pi m)}_{=\\ sin(\\pi m)\\ =\\ 0} \\Gamma(1 + 2m)\\zeta(1 + 2m) $"
          }
        </Latex>
        <Latex>
          {
            "$\\displaystyle = 2^{-2m} \\pi^{-2m-1} \\times 0 \\times \\Gamma(1 + 2m)\\zeta(1 + 2m) $"
          }
        </Latex>
        <Latex>{"$ = 0$"}</Latex>
      </span>
      Therefore, there are no zeros at <Latex>{"$s=-2, -4, -6, ...$"}</Latex>.
      These can be reffered to as trivial zeros. These were important to
      explore, but do not have any direct effect on the location of primes on a
      number line. More importantly, it has non-trivial zeros in the strip{" "}
      <Latex>{"$0 < \\Re(s) < 1$"}</Latex> that are important to explore. The
      Riemman Hypothesis is that all nontrivial zeros of zeta lie on the
      critical line where <Latex>{"$\\Re(s) = \\frac{1}{2} $"}</Latex>. The need
      for the Riemman Hypothesis will be explored in the next section, but in
      relation to the prime numbers, only the critical line is important.
    </section>
  );
};

/////////////////////////////////////
// EXPORTING RIEMMAN HYPOTHESIS
/////////////////////////////////////

export default RiemmanHypothesis;
