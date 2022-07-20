import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className=" ">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
