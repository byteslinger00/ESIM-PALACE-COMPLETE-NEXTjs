'use client'
import { useEffect, useState } from "react";
import { CountryCard } from "../../elements/Homepage/CountryCard";
import getCountriesByRegion from "@/actions/Packages/getCountriesByRegion";
import { packages } from "@/types/packages.type";
import { Details } from "@/components/elements/Homepage/Details";
import HashLoader from "react-spinners/HashLoader";

export const Section3 = () => {
  const [popularCountries, setCountries] = useState<Array<packages>>();
  const [cardIndex, setIndex] = useState(1);
  const [is_Loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const data = await getCountriesByRegion('Popular');
      setCountries(data)
      setLoading(false);
    })()
  }, [])

  const LoadDetail = (country_name: string, index: number) => {
    setIndex(Math.floor(index / 5) + 1);
  }

  return (
    <section className="relative mi-medium:px-[300px] 2xl:px-[100px] max-xl:px-[100px] max-sm:px-6 py-[135px] bg-[#F9F7F7] text-dark-solid text-center">
      <div className="flex flex-row">
        <p className="font-montserrat2xl xl:text-[48px] text-[32px] max-xl:mx-auto">Popular Countries</p>
      </div>
      {
        is_Loading ?
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000010]">
            <div className="absolute position-center w-[100px] h-[100px]">
              <HashLoader size={100} color="#36D7B7" />
            </div>
          </div>
          : ""
      }
      <div className="w-full my-16 grid xl:grid-cols-5 grid-cols-2 grid-container">
        {
          popularCountries?.length !== 0 ?
            popularCountries?.map((item, index) => <CountryCard key={"Popular Country" + index} id={index} country_code={item.country_code} country={item.country_name} onLoad={LoadDetail} />)
            : ""
        }
        <Details index={cardIndex} />
      </div>

    </section>
  );
};
