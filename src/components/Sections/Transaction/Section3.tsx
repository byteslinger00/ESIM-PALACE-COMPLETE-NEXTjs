"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/elements/Transaction/Card";
import { Button } from "@/components/elements/Transaction/Button";
import { Roaming } from "@/components/elements/Transaction/Roaming";
import { Reload } from "@/components/elements/Transaction/Reload";
import { Info } from "@/components/elements/Transaction/Info";
import { ContactUs } from "@/components/elements/Transaction/ContactUs";
import useParticipantStore from "@/store/use-participant";
import buyEsimById from "@/actions/Packages/buyEsimById";
import { getCookie } from "cookies-next";
import { GetUserInfoFromCookie } from "@/utils/getUserInfoFromCookie";
import QRCode from "react-qr-code";
import { transaction } from "@/types/transaction.type";
import { Spinner } from "@/components/elements/common/Spinner";
export const Section3 = () => {
  const { selected_package } = useParticipantStore((state) => state);
  const [transactionData, setData] = useState<transaction>();
  const [selected_type, setType] = useState(false);
  const [is_Loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const user_info = GetUserInfoFromCookie(getCookie("user_info"));
      let data: transaction = await buyEsimById(
        user_info.customer_details.customer_id,
        selected_package?.package_type_id,
        user_info.customer_details.full_name,
        user_info.customer_details.phone_number
      );
      console.log(data);
      setData(data);
      setLoading(false);
    })();
  }, [selected_package?.package_type_id]);

  const handleClickType = (name: string) => {
    switch (name) {
      case "qr_code":
        setType(false);
        break;
      case "manual":
        setType(true);
        break;
    }
  };

  return (
    <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 py-[40px] bg-white text-dark-solid text-center flex flex-col gap-10">
      {is_Loading ? <Spinner /> : ""}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-row gap-4">
            <Image
              src="/assets/Transaction Page/Icons/Check mark.svg"
              width={64}
              height={64}
              alt="Check Mark"
            />
            <div className="lg:text-[24px] text-[20px] grid grid-rows-2 font-montserratbold text-left">
              <p>Order #{transactionData?.order_number}</p>
              <p>Thanks Helex Mofidex</p>
            </div>
          </div>
          <hr className="border-[#DDDDDD]" />
          <div className="flex flex-row gap-8 max-lg:mx-auto">
            <Button
              title="QR code"
              color="#FFECBE"
              selectedColor="#F2B21B"
              selected={!selected_type}
              onClick={() => handleClickType("qr_code")}
            />
            <Button
              title="Manual"
              color="#FFECBE"
              selectedColor="#F2B21B"
              selected={selected_type}
              onClick={() => handleClickType("manual")}
            />
          </div>
          {selected_type ? (
            <p className="text-[25px]">{transactionData?.qr_code}</p>
          ) : (
            <QRCode
              size={256}
              style={{
                height: "auto",
                maxWidth: "300px",
                width: "300px",
                margin: "auto",
              }}
              value={transactionData?.qr_code ? transactionData?.qr_code : ""}
              viewBox={`0 0 256 256`}
            />
          )}
          
          {/* Integrate With API */}
          <Roaming
            iccid={transactionData?.iccid}
            country={transactionData?.country_name}
          />
          <Reload />
          <Info
            full_name={transactionData?.request.full_name}
            email={transactionData?.request.email}
            phone_number={transactionData?.request.phone_number}
          />
          <ContactUs />
          <hr className="border-[#DDDDDD] max-lg:hidden" />
          <p className="font-montserrat text-[18px] text-left max-lg:hidden">
            Purchase options cancellation policy
          </p>
        </div>
        <div className="max-lg:order-first">
          <Card
            country={selected_package?.country_code}
            title={selected_package?.country_name}
            size={selected_package?.data_GB}
            price={Number(selected_package?.price)}
            subtotal={Number(selected_package?.price)}
            discount={1.0}
          />
        </div>
      </div>
    </section>
  );
};
