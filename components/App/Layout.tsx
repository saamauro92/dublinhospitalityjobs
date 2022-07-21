import React, { ReactNode } from "react";
import { JobTypes } from "../../types/types";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
  jobs?: JobTypes;
};

const Layout = ({ children, jobs }: Props): JSX.Element => {
  return (
    <div className="h-screen">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
