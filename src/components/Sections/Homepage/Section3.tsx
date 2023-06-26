import Image from "next/image";
import { Category } from "../../elements/Homepage/Category";
import { CountryCard } from "../../elements/Homepage/CountryCard";
import { DetailCard } from "../../elements/Homepage/DetailCard";

export const Section3 = () => {
  return (
    <section className="mi-medium:px-[300px] 2xl:px-[100px] max-xl:px-[100px] max-sm:px-6 py-[135px] bg-[#F9F7F7] text-dark-solid text-center">
      <div className="flex flex-row">
        <p className="font-montserrat2xl xl:text-[48px] text-[32px] max-xl:mx-auto">Popular Countries</p>
      </div>
      <div className="w-full my-16 grid xl:grid-cols-5 grid-cols-2 md:gap-10 gap-6">
        <CountryCard id={0} src="0" country="Canada" />
        <CountryCard id={1}  src="1" country="China" />
        <CountryCard id={2}  src="2" country="China(Hong Kong)" />
        <CountryCard id={3}  src="3" country="France" />
        <CountryCard id={4}  src="4" country="Germany" />
      </div>
      <div className="w-full grid xl:grid-cols-3 grid-cols-1 gap-[30px] mb-5">
        <DetailCard />
        <DetailCard />
        <DetailCard />
      </div>
      <div className="w-full my-5 xl:grid xl:grid-cols-5 hidden gap-10 ">
        <CountryCard id={5} src="5" country="Greece" />
        <CountryCard id={6} src="6" country="Italy" />
        <CountryCard id={7} src="7" country="Japan" />
        <CountryCard id={8} src="8" country="Malaysia" />
        <CountryCard id={9} src="9" country="Mexico" />
      </div>
      <div className="w-full my-5 xl:grid xl:grid-cols-5 hidden gap-10 ">
        <CountryCard id={10} src="10" country="Spain" />
        <CountryCard id={11} src="11" country="Thailand" />
        <CountryCard id={12} src="12" country="Turkey" />
        <CountryCard id={13} src="13" country="United Kingdom" />
        <CountryCard id={14} src="14" country="United States" />
      </div>
    </section>
  );
};
