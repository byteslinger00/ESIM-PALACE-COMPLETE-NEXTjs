import { Search } from "../../elements/common/Search";

export const SearchSection = () => {
  return (
    <section className="xl:px-[300px] sm:py-[120px] py-[40px] px-5 bg-[#F9F7F7] text-dark-solid text-center flex flex-col gap-[24px]">
      <p className="font-montserrat2xl md:text-[48px] text-[32px] md:w-[670px] mx-auto">
        Search Here Where would you like to roam?
      </p>
      <div className="mx-auto">
        <Search />
      </div>
    </section>
  );
};
