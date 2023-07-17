"use client";
import { useState } from "react";
import { OrangeButton } from "../elements/common/OrangeButton";
import { Section3 } from "./Homepage/Section3";

interface props {
  heading: string;
  description: string;
  only_description?: boolean;
  on_search: boolean;
  searchValue: string;
}

export const Section2: React.FC<props> = ({
  heading,
  description,
  only_description,
  on_search,
  searchValue,
}) => {
  return (
    <section className="xl:px-[300px] px-5 pt-[80px] text-dark-solid text-center">
      {on_search ? (
        <Section3 title="Search" search={searchValue} is_search={true}/>
      ) : (
        <div>
          <p className="font-montserrat2xl sm:text-[48px] text-[32px] sm:w-[70%] w-full mx-auto max-w-[800px]">
            {heading}
          </p>
          <p className="sm:w-[70%] sm:text-[20px] text-[16px] w-full max-w-[800px] mx-auto mb-[40px]">
            {description}
          </p>
          {!only_description ? (
            <OrangeButton text="Learn More" no_responsive={true} />
          ) : (
            ""
          )}
        </div>
      )}
    </section>
  );
};
