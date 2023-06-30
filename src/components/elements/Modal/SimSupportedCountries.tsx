import { getCountryCode } from "@/utils/getCountryCode";
import { FlagIcon, FlagIconCode } from "react-flag-kit";

interface props {
  countries: string[];
}

export const SupportedCountries: React.FC<props> = ({ countries }) => {
  return (
    <div className="xl:text-[20px] text-[18px]">
      <span className="font-montserratbold">SupportedCountries</span>
      <div className="">
        {countries.map((item, index) => (
          <div
            key={"supported" + index}
            className="flex flex-row gap-3 font-montserrat"
          >
            <div className=" my-auto">
              <FlagIcon
                code={getCountryCode(item) as FlagIconCode}
                className="w-[30px]"
              />
            </div>
            <p className="text-[16px] my-auto">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
