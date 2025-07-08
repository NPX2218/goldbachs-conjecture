/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: CRICLE METHOD
/////////////////////////////////////

const CircleMethod = (): JSX.Element => {
  return (
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
      We can also add a scaling factor which essentially creates a slider to the
      value of the angle theta. The scaling factor is{" "}
      <Latex>{"$ \\alpha $"}</Latex>, making our new defintion:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>{"$e^{2\\pi m i \\alpha} \\, $"}</Latex> where{" "}
        <Latex>{"$ \\,  \\alpha \\in [0,1]$"}</Latex>
      </span>
      If we iterate over our entire scaling factor, we go over the entire
      circle. Summing up the magnitudes, we get that the total value is equal or
      mathematically:
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {"$\\displaystyle \\int_0^1 e^{2\\pi m i \\alpha} d \\alpha = 0$"}
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
      Supposing we have three primes <Latex>{"$p_1,p_2,p_3$"}</Latex>, their sum
      should be <Latex>{"$N$"}</Latex> or <Latex>{"$p_1,p_2,p_3 = N$"}</Latex>.
      If this is true, then <Latex>{"$p_1,p_2,p_3 - N = 0$"}</Latex> must also
      hold true. Therefore, we can substitute this into our integral for the
      varialbe m to see if the sum of the primes is equal to desired number N.
      <span className="w-full flex items-center justify-center p-8">
        <Latex>
          {
            "$\\displaystyle \\int_0^1 e^{2\\pi  (p_1,p_2,p_3 - N) i \\alpha} d \\alpha $"
          }
        </Latex>
      </span>
      Inorder to use this integral, we would test all the primes that are less
      than <Latex>{"$N$"}</Latex> (Assuming we know all the primes, but in
      reality as <Latex>{"$N \\rightarrow \\infty$"}</Latex> we are not able to
      know all the primes).
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
      This mathematically works, but may have duplicates for example 2+2+7 and
      7+2+2, although this is acceptable. Now proving{" "}
      <Latex>{"$h(N) \\geq 1 $"}</Latex> for every odd number greater than 5,
      this could prove the Goldbach conjecture. Using exponent laws, we can
      split up our e term.:
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
          {"$\\displaystyle S(\\alpha, N)= \\sum_{p<N} e^{2\\pi p i \\alpha} $"}
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
  );
};

/////////////////////////////////////
// EXPORTING CIRCLE METHOD
/////////////////////////////////////

export default CircleMethod;
