"use client";
import Image from "next/image";
import { Properties } from "./detailProperty";

interface props {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
}

export const Modal: React.FC<props> = ({ showModal, data }) => {

  if (data)
    return (
      <div className="w-full h-full top-0 left-0 overscroll-contain block absolute px-[100px]">
        <div
          className="bg-[#0E2C40B8] w-full h-full top-0 left-0 z-[10] overscroll-contain block absolute"
          onClick={() => showModal(false)}
        ></div>
        <div className="relative w-full xl:px-[60px] xl:py-20 p-10 bg-white rounded-[32px] z-[100] font-montserrat xl:gap-[85px] text-left position-center">
          <Image
            src="/assets/Packages page/Icons/Close.svg"
            width={26}
            height={26}
            alt="close"
            className="absolute top-0 right-0 cursor-pointer xl:hidden"
            onClick={() => showModal(false)}
          />
          <div className="bg-[#EBF6FF] p-10 whitespace-normal flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Properties title="Data Allowance" text={data.data_allowance_gigabytes} />
              <Properties title="Remaining Data" text={data.data_usage_remaining_gigabytes} />
              <Properties title="Created at" text={data.date_created_utc} />
              <Properties title="Status" text={data.status} />
              <Properties title="Alloance Days" text={data.time_allowance_days} />
              <Properties title="Voice Remaining Secons" text={data.voice_usage_remaining_seconds} />
              <Properties title="Sim starts at:" text={data.window_activation_start_utc} />
              <Properties title="Sim ends at:" text={data.window_activation_end_utc} />
            </div>
          </div>
        </div>
      </div>
    );
  else return <></>;
};
