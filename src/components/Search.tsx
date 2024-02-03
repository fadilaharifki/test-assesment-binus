import React, { ReactNode } from "react";
import { NavbarComponent } from "./Navbar";
import Image from "next/image";
import searchIcon from "../../public/search.svg";

interface SearchProps {}

export const SearchComponent: React.FC<SearchProps> = () => {
  return (
    <div className="flex bg-black items-center px-[30px] cursor-pointer h-10">
      <input className="bg-blac w-full bg-black text-white focus:border-none outline-none" />
      <div className="ml-2">
        <Image src={searchIcon} width={16} height={16} alt="pita univ" />
      </div>
    </div>
  );
};
