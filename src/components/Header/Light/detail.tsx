"use client";
import useParticipantStore from "@/store/use-participant";
import Image from "next/image";
import {BiUser} from 'react-icons/bi'

export const Detail: React.FC = () => {
  const { is_logged, showSideBar } = useParticipantStore((state) => state);
  if (is_logged === true)
    return (
      <button
        className="my-auto w-10 h-10 p-[10px] border-[1px] border-border-normal rounded-full text-white"
        onClick={() => showSideBar(true)}
      >
        <BiUser size={18}/>
      </button>
    );
  else
    return (
      <button
        className="my-auto w-10 h-10 p-[10px] border-[1px] border-border-normal rounded-full text-white lg:hidden"
        onClick={() => showSideBar(true)}
      >
        <Image
          src="/assets/Homepage/Icons/SVG Icon/align-right.svg"
          width={18}
          height={18}
          alt="search-icon"
          className="min-w-[18px] h-[18px] m-auto"
        />
      </button>
    );
};
