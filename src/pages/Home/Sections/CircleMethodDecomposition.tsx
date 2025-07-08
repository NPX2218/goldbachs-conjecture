/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: CIRCLE METHOD DECOMPOSITION
/////////////////////////////////////

const CircleMethodDecomposition = () => {
  return (
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
          numbers like <Latex>{"$\\frac{a}{q}$"}</Latex> with small denominator{" "}
          <Latex>{"$q$"}</Latex>. This is essentially space with large areas of
          constructive interference. The function behaves in a fairly
          "predictable" or "structured" way, allowing us to approximate it.
        </li>
        <li>
          <strong>Minor arcs</strong>: Everything else — where destructive
          interference occurs. This is where the circles behave chaotically —
          the vectors point in seemingly random directions, and when you sum
          them, they mostly cancel out. This is like summing unit vectors all
          around a circle.
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
        So the contribution from the minor arcs is very small — almost like
        noise. The major arcs, on the other hand, lead to constructive
        interference and give us the dominant term in the result. Although the
        example given beforehand where <Latex>{"$ N = 11$"}</Latex> has
        constructive intereference only when{" "}
        <Latex>{"$\\alpha = \\{0, 1\\}$"}</Latex>, with larger N values, there
        will be rational fractions for which constructive interference occurs.
        The reason for the destructive and constructive nature of the circles
        happening is the following. Assuming that
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
      Since we are not concerned with full revolutions of n, we only focus on r.
      In this example, since the remainders are all one, this means that the
      circles do a half rotation and constructively interefere at{" "}
      <Latex>{"$\\alpha = \\frac{1}{2}$"}</Latex>. We can do this process again,
      but for <Latex>{"$\\alpha = \\frac{1}{3}$"}</Latex>
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
      Once again, there is constructive intereference. This pattern also occurs
      for other rational fractions, but for other non rational fractions the
      same pattern of constructive intereference does not occur. This means the
      majority of interefernece that came means that Littlewood and Hardy could
      split their calculation into two main parts.
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
      This can be isolated for the main term, which is essentially created by
      the major arcs
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
      Littlewood and Hardy then showed that if the Riemman Hypothesis is true,
      then the main term <Latex>{"$f(N)$"}</Latex> grows faster than the error
      term <Latex>{"$e(N)$"}</Latex> from some value <Latex>{"$K$"}</Latex>.
      That means eventually, the value of <Latex>{"$h(N) \\ge 1 $"}</Latex> all
      the weak Goldbach conjecture holds. H.A. Helfgott proved that every odd
      number greater than 5 can be written as primes by leveraging the
      Hardy–Littlewood method.
    </section>
  );
};

/////////////////////////////////////
// EXPORTING CIRCLE METHOD DECOMPOSITION
/////////////////////////////////////

export default CircleMethodDecomposition;
