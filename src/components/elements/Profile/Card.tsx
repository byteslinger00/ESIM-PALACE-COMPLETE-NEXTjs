import useParticipantStore from "@/store/use-participant";
import { checkFlag } from "@/utils/checkFlag";
import Image from "next/image";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import { OrangeButton } from "../common/OrangeButton";
import getDetailsByEsim from "@/actions/eSims/getDetailsByEsim";

interface props {
  country_name: string;
  country_code: string;
  assigned_date: string;
  iccid: string;
  customer_id: string;
  handleDetail: any;
  handleTopUp: any;
}

export const Card: React.FC<props> = ({
  country_code,
  country_name,
  assigned_date,
  iccid,
  customer_id,
  handleDetail,
  handleTopUp
}) => {
  const detailHandle = async () => {
    await handleDetail(iccid, customer_id);
  }

  const topupHandle = async () => {
    await handleTopUp(iccid, customer_id);
  }

  return (
    <div className="bg-blue rounded-[20px] text-left text-white px-[30px] py-[30px] font-montserrat flex flex-col gap-4">
      <div className="flex flex-row">
        <p className="md:text-[23px] text-[18px] font-bold leading-7 grow">
          {country_name}
        </p>
        <div className="overflow-hidden w-[38px] h-[38px] rounded-full border-white border-[1px]">
          {checkFlag(country_code) ? (
            <Image
              src={`/assets/Region Flag/${country_code}.jpg`}
              width={500}
              height={500}
              className="!max-w-[100px] w-[50px] !mx-[-6px]"
              alt="Region flag"
            />
          ) : (
            <FlagIcon
              code={country_code as FlagIconCode}
              className="!max-w-[100px] w-[50px] !mx-[-6px]"
            />
          )}
        </div>
      </div>
      <hr className="opacity-20" />
      <p>ICCID: {iccid}</p>
      <div className="flex flex-row">
        <div className="flex flex-row gap-2">
          <Image
            src="/assets/Homepage/Icons/SVG Icon/Calendar.svg"
            width={24}
            height={24}
            alt="calender"
          />
          <p className="md:text-[16px] text-[14px] leading-5 my-auto font-medium">
            Purchased Dated
          </p>
        </div>
        <div className="grow"></div>
        <p className="font-bold leading-6 md:text-[19px] text-[16px]">
          {assigned_date}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-1">
        <button
          onClick={detailHandle}
          className="py-3 max-md:w-full md:text-[18px] disabled:bg-light-solid text-[16px] bg-primary-solid hover:bg-[#FBE8BB] text-dark-solid rounded-lg text-center font-montserrat font-bold"
        >
          Details
        </button>
        <button
         onClick={topupHandle} 
        className="py-3 max-md:w-full md:text-[18px] disabled:bg-light-solid text-[16px] bg-primary-solid hover:bg-[#FBE8BB] text-dark-solid rounded-lg text-center font-montserrat font-bold">
          TopUp
        </button>
      </div>
    </div>
  );
};
