"use client";
import { details } from "@/types/details.type";
import { DetailCard } from "./DetailCard";
import useParticipantStore from "@/store/use-participant";
import { motion } from "framer-motion";
import { details_container } from "@/utils/animations";

interface props {
  data?: Array<details>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}
export const Details: React.FC<props> = ({ data, showModal, isVisible }) => {
  //Store
  const { setSelected_Package } = useParticipantStore((state) => state);

  const showData = (index: number) => {
    if (data !== undefined) {
      setSelected_Package(data[index]);
      showModal(true);
    }
  };
  return (
    <motion.div
      className={`w-full grid xl:grid-cols-3 grid-cols-1 gap-[30px] ${
        isVisible ? "" : "h-0"
      }`}
      variants={details_container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {data?.map((item, index) => (
        <DetailCard
          key={data[0].country_name + "-details-" + index}
          country_name={item.country_name}
          country_code={item.country_code}
          data={item.data_GB}
          validity={item.validity_days}
          plan={item.plan_type}
          currency={item.currency}
          price={item.price}
          id={index}
          showData={showData}
        />
      ))}
    </motion.div>
  );
};
