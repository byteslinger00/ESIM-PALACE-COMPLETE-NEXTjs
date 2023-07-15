"use client";
import Image from "next/image";
import { Nav } from "./nav";
import useParticipantStore from "@/store/use-participant";
import { useEffect } from "react";
import { Detail } from "./detail";
import { GetInfoFromCookie } from "@/utils/GetInfoFromCookie";
import { getCookie } from "cookies-next";
import { user_info } from "@/types/userinfo.type";
import Link from "next/link";

export const Header = () => {
  const { is_logged, setLogged } = useParticipantStore((state) => state);

  useEffect(() => {
    const user_info: user_info = GetInfoFromCookie(getCookie("user_info"));
    if (user_info?.customer_authenticated === true) setLogged(true);
  }, [setLogged]);

  return (
    <div className="absolute w-full h-25 px-[300px] top-0 flex flex-row py-5 mx-medium:px-6">
      <div className="w-20 grow">
        <Link href="/">
          <Image
            src="/assets/light-logo.svg"
            width={80}
            height={60}
            alt="logo"
            className="max-w-[80px]"
          />
        </Link>
      </div>
      <Nav />
      <div className="my-auto flex flex-row gap-3">
        <Detail />
        {is_logged ? (
          ""
        ) : (
          <a
            className="rounded-lg px-[25px] py-[15px] font-montserrat font-semibold bg-white text-[16px] max-lg:hidden"
            href="/signup"
          >
            <p className="leading-3">Sign Up</p>
          </a>
        )}
        {is_logged ? (
          ""
        ) : (
          <a
            className="rounded-lg px-[25px] py-[15px] font-montserrat font-semibold bg-orange text-white text-[16px] max-lg:hidden"
            href="/login"
          >
            <p className="leading-3">Login</p>
          </a>
        )}
      </div>
    </div>
  );
};
