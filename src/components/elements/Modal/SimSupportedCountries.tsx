import { checkFlag } from "@/utils/checkFlag";
import { getCountryCode } from "@/utils/getCountryCode";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import Image from "next/image";

interface props {
  countries: string[];
  country_name: string;
}

export const SupportedCountries: React.FC<props> = ({
  countries,
  country_name,
}) => {
  return (
    <div className="xl:text-[20px] text-[18px]">
      <span className="font-montserratbold">eSIM for: {country_name}</span>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-1">
        {countries.map((item, index) =>
          index < 14 ? (
            <div
              key={"supported" + index}
              className="flex flex-row gap-3 font-montserrat"
            >
              <div className=" my-auto">
                {/* <FlagIcon
                code={getCountryCode(item) as FlagIconCode}
                className="w-[30px]"
              /> */}
                {checkFlag(getCountryCode(item)) ? (
                  <Image
                    src={`/assets/Region Flag/${item}.jpg`}
                    width={500}
                    height={500}
                    className="!max-w-[100px] w-[50px] !mx-[-6px]"
                    alt="Region flag"
                  />
                ) : (
                  <FlagIcon
                    code={getCountryCode(item) as FlagIconCode}
                    className="!max-w-[100px] w-[50px] !mx-[-6px]"
                  />
                )}
              </div>
              <p className="text-[16px] my-auto">{item}</p>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};
