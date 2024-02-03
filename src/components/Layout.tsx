import React, { ReactNode } from "react";
import { NavbarComponent } from "./Navbar";

interface LayoutProps {
  children?: ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavbarComponent isSearch={true} />
      <div className=" mt-40 sm:mt-52">{children}</div>
    </div>
  );
};
