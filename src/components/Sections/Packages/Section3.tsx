"use client";

import { useEffect, useState } from "react";
//components
import { SelectTab } from "@/components/elements/Packages/SelectTab";
import { Search } from "@/components/elements/Packages/Search";
import { OrangeButton } from "@/components/elements/common/OrangeButton";
import { Modal } from "@/components/elements/Modal";
import { Spinner } from "@/components/elements/common/Spinner";
import { toast } from "react-toastify";
import { CountryCard } from "@/components/elements/Homepage/CountryCard";
import { Details } from "@/components/elements/Homepage/Details";
//actions
import getCountriesByRegion from "@/actions/Packages/getCountriesByRegion";
import getDetailsByCountry from "@/actions/Home/getDetailsByCountry";
//type
import { details } from "@/types/details.type";
import { packages } from "@/types/packages.type";
import { motion } from "framer-motion";
import { card_container, card_item } from "@/utils/animations";

export const Section3 = () => {
  const [is_modal, showModal] = useState(false);
  const [selectedRegion, setRegion] = useState("LATAM");
  const [countries, setCountries] = useState<Array<packages>>();
  const [is_Loading, setLoading] = useState(false);
  const [selected_cardIndex, setIndex] = useState(1);
  const [selected_country, setCountry] = useState("");
  const [details, setDetails] = useState<Array<details>>([]);
  const [detailsVisible, setVisible] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setCountry("");
      setVisible(false);
      setCountries([]);
      const data = await getCountriesByRegion(selectedRegion);
      if (data === false) {
        toast.error("Invalid Region", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
        setVisible(false);
        return;
      }
      setCountries(data);
      setLoading(false);
    })();
  }, [selectedRegion]);

  const LoadDetail = async (country_name: string, index: number) => {
    if (country_name === selected_country) {
      setCountry("");
      setVisible(false);
      return;
    }
    setCountry(country_name);
    setLoading(true);
    setVisible(false);
    const data = await getDetailsByCountry(country_name);
    if (data === false) {
      toast.error("Connection Failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
      setVisible(false);
      return;
    }
    setDetails(data);
    setIndex(index);
    setVisible(true);
    setLoading(false);
  };

  return (
    <section className="relative mi-medium:px-[300px] 2xl:px-[100px] px-6 py-[135px] bg-[#F9F7F7] text-dark-solid text-center flex flex-col gap-10">
      {is_Loading ? <Spinner /> : ""}

      <SelectTab setRegion={setRegion} selectedRegion={selectedRegion} />
      <div className="flex flex-row gap-5">
        <select
          className="bg-[#FFF8E6] outline-none border-[1px] border-[#F2B21B] rounded-lg h-[50px] px-[15px] font-montserrat font-semibold lg:hidden grow"
          defaultValue={selectedRegion}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Europe">Europe</option>
          <option value="LATAM">LATAM</option>
          <option value="Middle East">Middle East</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="Global">Global</option>
        </select>
        <Search />
      </div>

      <motion.div
        className="w-full my-16 !grid xl:!grid-cols-5 !grid-cols-2 grid-container "
        variants={card_container}
        initial="hidden"
        animate={countries?.length ? "visible" : "hidden"}
      >
        {countries?.length !== 0
          ? countries?.map((item, index) => {
              return (
                <motion.div key={index} variants={card_item}>
                  <CountryCard
                    selected_country={selected_country}
                    country_code={item.country_code}
                    country={item.country_name}
                    id={index}
                    onLoad={LoadDetail}
                  />
                </motion.div>
              );
            })
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
          />
        </div>
      </motion.div>
      <OrangeButton text="Show More Countries" />
      {is_modal ? <Modal showModal={showModal} /> : ""}
    </section>
  );
};
