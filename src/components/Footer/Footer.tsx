/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";

/////////////////////////////////////
// COMPONENT: FOOTER
/////////////////////////////////////

const Footer = (): JSX.Element => {
  return (
    <div className="w-full h-full">
      <div className="dm-sans-normal self-stretch mt-32 w-full bg-[#ffbf00] min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <div className="self-start mt-11 ml-16 text-base font-semibold tracking-tight leading-9 text-white max-md:mt-10 max-md:max-w-full">
        Made by <span className="text-[#ffbf00]">Neel Bansal</span>{" "}
        <Link to="/bibliographies">— Copyright {new Date().getFullYear()}</Link>
      </div>
    </div>
  );
};

/////////////////////////////////////
// EXPORTING FOOTER
/////////////////////////////////////

export default Footer;
