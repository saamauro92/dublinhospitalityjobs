import React, { ReactNode } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className=" ">
      <NavBar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
