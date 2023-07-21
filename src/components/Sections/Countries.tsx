"use client";
import { packages } from "@/types/packages.type";
import { card_container, card_item } from "@/utils/animations";
import { motion } from "framer-motion";
import { CountryCard } from "../elements/Homepage/CountryCard";
import { useState } from "react";
import { Details } from "../elements/Homepage/Details";
import { details } from "@/types/details.type";

interface props {
  countries?: Array<packages>;
  selected_country: string;
  LoadDetail: any;
  selected_cardIndex: number;
  details?: Array<details>;
  showModal: any;
  detailsVisible: boolean;
}

export const Countreis: React.FC<props> = ({
  countries,
  selected_country,
  selected_cardIndex,
  details,
  detailsVisible,
  showModal,
  LoadDetail,
}) => {
  const handleBuy = () => {

  }
  return (
    <motion.div
      className="w-full mt-16 !grid xl:!grid-cols-5 !grid-cols-2 grid-container"
      variants={card_container}
      initial="hidden"
      animate={countries ? "visible" : "hidden"}
    >
      {countries?.length !== 0
        ? countries?.map((item, index) => (
            <motion.div variants={card_item} key={"Popular" + index}>
              <CountryCard
                key={"Popular Country" + index}
                selected_country={selected_country}
                id={index}
                country_code={item.country_code}
                country={item.country_name}
                onLoad={LoadDetail}
              />
            </motion.div>
          ))
        : ""}
      <div
        className={`max-xl:hidden grid-item grid-A${
          Math.floor(selected_cardIndex / 5) + 1
        }`}
      >
        <Details
          data={details}
          showModal={showModal}
          isVisible={detailsVisible}
          handleBuy={handleBuy}
        />
      </div>
      <div
        className={`xl:hidden grid-item grid-A${
          Math.floor(selected_cardIndex / 2) + 1
        }`}
      >
        <Details
          data={details}
          showModal={showModal}
          isVisible={detailsVisible}
          handleBuy={handleBuy}
        />
      </div>
    </motion.div>
  );
};
