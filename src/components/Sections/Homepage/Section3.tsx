"use client";
import { useEffect, useState } from "react";
import { CountryCard } from "../../elements/Homepage/CountryCard";
import getCountriesByRegion from "@/actions/Packages/getCountriesByRegion";
import { packages } from "@/types/packages.type";
import { Details } from "@/components/elements/Homepage/Details";
import getDetailsByCountry from "@/actions/Home/getDetailsByCountry";
import { details } from "@/types/details.type";
import { Spinner } from "@/components/elements/common/Spinner";
import { toast } from "react-toastify";
import { Modal } from "@/components/elements/Modal";
import { motion } from "framer-motion";
import { card_container, card_item } from "@/utils/animations";

export const Section3 = () => {
  const [popularCountries, setCountries] = useState<Array<packages>>();
  const [selected_cardIndex, setIndex] = useState(1);
  const [selected_country, setCountry] = useState("");
  const [is_Loading, setLoading] = useState(false);
  const [details, setDetails] = useState<Array<details>>();
  const [is_modal, showModal] = useState(false);
  const [detailsVisible, setVisible] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setVisible(false);
      const data = await getCountriesByRegion("Popular");
      if (data === false) {
        toast.error("Connection Failed!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
        setVisible(false);
        return;
      }
      setCountries(data);
      setLoading(false);
    })();
  }, []);
  useEffect(()=> {console.log(is_Loading)},[is_Loading])
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
    setVisible(true);
    setIndex(index);
    setLoading(false);
  };

  return (
    <section className="relative mi-medium:px-[300px] 2xl:px-[100px] max-xl:px-[100px] max-sm:px-6 pt-[135px] bg-[#F9F7F7] text-dark-solid text-center">
      <div className="flex flex-row">
        <p className="font-montserrat2xl xl:text-[48px] text-[32px] max-xl:mx-auto">
          Popular Countries
        </p>
      </div>
      {is_Loading ? <Spinner /> : ""}
      
      <motion.div
        className="w-full my-16 !grid xl:!grid-cols-5 !grid-cols-2 grid-container"
        variants={card_container}
        initial="hidden"
        animate={popularCountries ? 'visible': 'hidden'}
      >
        {popularCountries?.length !== 0
          ? popularCountries?.map((item, index) => (
              <motion.div variants={card_item} key={"Popular"+index} >
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
      {is_modal ? <Modal showModal={showModal} /> : ""}
    </section>
  );
};
