"use client";
import { useEffect, useState } from "react";
import getCountriesByRegion from "@/actions/Packages/getCountriesByRegion";
import { packages } from "@/types/packages.type";
import getDetailsByCountry from "@/actions/Home/getDetailsByCountry";
import { details } from "@/types/details.type";
import { Spinner } from "@/components/elements/common/Spinner";
import { toast } from "react-toastify";
import { Modal } from "@/components/elements/Modal";
import { Countreis } from "../Countries";
import getSearchData from "@/actions/Search/getSearchData";

interface props {
  title: string;
  search?: string;
  is_search?: boolean;
}

export const Section3:React.FC<props> = ({title,search, is_search}) => {
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
      let data;
      if(title === 'Popular Countries')
        data = await getCountriesByRegion("Popular");
      else
        data = await getSearchData(search || '');
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
  }, [search, title]);
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
    <section className={`relative mi-medium:px-[300px] 2xl:px-[100px] max-xl:px-[100px] max-sm:px-6 pt-[135px] ${is_search? 'bg-white' : 'bg-[#F9F7F7]'}  text-dark-solid text-center ${is_search? '!px-0' : ''} ${is_search? '!py-0' : ''}`}>
      <div className="flex flex-row">
        <p className="font-montserrat2xl xl:text-[48px] text-[32px] max-xl:mx-auto">
          {title}
        </p>
      </div>
      {is_Loading ? <Spinner is_search={is_search}/> : ""}
      <Countreis
        countries={popularCountries}
        selected_country={selected_country}
        selected_cardIndex={selected_cardIndex}
        details={details}
        detailsVisible={detailsVisible}
        showModal={showModal}
        LoadDetail={LoadDetail}
      />
      {is_modal ? <Modal showModal={showModal} /> : ""}
    </section>
  );
};
