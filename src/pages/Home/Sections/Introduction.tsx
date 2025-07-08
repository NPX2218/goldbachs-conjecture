/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////
import React from "react";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: INTRODUCTION
/////////////////////////////////////

const Introduction = (): JSX.Element => {
  return (
    <section id="introduction">
      <h2 className="text-white text-2xl font-bold pb-2">Introduction</h2>
      <p>
        Goldbach's Conjecture is a collection that encloses two distinct
        conjectures related to prime numbers and their sums. By definition, a
        prime number is a number whose only factors are one and itself. It is
        also important to note that during the time of Goldbach, the number 1
        was not considered a prime number but rather recharacterized as a
        composite number. The two conjectures are categorized as "weak" and
        "strong"; these names emphasize their interconnection rather than the
        ease of proving them. This is because proving the "strong" Conjecture
        would directly imply that the "weak" Conjecture is true; this case will
        be explained later. The two conjectures are as follows:
        <br />
        <br />
        <ol className="text-white list-decimal pl-4">
          <li>
            <b>Goldbach Strong Conjecture</b>: "Every even number greater than 2
            can be written as the sum of two primes".
          </li>
          Or mathematically, <Latex>{"$N_{even} = p_1 + p_2$"}</Latex> where{" "}
          <Latex>{"$ p_1, p_2 $"}</Latex> are primes and are greater than 2.
          <li>
            <b>Goldbach's Weak Conjecture</b>: that "Every odd number greater
            than 5 can be written as a sum of three primes".
          </li>
          Or mathematically, <Latex>{"$N_{odd} = p_1 + p_2 + p_3$"}</Latex>{" "}
          where <Latex>{"$ p_1, p_2, p_3 $"}</Latex> are primes and{" "}
          <Latex>{"$ N_{odd} > 5$"}</Latex>
        </ol>
        <br />
        If we are able to prove the strong Conjecture, we can use{" "}
        <Latex>{"$n = 3 + even$"}</Latex> to reach any n that is greater than 5.
        This is also because 3 is a prime number --- and can, therefore, be
        added to get any other odd number.
        <br />
        <br />
        Although there are no seemingly real-world applications to the proof of
        the strong or weak Goldbach theorem, it is essential to explore new
        areas of mathematics to utilize it and discover new, possibly previously
        unexplored regions. Therefore, this website will walk you simply through
        both of the conjectures and how the weak one has been proved.
        <br />
      </p>
    </section>
  );
};

/////////////////////////////////////
// EXPORTING INTRODUCTION
/////////////////////////////////////

export default Introduction;
