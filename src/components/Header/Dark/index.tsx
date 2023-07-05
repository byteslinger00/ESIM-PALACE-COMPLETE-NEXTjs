"use client";

import Image from "next/image";
import { Nav } from "./nav";
import useParticipantStore from "@/store/use-participant";
import { useEffect, useState } from "react";
import { Detail } from "./detail";
import { getCookie } from "cookies-next";
import { GetUserInfoFromCookie } from "@/utils/getUserInfoFromCookie";

export const Header = () => {
  const { is_logged, setLogged } = useParticipantStore((state) => state);

  useEffect(() => {
    const user_info = GetUserInfoFromCookie(getCookie('user_info'));
    if(user_info?.customer_authenticated === true)
      setLogged(true);
  }, [setLogged]);

  return (
    <div className="absolute w-full h-25 px-[300px] top-0 flex flex-row py-5 mx-medium:px-6 z-[10] header-shadow">
      <div className="w-20 grow">
        <Image
          src="/assets/dark-logo.png"
          width={80}
          height={60}
          alt="logo"
          className="max-w-[80px]"
        />
      </div>
      <Nav />
      <div className="my-auto flex flex-row gap-3">
        <button className="my-auto w-10 h-10 py-[10px] border-[1px] border-[#E3E3E3] rounded-full text-white">
          <Image
            src="/assets/Homepage/Icons/SVG Icon/Dark-Search.svg"
            width={18}
            height={18}
            alt="search-icon"
            className="w-[18px] h-[18px] m-auto"
          />
        </button>
        <button className="my-auto w-10 h-10 p-[10px] border-[1px] border-[#E3E3E3] rounded-full text-white">
          <Image
            src="/assets/Homepage/Icons/SVG Icon/Dark-Cart.svg"
            width={18}
            height={18}
            alt="search-icon"
            className="min-w-[18px] h-[18px] m-auto"
          />
        </button>
        <Detail />
        {is_logged ? (
          ""
        ) : (
          <a
            className="rounded-lg px-[25px] py-[15px] font-montserrat font-semibold hover:bg-[#FBFBFB] border-[#E3E3E3] border-[1px] bg-white text-[16px] max-lg:hidden"
            href="/signup"
          >
            <p className="leading-3">Sign Up</p>
          </a>
        )}
        {is_logged ? (
          ""
        ) : (
          <a
            className="rounded-lg px-[25px] py-[15px] font-montserrat font-semibold hover:bg-[#FBFBFB] hover:text-accent-1-solid bg-accent-1-solid  border-[#E3E3E3] border-[1px] text-white text-[16px] max-lg:hidden"
            href="/login"
          >
            <p className="leading-3">Login</p>
          </a>
        )}
      </div>
    </div>
  );
};
