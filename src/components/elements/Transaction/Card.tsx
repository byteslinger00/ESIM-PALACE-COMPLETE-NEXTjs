"use client"
import { checkFlag } from "@/utils/checkFlag";
import Image from "next/image";
import { FlagIcon, FlagIconCode } from "react-flag-kit";

interface props {
  country?: string;
  title?: string;
  size?: string;
  price: number;
  subtotal: number;
  discount: number;
}

export const Card: React.FC<props> = ({
  country,
  title,
  size,
  price,
  subtotal,
  discount,
}) => {
  return (
    <div className="sm:p-10 p-2 bg-[#F9F7F7] rounded-[14px] flex flex-col gap-8 xl:text-[24px] text-[16px] text-left">
      <div className="flex flex-row sm:gap-6 gap-4 font-montserrat">
        {checkFlag(country) ? (
          <Image
            src={`/assets/Region Flag/${country}.jpg`}
            width={500}
            height={500}
            className="w-[150px] rounded-[12px]"
            alt="Region flag"
          />
        ) : (
          <FlagIcon
            code={country as FlagIconCode}
            className="w-[150px] rounded-[12px]"
          />
        )}
        <p className="font-hellix grow m-auto">{title}</p>
        <p className="font-montserratbold m-auto">{size}GB</p>
        <p className="font-montserratbold m-auto">${price}</p>
      </div>
      <hr className="border-[#E1E1E1]" />
      <div className="flex flex-row">
        <p className="font-montserratbold grow">Subtotal</p>
        <p className="font-montserratbold">${subtotal}</p>
      </div>
      <hr className="border-[#E1E1E1]" />
      <div className="flex flex-row">
        <p className="font-montserratbold grow">Total</p>
        <p className="font-montserratbold">
          ${subtotal - discount < 0 ? 0 : subtotal }
        </p>
      </div>
    </div>
  );
};
