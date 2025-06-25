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
                  can partically be seen diagramatially, we must prove this
                  using prove this using the Hardy-Littlewood circle method.
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

          <section id="prime-number-theorem" className="">
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
            This means he postulated that the prime counting function could be
            defined as
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

          <section id="prime-number-theorem" className="">
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
            Using this very definition, the idea of prime numbers and the
            Riemann Hypothesis were connected.
          </section>

          <section id="prime-number-theorem" className="">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Prime Number Theorem
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
            value of C chnanges much slower than n. This maens the probability
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
          </section>

          <section id="primes-pyramid">
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
          <section>
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
                denominator <Latex>{"$q$"}</Latex>.
              </li>
              <li>
                <strong>Minor arcs</strong>: Everything else — where destructive
                interference occurs.
              </li>
            </ul>
            <p>
              On the <strong>major arcs</strong>,{" "}
              <Latex>{"$S(\\alpha, N)$"}</Latex> behaves in a fairly
              "predictable" or "structured" way, allowing us to approximate it
              using number-theoretic tools like exponential sums and the prime
              number theorem.
            </p>
            <p>
              On the <strong>minor arcs</strong>,{" "}
              <Latex>{"$S(\\alpha, N)$"}</Latex> behaves chaotically — the
              vectors point in seemingly random directions, and when you sum
              them, they mostly cancel out. This is like summing unit vectors
              all around a circle:
            </p>
            <span className="w-full flex items-center justify-center p-4">
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
              result.
            </p>
          </section>

          <section id="number-of-revolutions">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Clock Vectors and Number of Revolutions
            </h2>
            <p>
              A helpful way to visualize{" "}
              <Latex>{"$e^{2\\pi i m \\alpha}$"}</Latex> is as a unit vector
              rotating around the complex circle. If{" "}
              <Latex>{"$\\alpha = \\frac{a}{q}$"}</Latex> is rational, then
              after <Latex>{"$q$"}</Latex> full revolutions, the vector returns
              to its original position.
            </p>
            <p>
              Think of these vectors like points on a clock. If{" "}
              <Latex>{"$\\alpha = \\frac{1}{12}$"}</Latex>, the vector rotates
              by one hour tick each time. After 12 ticks, it returns to the same
              place.
            </p>
            <p>
              When you sum up many such vectors — say{" "}
              <Latex>{"$e^{2\\pi i p \\alpha}$"}</Latex> where{" "}
              <Latex>{"$p$"}</Latex> ranges over primes — you can either get:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Constructive interference</strong> (they add up if the
                rotation repeats periodically, i.e.,{" "}
                <Latex>{"$\\alpha \\approx \\frac{a}{q}$"}</Latex> for small{" "}
                <Latex>{"$q$"}</Latex>)
              </li>
              <li>
                <strong>Destructive interference</strong> (they cancel if{" "}
                <Latex>{"$\\alpha$"}</Latex> is irrational or the rotations
                never align)
              </li>
            </ul>
            <p>
              Therefore, this clock analogy helps us understand why the major
              arcs (with rational <Latex>{"$\\alpha$"}</Latex>) give strong
              contributions, while the minor arcs (irrational or large
              denominator <Latex>{"$\\alpha$"}</Latex>) give negligible ones.
            </p>
            <p>
              Try alterting the <Latex>{"$\\alpha$"}</Latex> value.
            </p>
            <br />
          </section>

          {/* <section id="euler-lagrange-derivation">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Derivation of Euler-Lagrange Equation
            </h2>

            <p> Step 1: Define the Lagrangian</p>
            <p>
              The Lagrangian <Latex>{"$(L)$"}</Latex> is a function that
              typically depends on the generalized coordinates{" "}
              <Latex>{"$(q)$"}</Latex>, their time derivatives{" "}
              <Latex>{"$(q'(t))$"}</Latex>, and possibly time{" "}
              <Latex>{"$(t)$"}</Latex>. For many physical systems, the
              Lagrangian represents the difference between the kinetic energy{" "}
              <Latex>{"$(T)$"}</Latex> and the potential energy{" "}
              <Latex>{"$(U)$"}</Latex>:
            </p>
            <span className="my-10 text-center flex items-center justify-center w-full">
              <Latex>{"$L(q, q', t) = T(q, q') - U(q, t)$"}</Latex>
            </span>

            <p> Step 2: Define the Action Functional</p>
            <p>
              The action functional <Latex>{"$(S)$"}</Latex> is defined as the
              integral of the Lagrangian over a time interval{" "}
              <Latex>{"$[t_0, t_1]$"}</Latex>:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {"$S[q] = \\int_{t_0}^{t_1} L(q(t), q'(t), t) \\, dt$"}
              </Latex>
            </span>

            <p>
              {" "}
              Step 3: Vary the Action Functional (This step was reccomended by
              ChatGPT, and I have taken a different route through my
              derivations)
            </p>
            <p>
              Consider a small variation <Latex>{"$(\\delta q(t))$"}</Latex> to
              the path <Latex>{"$(q(t))$"}</Latex>. The varied path is{" "}
              <Latex>{"$(q(t) + \\delta q(t))$"}</Latex>. The variation in the
              action functional <Latex>{"$(\\delta S)$"}</Latex> is then given
              by:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>{"$\\delta S = S[q + \\delta q] - S[q]$"}</Latex>
            </span>
            <p>
              To find this variation, expand the action functional around{" "}
              <Latex>{"$(q(t))$"}</Latex>:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\delta S = \\int_{t_0}^{t_1} L(q + \\delta q, q' + \\delta q', t) \\, dt - \\int_{t_0}^{t_1} L(q, q', t) \\, dt$"
                }
              </Latex>
            </span>
            <p>
              Assuming <Latex>{"$(\\delta q)$"}</Latex> is small, we can perform
              a first-order Taylor expansion of the Lagrangian:
            </p>
            <span className="py-10 text-center flex flex-col space-y-10 items-center justify-center w-full">
              <Latex>{"$L(q + \\delta q, q' + \\delta q', t) $"}</Latex>

              <Latex>
                {
                  "$ \\approx L(q, q', t) + \\frac{\\partial L}{\\partial q} \\delta q + \\frac{\\partial L}{\\partial q'} \\delta q'$"
                }
              </Latex>
            </span>
            <p>Thus,</p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\delta S = \\int_{t_0}^{t_1} \\left( \\frac{\\partial L}{\\partial q} \\delta q + \\frac{\\partial L}{\\partial q'} \\delta q' \\right) \\, dt$"
                }
              </Latex>
            </span>

            <p> Step 4: Apply Integration by Parts</p>
            <p>
              Notice that the term involving <Latex>{"$(\\delta q')$"}</Latex>{" "}
              can be integrated by parts to make the variation only involve{" "}
              <Latex>{"$(\\delta q)$"}</Latex>. Recall the integration by parts
              formula:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\int_{t_0}^{t_1} u \\frac{dv}{dt} dt = \\left. u v \\right|_{t_0}^{t_1} - \\int_{t_0}^{t_1} v \\frac{du}{dt} dt$"
                }
              </Latex>
            </span>
            <p>
              Set <Latex>{"$( u = \\frac{\\partial L}{\\partial q'} )$"}</Latex>{" "}
              and <Latex>{"$( dv = \\delta q' \\ dt )$"}</Latex>. Then{" "}
              <Latex>
                {
                  "$( du = \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) dt )$"
                }
              </Latex>{" "}
              and <Latex>{"$( v = \\delta q )$"}</Latex>, so:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\int_{t_0}^{t_1} \\frac{\\partial L}{\\partial q'} \\delta q' dt = \\left. \\frac{\\partial L}{\\partial q'} \\delta q \\right|_{t_0}^{t_1} - \\int_{t_0}^{t_1} \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) \\delta q dt$"
                }
              </Latex>
            </span>
            <p>
              Assuming that{" "}
              <Latex>{"$(\\delta q(t_0) = \\delta q(t_1) = 0)$"}</Latex> (the
              variations at the boundaries are zero), the boundary term
              vanishes:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\left. \\frac{\\partial L}{\\partial q'} \\delta q \\right|_{t_0}^{t_1} = 0$"
                }
              </Latex>
            </span>
            <p>Therefore,</p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\int_{t_0}^{t_1} \\frac{\\partial L}{\\partial q'} \\delta q' dt = - \\int_{t_0}^{t_1} \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) \\delta q dt$"
                }
              </Latex>
            </span>

            <p> Step 5: Combine Terms and Apply the Fundamental Lemma</p>
            <p>
              Substituting back into the variation of the action functional:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\delta S = \\int_{t_0}^{t_1} \\left( \\frac{\\partial L}{\\partial q} \\delta q - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) \\delta q \\right) dt$"
                }
              </Latex>
            </span>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\delta S = \\int_{t_0}^{t_1} \\left( \\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) \\right) \\delta q \\, dt$"
                }
              </Latex>
            </span>
            <p>
              For the action <Latex>{"$(S)$"}</Latex> to be stationary (i.e.,
              for <Latex>{"$(q(t))$"}</Latex> to be an extremum of{" "}
              <Latex>{"$(S)$"}</Latex>), <Latex>{"$(\\delta S)$"}</Latex> must
              be zero for all possible variations{" "}
              <Latex>{"$(\\delta q(t))$"}</Latex>. By the fundamental lemma of
              the calculus of variations, this implies:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) = 0$"
                }
              </Latex>
            </span>
            <p>
              This is the <strong>Euler-Lagrange equation</strong>:
            </p>
            <span className="py-10 text-center flex items-center justify-center w-full">
              <Latex>
                {
                  "$\\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) = 0$"
                }
              </Latex>
            </span>
            <p>And that completes the derivation!</p>

            <p>
              The complete derivation with a little more steps can be found with
              the PDF linked below
            </p>
          </section>
          <br />
          <section id="double-pendulum-derivation">
            <h2 className="text-white text-2xl font-bold pb-2">
              Derivation of Double Pendulum
            </h2>
            <div className="w-full flex-col min-[1200px]:flex-row flex gap-10">
              <div className="min-[1200px]:w-1/2 w-full flex flex-col items-center ">
                <span className="my-10 text-center flex items-center justify-center w-full">
                  <Latex>
                    {
                      "$\\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}} \\right) = 0, \\space \\\\L = T - V$"
                    }
                  </Latex>
                </span>
                <p>
                  The derivation for the formulas that are used in its
                  visualization are shown, but can also be found here for a
                  clearer version:{" "}
                  <a className="font-bold" href="">
                    LINK
                  </a>
                  <br />
                  <br />
                  The final equations are as follows:
                </p>
                <div className="flex flex-col gap-10 pt-10">
                  <div className="flex flex-row gap-9">
                    <Latex>
                      {
                        "$\\dot{\\theta}=\\left(\\frac{a-c\\ddot{\\theta}}{b}\\right)$"
                      }
                    </Latex>
                    <Latex>
                      {" $\\ddot{\\theta}=\\left(\\frac{fb-wa}{kb-wc}\\right)$"}
                    </Latex>
                  </div>

                  <div className="flex flex-col gap-10">
                    <div>
                      <ul>
                        <li>
                          <Latex>{" $a=-(m_1+m_2)gR_1sin(\\theta_1)$"}</Latex>
                        </li>
                        <li>
                          <Latex>{" $b=(m_1+m_2)R_1^2$"}</Latex>
                        </li>
                        <li>
                          <Latex>
                            {" $c=m_2R_1R_2cos(\\theta_1-\\theta_2)$"}
                          </Latex>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <Latex>
                            {
                              " $f=-m_2gR_2sin(\\theta_2) + m_2R_1R_2\\ddot{\\theta_1}^2sin(\\theta_1-\\theta_2)$"
                            }
                          </Latex>
                        </li>
                        <li>
                          <Latex>{"$k=m_2R_2^2$"}</Latex>
                        </li>
                        <li>
                          <Latex>
                            {" $w=m_2R_1R_2cos(\\theta_1-\\theta_2)$"}
                          </Latex>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-[1200px]:w-1/2 w-full flex items-center justify-center">
                <iframe
                  src="https://drive.google.com/file/d/1OTLheqAu_0YbTy7cu28S7PH0r4RXVWXN/preview"
                  width="640"
                  height="480"
                  className="rounded-3xl"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </section>
          <br />
          <section id="double-pendulum-visualization">
            <h2 className="text-white text-2xl font-bold pb-2">Visualizer</h2>
            <br />
            <iframe
              src="https://trinket.io/embed/glowscript/7dcfe940bb?start=result"
              width="100%"
              height="600"
              allowFullScreen
              className="rounded-3xl"
            ></iframe>
          </section>*/}
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
