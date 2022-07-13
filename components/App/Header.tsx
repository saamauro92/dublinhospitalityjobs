/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";

const Header = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-slate-900">
        <img
          src="https://res.cloudinary.com/dtycp96d8/image/upload/v1657723013/89814f856c3047c1b6705124d50f75f4_7_xxtbci.png"
          className="max-w-sm w-80 h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
