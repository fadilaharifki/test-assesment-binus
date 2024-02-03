import { CarouselComponent } from "@/components/Carousel";
import { LayoutComponent } from "@/components/Layout";
import Image from "next/image";

import { openCareer } from "@/constants";
import { PartnershipComponent } from "@/components/Partnership";
import { icons } from "@/constants/icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <LayoutComponent>
        <div className="flex flex-col justify-center items-center my-8">
          <p className=" text-xl sm:text-[28px] font-light text-center text-[#3CAFE0] pb-2 sm:pb-4">WELCOME TO</p>
          <p className=" text-xl sm:text-[28px] font-bold text-center text-[#3CAFE0]">MASS COMMUNICATION PROGRAM</p>
        </div>
        <CarouselComponent />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-[30px]">
          <div className="box-content h-[721px] shadow-2xl rounded-xl flex flex-col items-center ">
            <div className="pt-12 pb-[14px]">
              <Image src={icons.graduate_profile} width={100} height={100} alt="pita univ" />
            </div>
            <div className="gap-[14px]">
              <p className=" text-xl sm:text-[32px] text-grayText text-center pb-2 sm:pb-4">GRADUATE PROFILE</p>
              <p className=" text-xs sm:text-base text-grayText text-center w-52 sm:w-[352px]">Our programs are designed to shape future leaders. Explore our programs below.</p>
            </div>
            <div className="p-4 mt-16 border-t-2 border-[#808080] max-w-[494px]">
              <p className="text-base sm:text-[21px] text-grayText">Mastering Communication: Crafting Proficient Graduates</p>
              <p className="text-xs sm:text-sm text-grayDark mt-[10px]">September 13, 2023</p>
            </div>
            <div className="p-4 border-t-2 border-[#808080] max-w-[494px]">
              <p className="text-base sm:text-[21px] text-grayText">Empowering Tomorrow’s Communicators: The Graduate Profile</p>
              <p className="text-xs sm:text-sm text-grayDark  mt-[10px]">September 20, 2023</p>
            </div>
            <div className="flex justify-center items-center pt-16 cursor-pointer">
              <p className="text-xs sm:text-base text-grayText">View More</p>
              <div className="ml-2">
                <Image src={icons.right_arrow} width={10} height={15} alt="right_arrow" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center box-content h-[721px] shadow-md bg-gradient-to-r from-blue-400  to-blue-600 rounded-xl">
            <div className="pt-12 pb-[14px]">
              <Image src={icons.icon_career} width={100} height={100} alt="pita univ" />
            </div>
            <div className="gap-[14px]">
              <p className=" text-xl sm:text-[32px] text-white text-center pb-2 sm:pb-4">PROSPECT CAREER</p>
              <p className=" text-xs sm:text-base text-white text-center w-52 sm:w-[352px]">Our programs are designed to shape future leaders. Explore our programs below.</p>
            </div>
            <div className="grid gap-4 pt-10">
              {openCareer.map((item, i) => {
                return (
                  <div className="bg-white w-64 sm:w-[360px] h-[41px] rounded-full pl-5 cursor-pointer transition duration-500 hover:scale-110 hover:bg-orange " key={i}>
                    <p className="flex h-full items-center text-grayText hover:text-white duration-200 text-xs sm:text-base">{item.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center pt-16 cursor-pointer">
              <p className="text-xs sm:text-base text-white">View More</p>
              <div className="ml-2">
                <Image src={icons.right_arrow_white} width={10} height={15} alt="right_arrow_white" />
              </div>
            </div>
          </div>
        </div>
        <PartnershipComponent />
      </LayoutComponent>
    </main>
  );
}
