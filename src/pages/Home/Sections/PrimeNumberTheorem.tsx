/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: PRIME NUMBER THEOREM
/////////////////////////////////////

const PrimeNumberTheorem = (): JSX.Element => {
  return (
    <section id="prime-number-theorem" className="">
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">
        Prime Number Theorem (PNT)
      </h2>
      <p>
        The prime number theorem states that the number of primes less than or
        equal to a number n asymptotically approaches
      </p>
      <Latex>{"$\\frac{n}{ln(n)}$"}</Latex> where n is a large integer. This can
      be defined as <br />
      <span className="w-full flex items-center justify-center">
        <Latex>{"$\\displaystyle \\pi(n) \\sim \\frac{n}{ln(n)}$"}</Latex>
      </span>
      <br />
      To find the number of primes within a small interval defined as
      <Latex>{"$[n, n+\\Delta n]$"}</Latex> we can do{" "}
      <Latex>{"$\\pi(n+\\Delta n) - \\pi(n)$"}</Latex>. To convert this to a
      probability we can rewrite this as <br />
      <span className="p-8 w-full flex items-center justify-center">
        <Latex>
          {
            "$\\displaystyle \\frac{pi(n+\\Delta n) - \\pi(n)}{n+\\Delta n - n}= \\frac{\\pi(n+\\Delta n) - \\pi(n)}{\\Delta n}$"
          }
        </Latex>
      </span>
      This formula looks similar to that of a derivative using first priciples,
      where
      <span className="w-full flex items-center justify-center p-8">
        <Latex className="block text-center m-[1em]">
          {
            "$\\displaystyle f'(x)= \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}$"
          }
        </Latex>
      </span>
      Since <Latex>{"$\\Delta n$"}</Latex> is infitestimally small compared to
      n, we can take the derivative of <Latex>{"$\\pi(n)$"}</Latex> to get the
      value of the probability
      <br />
      <br />
      <span className="w-full flex items-center justify-center">
        <Latex>
          {
            "$\\displaystyle \\pi'(n) \\sim \\frac{ln(n) \\times 1 - n \\times \\frac{1}{n}}{(ln(n))^2} =  \\frac{ln(n)-1}{(ln(n))^2)} $"
          }
        </Latex>
      </span>
      <br />
      <br />
      At very large values of n, <Latex>{"$ln(n) - 1$"}</Latex> essentially
      converges to <Latex>{"$ln(n)$"}</Latex>.
      <br />
      <br />
      Therefore, we can say that
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$\\displaystyle \\pi'(n) \\sim \\frac{ln(n)-1}{(ln(n))^2} \\approx \\frac{ln(n)}{(ln(n))^2} \\approx \\frac{1}{ln(n)}$"
          }
        </Latex>
        <br />
        <br />
      </span>
      This suggests that the probability that a large number n is a prime number
      is
      <br />
      <br />
      <span className="w-full flex items-center justify-center">
        <Latex>{"$\\displaystyle \\frac{1}{ln(n)}$"}</Latex>
      </span>
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">
        Using the Prime Number Theorem for the Strong Goldbach Conjecture
      </h2>
      Take a large even number, which can be defined as 2n. On a number line,
      this could be bifurcated, with n in the middle. The value of{" "}
      <Latex>{"$2n=a+b$"}</Latex> where <Latex>{"$a<n$"}</Latex> and{" "}
      <Latex>{"$b>n$"}</Latex> and both differ from n by some value{" "}
      <Latex>{"$C$"}</Latex>. This means that the probability that a is a prime
      number is:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$\\displaystyle \\pi'(a) \\sim \\frac{1}{ln(a)}=\\frac{1}{ln(n-C)}$"
          }
        </Latex>
      </span>
      Similarly, the probability that b is a prime number is:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$\\displaystyle \\pi'(b) \\sim \\frac{1}{ln(b)}=\\frac{1}{ln(n+C)}$"
          }
        </Latex>
      </span>
      <br />
      To calculate the probability that both a and b are prime numbers, we
      multiply their probabilities together. When n is large enough, the value
      of C changes much slower than n. This maens the probability that both a
      and b are prime numbers is:
      <span className="flex-col w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$\\displaystyle \\pi'(a) \\times \\pi'(b) \\sim \\frac{1}{ln(n-C)} \\times \\frac{1}{ln(n+C)} $"
          }
        </Latex>
        <br />
        <Latex>
          {
            "$\\displaystyle  = \\frac{1}{ln(n)} \\times \\frac{1}{ln(n)}= \\frac{1}{ln(n)^2}$"
          }
        </Latex>
      </span>
      So the number of prime pairs is:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {"$\\displaystyle \\frac{1}{ln(n)^2} \\times n = \\frac{n}{ln(n)^2}$"}
        </Latex>
      </span>
      Hardy and Littlewood had refined the number of prime number counting pairs
      by adding a correction factor. This meant that their final result was:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$ \\displaystyle \\# prime \\ pairs \\approx 2C_2 \\times \\prod_{p | n \\ \\ \\  p > n} \\frac{p-1}{p-2} \\times  \\frac{n}{ln(n)^2}$"
          }
        </Latex>
      </span>
      However, this is not a proof but rather only an approximation. Their
      conclusion shows that as the number is larger, there are more ways to form
      an even number as a product of two primes.
      <br />
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">
        The Logarithmic Integral and Riemman Hypothesis
      </h2>
      Guass had later proposed the approximate the prime counting function
      using:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$\\displaystyle \\pi(x) \\approx Li(x) = \\int_{2}^{x} \\frac{1}{ln(t)}dt$"
          }
        </Latex>
      </span>
      This integral was a much better fit as <Latex>{"$x \\to \\infty$"}</Latex>{" "}
      compared to <Latex>{"$\\frac{x}{lnx}$"}</Latex>. This new formulation is
      reffered to as the logarithmic integral or <Latex>{"$Li(x)$"}</Latex>. It
      is important to note that:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>{"$\\displaystyle Li(x) \\sim \\frac{x}{lnx}$"}</Latex>
      </span>
      Or as the x term tended towards infinity, the two functions were
      approximately equal. Since the prime numbers do not exactly follow the
      logarithmic integral, we can use the error term or{" "}
      <Latex>{"$O(...)$"}</Latex>. This essentially corrects the curve of being
      solely the logarithmic integral:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {"$\\displaystyle \\pi (x) = Li(x) + O(xe^{-c\\sqrt{lnx} })$"}
        </Latex>
      </span>
      or even better under the Riemman hypothesis:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>{"$\\displaystyle \\pi(x) = Li(x) + O(\\sqrt{x}log(x))$"}</Latex>
      </span>
      We can compare the two error terms, and it can be seen that the from
      assuming the Riemman hypothesis <Latex>{"$r(x)$"}</Latex> is much more
      accurate than the one without it <Latex>{"$n(x)$"}</Latex> since{" "}
      <Latex>{"$r(x) < n(x)$"}</Latex>.
      <br />
      <br />
      <br />
      <div className="relative w-full h-[600px] ">
        <iframe
          src="https://www.desmos.com/calculator/xg8mostqhm?embed?expressions=true"
          width={500}
          height={500}
          className="absolute top-0 left-0 w-full h-full border border-gray-300"
        ></iframe>
      </div>
    </section>
  );
};

/////////////////////////////////////
// EXPORTING PRIME NUMBER THEOREM
/////////////////////////////////////

export default PrimeNumberTheorem;
