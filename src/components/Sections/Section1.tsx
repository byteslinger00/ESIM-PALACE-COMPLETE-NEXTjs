import { Search } from "@/components/elements/common/Search";

interface props {
    heading: string;
    description: string;
}

export const Section1:React.FC<props> = ({heading, description}) => {
  return (
    <div className="w-full h-[800px]">
      <div className="mx-auto  xl:mx-[300px]  max-xl:text-center xl:w-[731px] w-[342px] text-white flex flex-col gap-6">
        <p className="xl:mt-[270px] mt-[130px] xl:text-[80px] text-[32px] font-montserrat2xl xl:leading-[90px]">
          {heading}
        </p>
        <p className="xl:mr-[100px] font-montserrat xl:text-[20px] text-[16px] leading-[30px]">
          {description}
        </p>
        <Search />
      </div>
    </div>
  );
};
