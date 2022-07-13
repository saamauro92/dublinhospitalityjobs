import React, { ReactNode } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <section className="mb-40">
      <NavBar />
      <Header />
      {children}
    </section>
  );
};

export default Layout;
