import React, { ReactNode } from "react";
import Mast from "../components/mast";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Mast />
      {children}
    </>
  );
};

export default Layout;
