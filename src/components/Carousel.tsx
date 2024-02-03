"use client";

import { icons } from "@/constants/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images } from "@/constants/images";
import Image from "next/image";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper as SwiperType } from "swiper";
import "swiper/scss/navigation";
import { Navigation } from "swiper/modules";

interface CarouselProps {}

export const CarouselComponent: React.FC<CarouselProps> = () => {
  const swiperRef = useRef<SwiperType>();
  const banner = [
    {
      id: 0,
      render: <Image className={twMerge("object-cover h-[460px] w-screen rounded-lg")} src={Images.banner1} width={1034} height={460} alt="banner1" />,
    },
    {
      id: 1,
      render: <Image className={twMerge("object-cover h-[460px] w-screen rounded-lg")} src={Images.banner2} width={1034} height={460} alt="banner2" />,
    },
  ];

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <Swiper
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
    >
      {banner.map((item, i) => {
        return <SwiperSlide key={i}>{item.render}</SwiperSlide>;
      })}
      <button onClick={handlePrevClick} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <Image src={icons.btn_prev} width={40} height={40} alt="btn_prev" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button onClick={handleNextClick} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <Image src={icons.btn_next} width={40} height={40} alt="btn_next" />
          <span className="sr-only">Next</span>
        </span>
      </button>
      <div className="absolute inset-x-0 -bottom-40 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <div className=" w-[120px] h-11 bg-orange rounded-full text-white flex justify-center items-center text-center group-focus:ring-white  group-focus:ring-4 group-focus:outline-none">Learn more</div>
      </div>
    </Swiper>
  );
};
