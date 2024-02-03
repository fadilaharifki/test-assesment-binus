"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { partnershipDefault, partnershipMenu } from "@/constants";
import { twMerge } from "tailwind-merge";
import { ImageLogo } from "@/constants/images";
import { icons } from "@/constants/icons";

interface PartnershipProps {}

export const PartnershipComponent: React.FC<PartnershipProps> = () => {
  const [activeMenu, setActiveMenu] = useState(partnershipMenu[0]);
  const renderTabMenu = () => {
    switch (activeMenu.name) {
      case partnershipDefault.NASIONAL:
        return (
          <div className=" flex flex-col gap-6 justify-center align-middle items-center transition ease-in-out duration-1000">
            <div className="flex gap-5 justify-center align-middle items-center w-full sm:w-[600px] flex-wrap ">
              <Image src={ImageLogo.appalachianLogo} width={100} height={100} alt="appalachianLogo" />
              <Image src={ImageLogo.cologneBussinusSchoolLogo} width={100} height={100} alt="cologneBussinusSchoolLogo" />
              <Image src={ImageLogo.burgundyLogo} width={100} height={100} alt="burgundyLogo" />
              <Image src={ImageLogo.bangkokLogo} width={100} height={100} alt="bangkokLogo" />
              <Image src={ImageLogo.ESCDijonLogo} width={100} height={100} alt="ESCDijonLogo" />
              <Image src={ImageLogo.cauLogo} width={100} height={100} alt="cauLogo" />
              <Image src={ImageLogo.apuLogo} width={100} height={100} alt="apuLogo" />
              <Image src={ImageLogo.beijingLogo} width={100} height={100} alt="beijingLogo" />
              <Image src={ImageLogo.bournemouthUniversityLogo} width={100} height={100} alt="bournemouthUniversityLogo" />
            </div>
          </div>
        );
      case partnershipDefault.INTERNATIONAL:
      case partnershipDefault.INDUSTRY:
        return <div className=" flex flex-col gap-6 justify-center align-middle h-56 items-center transition ease-in-out duration-1000"></div>;
    }
  };
  return (
    <div className="pt-[80px] flex flex-col items-center pb-[103px]">
      <div>
        <Image src={ImageLogo.partnershipLogo} width={100} height={100} alt="partnership" />
      </div>
      <div className="gap-[14px]">
        <p className="text-xl sm:text-[32px] text-grayText text-center pb-2 sm:pb-4">STRATEGIC PARTNERSHIP</p>
        <p className="text-xs sm:text-base text-grayText text-center">to sustainably improve students academic and experience</p>
      </div>
      <div className="flex gap-8 mt-10">
        {partnershipMenu.map((item, i) => {
          return (
            <div onClick={() => setActiveMenu(item)} className={twMerge(`${activeMenu.id === item.id ? ` text-orange border-b-4 border-orange` : ""}`, "cursor-pointer transition duration-200  hover:scale-110")} key={i}>
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="border-b-2 w-full  mb-[46px]"></div>
      {renderTabMenu()}
      <div className="flex justify-center items-center pt-16 cursor-pointer">
        <p className="text-xs md:text-base text-blueText">View More</p>
        <div className="ml-2">
          <Image src={icons.right_arrow_blue} width={10} height={15} alt="right_arrow_white" />
        </div>
      </div>
    </div>
  );
};
