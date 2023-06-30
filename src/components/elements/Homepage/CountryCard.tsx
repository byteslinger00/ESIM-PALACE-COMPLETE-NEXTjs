"use client";
import { checkFlag } from "@/utils/checkFlag";
import Image from "next/image";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import { motion } from "framer-motion";
import { card_item } from "@/utils/animations";

interface props {
  country_code: string;
  country: string;
  id: number;
  selected_country: string;
  onLoad: (country_name: string, index: number) => void;
}

export const CountryCard: React.FC<props> = ({
  country_code,
  country,
  selected_country,
  id,
  onLoad,
}) => {
  return (
    <div
      className={`w-full h-full p-3 rounded-2xl hover:bg-white border-[#C8E8FF] border-[1px] flex flex-col gap-2 cursor-pointer ${
        selected_country === country ? "bg-white" : ""
      }`}
      onClick={() => onLoad(country, id)}
    >
      {checkFlag(country_code) ? (
        <Image
          src={`/assets/Region Flag/${country_code}.jpg`}
          width={500}
          height={500}
          className="w-full rounded-[12px]"
          alt="Region flag"
        />
      ) : (
        <FlagIcon
          code={country_code as FlagIconCode}
          className="w-full rounded-[12px]"
        />
      )}

      <p className="text-1st-color font-bold font-hellix sm:text-[24px] text-[18px] text-center">
        {country}
      </p>
      <div className="mx-auto rounded-full">
        {selected_country === country ? (
          <Image
            src="/assets/Homepage/Icons/SVG Icon/DownArrow.svg"
            width={30}
            height={30}
            alt="down"
          />
        ) : (
          <Image
            src="/assets/Homepage/Icons/SVG Icon/Down chevron.svg"
            width={30}
            height={30}
            alt="down"
          />
        )}
      </div>
    </div>
  );
};
