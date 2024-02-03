import Image from "next/image";
import React, { ReactNode } from "react";
import nav1 from "../../public/pita-univ-pendek.svg";
import logo from "../../public/logo.svg";
import { SearchComponent } from "./Search";

interface NavbarProps {
  isSearch: boolean;
}

export const NavbarComponent: React.FC<NavbarProps> = ({ isSearch }) => {
  return (
    <div className="fixed w-full z-50">
      {isSearch && <SearchComponent />}
      <div className="flex shadow-md h-[90px] sm:h-[117px] w-full bg-white pl-0 sm:pl-[30px] justify-start align-top items-start">
        <Image className="w-20 h-16 sm:w-[41px] sm:h-[75px]" src={nav1} width={41} height={75} alt="pita univ" />
        <Image className="ml-1 sm:ml-[26px] mt-[5px] w-52 h-20 sm:w-[306px] sm:h-[83px]" src={logo} width={306} height={83} alt="logo" />
      </div>
    </div>
  );
};
