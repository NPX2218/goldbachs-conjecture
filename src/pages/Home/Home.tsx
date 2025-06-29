/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
import primeCountingFunction from "../../data/prime_counting_function.png";
import primesPyramid from "../../data/primes_pyramid.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";
var Latex = require("react-latex");

/////////////////////////////////////
// INTERFACE: PROPS
/////////////////////////////////////

interface Props {
  scroll?: LocomotiveScroll | null;
}

/////////////////////////////////////
// COMPONENT: HOME
/////////////////////////////////////

const Home = ({ scroll }: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center py-12 bg-black">
        <div className="flex flex-col items-center self-stretch px-20 mt-1.5 w-full max-md:px-5 max-md:max-w-full">
          <Navbar scroll={scroll} />
        </div>
        <br />
        <br />
        <div className="text-white text-md px-auto min-[1300px]:max-w-6xl max-w-xs sm:max-w-xl min-[600px]:max-w-sm min-[1043px]:max-w-4xl min-[800px]:max-w-2xl">
          <section id="introduction">
            <h2 className="text-white text-2xl font-bold pb-2">Introduction</h2>
            <p>
              Goldbach's Conjecture is a collection that encloses two distinct
              conjectures related to prime numbers and their sums. By
              definition, a prime number is a number whose only factors are one
              and itself. It is also important to note that during the time of
              Goldbach, the number 1 was not considered a prime number but
              rather recharacterized as a composite number. The two conjectures
              are categorized as "weak" and "strong"; these names emphasize
              their interconnection rather than the ease of proving them. This
              is because proving the "strong" Conjecture would directly imply
              that the "weak" Conjecture is true; this case will be explained
              later. The two conjectures are as follows:
              <br />
              <br />
              <ol className="text-white list-decimal pl-4">
                <li>
                  <b>Goldbach Strong Conjecture</b>: "Every even number greater
                  than 2 can be written as the sum of two primes".
                </li>
                Or mathematically, <Latex>{"$N_{even} = p_1 + p_2$"}</Latex>{" "}
                where <Latex>{"$ p_1, p_2 $"}</Latex> are primes and are greater
                than 2.
                <li>
                  <b>Goldbach's Weak Conjecture</b>: that "Every odd number
                  greater than 5 can be written as a sum of three primes".
                </li>
                Or mathematically,{" "}
                <Latex>{"$N_{odd} = p_1 + p_2 + p_3$"}</Latex> where{" "}
                <Latex>{"$ p_1, p_2, p_3 $"}</Latex> are primes and{" "}
                <Latex>{"$ N_{odd} > 5$"}</Latex>
              </ol>
              <br />
              If we are able to prove the strong Conjecture, we can use{" "}
              <Latex>{"$n = 3 + even$"}</Latex> to reach any n that is greater
              than 5. This is also because 3 is a prime number --- and can,
              therefore, be added to get any other odd number.
              <br />
              <br />
              Although there are no seemingly real-world applications to the
              proof of the strong or weak Goldbach theorem, it is essential to
              explore new areas of mathematics to utilize it and discover new,
              possibly previously unexplored regions. Therefore, this website
              will walk you simply through both of the conjectures and how the
              weak one has been proved.
              <br />
            </p>
          </section>
          <br />

          <section id="primes-pyramid">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Sums of two primes at the intersections of three lines
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-top">
              <div className="lg:w-full md:w-2/3 pr-12">
                <p>
                  By overlaying a pattern between prime numbers and their sums,
                  it is obviously evident that even numbers can be formed by two
                  prime numbers, but it is unclear if this relationship is true
                  for all even numbers. This can be seen by the photo attatched
                  to this paragraph. By adding numbers on the left and right
                  hand side, the sum can be seen as even numbers. Although this
                  can partically be seen diagramatially, we can prove this using
                  prove this using the Hardy-Littlewood circle method.
                  <br />
                  <br />
                  This method provides a method for analyzing the distribution
                  of prime sums through integration over the unit circle. By
                  moving beyond isolated numerical cases and adressing the
                  conjecture probabilistically and asymptotically across the
                  infinite set of even numbers, a result can be found.
                </p>
              </div>
              <div className="md:w-1/3 w-full flex items-center justify-center">
                <img src={primesPyramid} alt="" width={300} height={300} />
              </div>
            </div>
          </section>

          <section id="guass-conjecture" className="">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Gauss's Conjecture
            </h2>
            <p>
              Carl Friedrich Gauss inspected the relationship between prime
              numbers and if there was a quantifiable relationship that could
              help predict the number of prime numbers in relation to the real
              numbers. For that, he made tables consisting of the primes up to 3
              million and looked for patterns. To graph a relationship, Gauss
              created a function called the Prime Counting Function. For every
              prime number reached on the x-axis, the y-axis was incremented by
              one. This essentially created a step-like function. An example of
              the function can be seen here:
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <img src={primeCountingFunction} className="p-8" alt="" />
            </div>
            As the function is tested and for larger and larger number values,
            Gauss had realized if <Latex>{"$\\pi(n) = f(x)$"}</Latex> that must
            mean that <Latex>{"$\\frac{\\pi(n)}{f(x)} = 1$"}</Latex> assuming
            that <Latex>{"$f(x)$ "}</Latex>
            correctly evaluates to <Latex>{"$\\pi(n)$"}</Latex>. Gauss had
            noticed that a function <Latex>{"$f(x) = \\frac{n}{ln(n)}$"}</Latex>{" "}
            and where <Latex>{"$\\frac{\\pi(n)}{\\frac{n}{ln(n)}} = 1$"}</Latex>{" "}
            had fit his model as <Latex>{"$N \\rightarrow \\infin$"}</Latex>. Or
            more simply:
            <span className="p-8 w-full flex items-center justify-center">
              <Latex>
                {
                  "$\\displaystyle \\lim_{x \\rightarrow \\infin} \\frac{\\pi(n)}{\\frac{n}{ln(n)}} = 1$"
                }
              </Latex>
            </span>
            This allowed him to postulate that the prime counting function could
            be defined as:
            <span className="w-full flex items-center justify-center p-8">
              {" "}
              <Latex>
                {"$\\displaystyle \\pi(n) \\sim  \\frac{n}{ln(n)}$"}
              </Latex>
            </span>
            Gauss's conjecture was later proved to be true mathematically true
            independently by both Jacques Hadamard and Charles Jean de la Vallée
            Poussin. Both mathematicians used the Riemann zeta function to prove
            the prime number theorem.
          </section>

          <section id="riemann-hypothesis" className="">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Riemann Hypothesis
            </h2>
            <p>The Zeta function is shown as below:</p>
            <span className="p-8 w-full flex items-center justify-center">
              <Latex>
                {
                  "$\\zeta(s)=\\frac{1}{1^s}+\\frac{1}{2^s}+\\frac{1}{3^s}+\\frac{1}{4^s}+\\frac{1}{5^s}+...$"
                }
              </Latex>
            </span>
            Euler had proved that the zeta function converges for all values
            where <Latex>{"$s > 1$"}</Latex>. This can essentially be done by
            using the p-test, which states that a sum{" "}
            <Latex>{"$\\sum_{n=1}^{\\infin} \\frac{1}{x^n}$"}</Latex> only
            converges when <Latex>{"$p > 1$"}</Latex>. Finding the zeros of the
            zeta function was necessary to proving the prime number theory, and
            the Riemann Hypothesis helps refine that.
            {/*! ADD THE PROOF OF THE P-TEST FROM CALC II */}
            Euler had tried to connect this zeta function with prime numbers,
            and done so like this.
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
              <Latex>
                {"$LHS = (1-\\frac{1}{2^s})(1-\\frac{1}{3^s})\\zeta(s)$"}
              </Latex>
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
            we can understand the encoding of primes. There were several steps
            needed to deepen and create a connection that directly help support
            the prime counting function, which can be explored further online.
            <br />
            <br />
            Below are two parts that were explored by mathematicians related the
            zeta function, but which do not directly have an impact on the
            placement of primes. These two are the simple poles and the trivial
            zeros. However, before exploring these two areas, Riemann had to
            extend the zeta function to accept complex function arguments:
            <span className="p-8 w-full flex items-center justify-center">
              <Latex>{"$s = \\sigma + it$ where "}</Latex>
              <Latex>{" $\\ \\in \\mathbb{C}$"}</Latex>
            </span>
            By doing so with anayltic continuation, he had shown that{" "}
            <Latex>{"$\\displaystyle \\zeta(s)$ "}</Latex>
            has a simple pole at <Latex>{"$s=1$"}</Latex>. This essentially
            means there exists a singularity at <Latex>{"$s=1$"}</Latex>. A
            function is said to have a simple pole when:
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
            This means that there exists a simple pole at{" "}
            <Latex>{"$s=1$"}</Latex>.
            <br />
            There are trivial zeros at <Latex>{"$s=-2, -4, -6, ...$"}</Latex>.
            These need to be explored by using the extended domain of our
            function, which rewrites the zeta function as.
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
            <Latex>{"$s = -2m, m \\in \\mathbb{Z}^+$"}</Latex>. This means the
            zeta function is equal to{" "}
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
            Therefore, there are no zeros at{" "}
            <Latex>{"$s=-2, -4, -6, ...$"}</Latex>. These can be reffered to as
            trivial zeros. These were important to explore, but do not have any
            direct effect on the location of primes on a number line. More
            importantly, it has non-trivial zeros in the strip{" "}
            <Latex>{"$0 < \\Re(s) < 1$"}</Latex> that are important to explore.
            The Riemman Hypothesis is that all nontrivial zeros of zeta lie on
            the critical line where <Latex>{"$\\Re(s) = \\frac{1}{2} $"}</Latex>
            . The need for the Riemman Hypothesis will be explored in the next
            section, but in relation to the prime numbers, only the critical
            line is important.
          </section>

          <section id="prime-number-theorem" className="">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Prime Number Theorem (PNT)
            </h2>
            <p>
              The prime number theorem states that the number of primes less
              than or equal to a number n asymptotically approaches
            </p>
            <Latex>{"$\\frac{n}{ln(n)}$"}</Latex> where n is a large integer.
            This can be defined as <br />
            <span className="w-full flex items-center justify-center">
              <Latex>{"$\\displaystyle \\pi(n) \\sim \\frac{n}{ln(n)}$"}</Latex>
            </span>
            <br />
            To find the number of primes within a small interval defined as
            <Latex>{"$[n, n+\\Delta n]$"}</Latex> we can do{" "}
            <Latex>{"$\\pi(n+\\Delta n) - \\pi(n)$"}</Latex>. To convert this to
            a probability we can rewrite this as <br />
            <span className="p-8 w-full flex items-center justify-center">
              <Latex>
                {
                  "$\\displaystyle \\frac{pi(n+\\Delta n) - \\pi(n)}{n+\\Delta n - n}= \\frac{\\pi(n+\\Delta n) - \\pi(n)}{\\Delta n}$"
                }
              </Latex>
            </span>
            This formula looks similar to that of a derivative using first
            priciples, where
            <span className="w-full flex items-center justify-center p-8">
              <Latex className="block text-center m-[1em]">
                {
                  "$\\displaystyle f'(x)= \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}$"
                }
              </Latex>
            </span>
            Since <Latex>{"$\\Delta n$"}</Latex> is infitestimally small
            compared to n, we can take the derivative of{" "}
            <Latex>{"$\\pi(n)$"}</Latex> to get the value of the probability
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
            At very large values of n, <Latex>{"$ln(n) - 1$"}</Latex>{" "}
            essentially converges to <Latex>{"$ln(n)$"}</Latex>.
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
            This suggests that the probability that a large number n is a prime
            number is
            <br />
            <br />
            <span className="w-full flex items-center justify-center">
              <Latex>{"$\\displaystyle \\frac{1}{ln(n)}$"}</Latex>
            </span>
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Using the Prime Number Theorem for the Strong Goldbach Conjecture
            </h2>
            Take a large even number, which can be defined as 2n. On a number
            line, this could be bifurcated, with n in the middle. The value of{" "}
            <Latex>{"$2n=a+b$"}</Latex> where <Latex>{"$a<n$"}</Latex> and{" "}
            <Latex>{"$b>n$"}</Latex> and both differ from n by some value{" "}
            <Latex>{"$C$"}</Latex>. This means that the probability that a is a
            prime number is:
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
            multiply their probabilities together. When n is large enough, the
            value of C changes much slower than n. This maens the probability
            that both a and b are prime numbers is:
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
                {
                  "$\\displaystyle \\frac{1}{ln(n)^2} \\times n = \\frac{n}{ln(n)^2}$"
                }
              </Latex>
            </span>
            Hardy and Littlewood had refined the number of prime number counting
            pairs by adding a correction factor. This meant that their final
            result was:
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$ \\displaystyle \\# prime \\ pairs \\approx 2C_2 \\times \\prod_{p | n \\ \\ \\  p > n} \\frac{p-1}{p-2} \\times  \\frac{n}{ln(n)^2}$"
                }
              </Latex>
            </span>
            However, this is not a proof but rather only an approximation. Their
            conclusion shows that as the number is larger, there are more ways
            to form an even number as a product of two primes.
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
            This integral was a much better fit as{" "}
            <Latex>{"$x \\to \\infty$"}</Latex> compared to{" "}
            <Latex>{"$\\frac{x}{lnx}$"}</Latex>. This new formulation is
            reffered to as the logarithmic integral or{" "}
            <Latex>{"$Li(x)$"}</Latex>. It is important to note that:
            <span className="w-full flex items-center justify-center p-8">
              <Latex>{"$\\displaystyle Li(x) \\sim \\frac{x}{lnx}$"}</Latex>
            </span>
            Or as the x term tended towards infinity, the two functions were
            approximately equal. Since the prime numbers do not exactly follow
            the logarithmic integral, we can use the error term or{" "}
            <Latex>{"$O(...)$"}</Latex>. This essentially corrects the curve of
            being solely the logarithmic integral:
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {"$\\displaystyle \\pi (x) = Li(x) + O(xe^{-c\\sqrt{lnx} })$"}
              </Latex>
            </span>
            or even better under the Riemman hypothesis:
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {"$\\displaystyle \\pi(x) = Li(x) + O(\\sqrt{x}log(x))$"}
              </Latex>
            </span>
            We can compare the two error terms, and it can be seen that the from
            assuming the Riemman hypothesis <Latex>{"$r(x)$"}</Latex> is much
            more accurate than the one without it <Latex>{"$n(x)$"}</Latex>{" "}
            since <Latex>{"$r(x) < n(x)$"}</Latex>.
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

          <section id="circle-method">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Hardy-Littlewood Circle Method
            </h2>
            To define a vector, we can do so with
            <span className="w-full flex items-center justify-center p-8">
              <Latex>{"$e^{i \\theta} \\, $"}</Latex>where{" "}
              <Latex>{"$\\, \\theta=2\\pi m $"}</Latex>
            </span>
            We can also add a scaling factor which essentially creates a slider
            to the value of the angle theta. The scaling factor is{" "}
            <Latex>{"$ \\alpha $"}</Latex>, making our new defintion:
            <span className="w-full flex items-center justify-center p-8">
              <Latex>{"$e^{2\\pi m i \\alpha} \\, $"}</Latex> where{" "}
              <Latex>{"$ \\,  \\alpha \\in [0,1]$"}</Latex>
            </span>
            If we iterate over our entire scaling factor, we go over the entire
            circle. Summing up the magnitudes, we get that the total value is
            equal or mathematically:
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$\\displaystyle \\int_0^1 e^{2\\pi m i \\alpha} d \\alpha = 0$"
                }
              </Latex>
            </span>
            This means that
            <span className="w-full flex items-center justify-center p-8">
              <Latex className="text-white">
                {
                  "$$ \\displaystyle  f(x)= \\begin{cases} {\\displaystyle \\int_0^1 e^{2\\pi m i \\alpha} d \\alpha = 0}, & m = 1,2,3... \\\\ \\displaystyle \\int_0^1 e^{2\\pi m i \\alpha} d \\alpha = 1, & m = 0 \\end{cases}$$"
                }
              </Latex>
            </span>
            Supposing we have three primes <Latex>{"$p_1,p_2,p_3$"}</Latex>,
            their sum should be <Latex>{"$N$"}</Latex> or{" "}
            <Latex>{"$p_1,p_2,p_3 = N$"}</Latex>. If this is true, then{" "}
            <Latex>{"$p_1,p_2,p_3 - N = 0$"}</Latex> must also hold true.
            Therefore, we can substitute this into our integral for the varialbe
            m to see if the sum of the primes is equal to desired number N.
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$\\displaystyle \\int_0^1 e^{2\\pi  (p_1,p_2,p_3 - N) i \\alpha} d \\alpha $"
                }
              </Latex>
            </span>
            Inorder to use this integral, we would test all the primes that are
            less than <Latex>{"$N$"}</Latex> (Assuming we know all the primes,
            but in reality as <Latex>{"$N \\rightarrow \\infty$"}</Latex> we are
            not able to know all the primes).
            <span className="flex-col w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$\\displaystyle \\sum_{p_1, p_2, p_3 \\leq N} \\int_0^1 e^{2\\pi  (p_1,p_2,p_3 - N) i \\alpha} d \\alpha $"
                }
              </Latex>
              <br />
              <Latex>
                {
                  "$\\displaystyle = \\int_0^1  \\sum_{p_1, p_2, p_3 \\leq N} e^{2\\pi  (p_1,p_2,p_3 - N) i \\alpha} d \\alpha $"
                }
              </Latex>
            </span>
            This mathematically works, but may have duplicates for example 2+2+7
            and 7+2+2, although this is acceptable. Now proving{" "}
            <Latex>{"$h(N) \\geq 1 $"}</Latex> for every odd number greater than
            5, this could prove the Goldbach conjecture. Using exponent laws, we
            can split up our e term.:
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$\\displaystyle  \\int_0^1  \\sum_{p_1, p_2, p_3 \\leq N} e^{2\\pi p_1 i \\alpha} e^{2\\pi p_2 i \\alpha} e^{2\\pi p_3 i \\alpha} e^{-2\\pi iN \\alpha} d \\alpha $"
                }
              </Latex>
            </span>
            Since there is nothing that distringusihes our primes and they are
            general, we can create a general function wrapper.
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$\\displaystyle S(\\alpha, N)= \\sum_{p<N} e^{2\\pi p i \\alpha} $"
                }
              </Latex>
            </span>
            This means we can rewrite our integral as:
            <span className=" flex-col w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$ \\displaystyle \\int_0^1 S(\\alpha, N) S(\\alpha, N) S(\\alpha, N) e^{-2\\pi iN \\alpha}  d \\alpha $"
                }
              </Latex>
              <br />
              <Latex>
                {
                  "$ \\displaystyle  = \\int_0^1 S(\\alpha, N)^3 e^{-2\\pi iN \\alpha} d \\alpha $"
                }
              </Latex>
              <br />
              <Latex>
                {
                  "$ \\displaystyle \\therefore h(N)=    \\int_0^1 S(\\alpha, N)^3 e^{-2\\pi iN \\alpha} d \\alpha $"
                }
              </Latex>
            </span>
          </section>
          <section id="circle-visualizer">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Inspecting <Latex>{"$ \\displaystyle S(\\alpha, N) $"}</Latex>{" "}
              through a Visualizer
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
              Each of these individual terms in the sum can be seperated into
              their individual clocks, with the <Latex>{"$p$"}</Latex> term
              essentially affecting the rotation speed, where the larger the
              value of <Latex>{"$p$"}</Latex> the faster the rotation. Since
              this is a sum, we need to add up the sums of the circles, to
              arrive at a value for our number <Latex>{"$N$"}</Latex>. This has
              been done graphically in desmos, and can be visualized by altering
              the value of <Latex>{"$\\alpha$"}</Latex> in the calculator. Each
              of the terms have also been sequentially added into the calculator
              to match.
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
          <section id="circle-method-decomposition">
            <br />
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Decomposing the Integral: Major and Minor Arcs
            </h2>
            <p>
              The integral we arrived at,{" "}
              <Latex>
                {
                  "$ \\displaystyle\\int_0^1 S(\\alpha, N)^3 e^{-2\\pi i N \\alpha} d \\alpha$"
                }
              </Latex>
              , essentially counts the number of ways we can write{" "}
              <Latex>{"$N$"}</Latex> as a sum of 3 primes.
            </p>
            <p>
              To evaluate it, Hardy and Littlewood split the domain of{" "}
              <Latex>{"$\\alpha$"}</Latex> into two parts:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Major arcs</strong>: Small neighborhoods around rational
                numbers like <Latex>{"$\\frac{a}{q}$"}</Latex> with small
                denominator <Latex>{"$q$"}</Latex>. This is essentially space
                with large areas of constructive interference. The function
                behaves in a fairly "predictable" or "structured" way, allowing
                us to approximate it.
              </li>
              <li>
                <strong>Minor arcs</strong>: Everything else — where destructive
                interference occurs. This is where the circles behave
                chaotically — the vectors point in seemingly random directions,
                and when you sum them, they mostly cancel out. This is like
                summing unit vectors all around a circle.
              </li>
            </ul>
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$ \\displaystyle \\sum e^{2\\pi i m \\alpha} \\approx 0 $ (if $\\alpha$ is irrational or not well-approximated by rationals)"
                }
              </Latex>
            </span>
            <p>
              So the contribution from the minor arcs is very small — almost
              like noise. The major arcs, on the other hand, lead to
              constructive interference and give us the dominant term in the
              result. Although the example given beforehand where{" "}
              <Latex>{"$ N = 11$"}</Latex> has constructive intereference only
              when <Latex>{"$\\alpha = \\{0, 1\\}$"}</Latex>, with larger N
              values, there will be rational fractions for which constructive
              interference occurs. The reason for the destructive and
              constructive nature of the circles happening is the following.
              Assuming that
              <Latex>{"$\\ \\alpha = \\frac{1}{2}$"}</Latex> and{" "}
              <Latex>{"$p = 2n + r$"}</Latex>
            </p>
            <div className="flex-row space-x-10 flex items-center justify-center pt-8">
              <table>
                <tr>
                  <td></td>
                  <td>
                    <Latex>{"$p$"}</Latex>
                  </td>
                  <td>
                    <Latex>{"$n$"}</Latex>
                  </td>
                  <td>
                    <Latex>{"$r$"}</Latex>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{2}{2}}$"}</Latex>
                  </td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{3}{2}}$"}</Latex>
                  </td>
                  <td>3</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{5}{2}}$"}</Latex>
                  </td>
                  <td>5</td>
                  <td>2</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{7}{2}}$"}</Latex>
                  </td>
                  <td>7</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{11}{2}}$"}</Latex>
                  </td>
                  <td>11</td>
                  <td>5</td>
                  <td>1</td>
                </tr>
              </table>
              <div>
                <p>
                  <i className="arrow right"></i>
                </p>
              </div>
              <table>
                <tr>
                  <td></td>
                  <td>
                    <Latex>{"$p$"}</Latex>
                  </td>
                  <td>
                    <Latex>{"$r$"}</Latex>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{2}{2}}$"}</Latex>
                  </td>
                  <td>2</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{3}{2}}$"}</Latex>
                  </td>
                  <td>3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{5}{2}}$"}</Latex>
                  </td>
                  <td>5</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{7}{2}}$"}</Latex>
                  </td>
                  <td>7</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{11}{2}}$"}</Latex>
                  </td>
                  <td>11</td>
                  <td>1</td>
                </tr>
              </table>
            </div>
            <br />
            Since we are not concerned with full revolutions of n, we only focus
            on r. In this example, since the remainders are all one, this means
            that the circles do a half rotation and constructively interefere at{" "}
            <Latex>{"$\\alpha = \\frac{1}{2}$"}</Latex>. We can do this process
            again, but for <Latex>{"$\\alpha = \\frac{1}{3}$"}</Latex>
            <div className="flex-row space-x-10 flex items-center justify-center pt-8">
              <table>
                <tr>
                  <td></td>
                  <td>
                    <Latex>{"$p$"}</Latex>
                  </td>
                  <td>
                    <Latex>{"$n$"}</Latex>
                  </td>
                  <td>
                    <Latex>{"$r$"}</Latex>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{2}{3}}$"}</Latex>
                  </td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{3}{3}}$"}</Latex>
                  </td>
                  <td>3</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{5}{3}}$"}</Latex>
                  </td>
                  <td>5</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{7}{3}}$"}</Latex>
                  </td>
                  <td>7</td>
                  <td>2</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{11}{3}}$"}</Latex>
                  </td>
                  <td>11</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
              </table>

              <div>
                <p>
                  <i className="arrow right"></i>
                </p>
              </div>

              <table>
                <tr>
                  <td></td>
                  <td>
                    <Latex>{"$p$"}</Latex>
                  </td>
                  <td>
                    <Latex>{"$r$"}</Latex>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{2}{3}}$"}</Latex>
                  </td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{3}{3}}$"}</Latex>
                  </td>
                  <td>3</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{5}{3}}$"}</Latex>
                  </td>
                  <td>5</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{7}{3}}$"}</Latex>
                  </td>
                  <td>7</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <Latex>{"$e^{2\\pi i \\frac{11}{3}}$"}</Latex>
                  </td>
                  <td>11</td>
                  <td>2</td>
                </tr>
              </table>
            </div>
            <br />
            Once again, there is constructive intereference. This pattern also
            occurs for other rational fractions, but for other non rational
            fractions the same pattern of constructive intereference does not
            occur. This means the majority of interefernece that came means that
            Littlewood and Hardy could split their calculation into two main
            parts.
            <span className="sm:flex-row flex-col space-x-1 sm:space-y-0 space-y-5 w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$ h(N) = \\displaystyle \\underbrace{ \\int_{M} S(\\alpha, N)^3e^{-2\\pi i N \\alpha} d\\alpha}_{Major Arcs} $"
                }
              </Latex>
              <Latex>
                {
                  "$+ \\underbrace{\\int_{m} S(\\alpha, N)^3e^{-2\\pi i N \\alpha}d\\alpha}_{Minor Arcs} $"
                }
              </Latex>
            </span>
            This can be isolated for the main term, which is essentially created
            by the major arcs
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$ f(N) = \\displaystyle  \\int_{M} S(\\alpha, N)^3e^{-2\\pi i N \\alpha} d\\alpha $"
                }
              </Latex>
            </span>
            and an error term
            <span className="w-full flex items-center justify-center p-8">
              <Latex>
                {
                  "$ e(N) = \\displaystyle  \\int_{m} S(\\alpha, N)^3e^{-2\\pi i N \\alpha} d\\alpha $"
                }
              </Latex>
            </span>
            Littlewood and Hardy then showed that if the Riemman Hypothesis is
            true, then the main term <Latex>{"$f(N)$"}</Latex> grows faster than
            the error term <Latex>{"$e(N)$"}</Latex> from some value{" "}
            <Latex>{"$K$"}</Latex>. That means eventually, the value of{" "}
            <Latex>{"$h(N) \\ge 1 $"}</Latex> all the weak Goldbach conjecture
            holds. H.A. Helfgott proved that every odd number greater than 5 can
            be written as primes by leveraging the Hardy–Littlewood method.
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

/////////////////////////////////////
// EXPORTING HOME
/////////////////////////////////////

export default Home;
