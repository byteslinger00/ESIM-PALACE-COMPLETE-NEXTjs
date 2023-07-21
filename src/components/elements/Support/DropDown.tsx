"use client";
import Image from "next/image";
import { useState } from "react";

interface props {
  title: string;
  description: string;
  visible: boolean;
}

export const DropDown: React.FC<props> = ({ title, description, visible }) => {
  const [is_visible, setVisible] = useState(visible);
  return (
    <div className=" p-6 xl:text-[20px] text-[14px] gap-6 bg-[#EBF6FF] rounded-[14px]  flex flex-col text-left">
      <div className="flex flex-row">
        <h6 className="font-montserratbold grow">{title}</h6>
        <Image
          src="/assets/Support Page/Icons/Arrow down sign to navigate.svg"
          width={24}
          height={24}
          alt="Arrow Down"
          className="cursor-pointer"
          onClick={() => setVisible(!is_visible)}
        />
      </div>
      {is_visible ? <hr className="border-[#AAD9FF]" /> : ""}
      {is_visible ? <div className="font-montserrat">{description}</div> : ""}
    </div>
  );
};
