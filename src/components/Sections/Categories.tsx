import { Category } from "../elements/Homepage/Category";

export const Categories = () => {
  return (
    <section className="xl:px-[300px] px-5 pb-[150px] text-dark-solid text-center">
      <p className="sm:mt-[150px] mt-[40px] font-montserrat2xl sm:text-[48px] text-[40px]">
        How eSim Palace works
      </p>
      <div className="relative mt-[60px] grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="absolute z-[-10] mt-[140px] mx-[80px] w-[80%] h-1 bg-[#DEEDF8] max-xl:hidden" />
        <Category type="01" description="Choose a Country And Plan" />
        <Category type="02" description="Scan Your QR code" />
        <Category type="03" description="Use Your Phone" />
        <Category type="04" description="Next Trip Choose a New Plan" />
      </div>
    </section>
  );
};
