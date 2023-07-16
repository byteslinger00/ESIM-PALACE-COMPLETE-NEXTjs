"use client";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { GetInfoFromCookie } from "@/utils/GetInfoFromCookie";
import { user_info } from "@/types/userinfo.type";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Spinner } from "@/components/elements/common/Spinner";
import { CustomerEsimList } from "@/actions/Profile/customerEsimList";
import { profiledata } from "@/types/profiledata.type";
import { Card } from "@/components/elements/Profile/Card";
import getDetailsByEsim from "@/actions/eSims/getDetailsByEsim";
import { Modal } from "@/components/elements/Modal/detailModal";

export const Section4 = () => {
  const [currentID, setCurrentID] = useState("");
  const [is_Loading, setLoading] = useState(false);
  const [esim_list, setEsimList] = useState<profiledata>();
  const [is_modal, showModal] = useState(false);
  const [modal_data, setData] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const user_info: user_info = GetInfoFromCookie(getCookie("user_info"));
    if (user_info === undefined) {
      router.push("/");
      return;
    }
    setCurrentID(user_info.customer_details.customer_id);
  }, [router, setCurrentID]);

  useEffect(() => {
    if (!currentID) return;
    (async () => {
      setLoading(true);
      let data_list: profiledata = await CustomerEsimList(toast, currentID);
      setLoading(false);
      setEsimList(data_list);
    })();
  }, [currentID]);

  const handleDetail = async (iccid:string, customer_id:string) => {
    const response = await getDetailsByEsim(iccid,customer_id);
    console.log(response);
    setData(response);
    showModal(true);
  }

  return (
    <section className="min-h-screen mi-medium:px-[300px] 2xl:px-[100px] px-6 md:py-[135px] py-[40px] text-dark-solid text-center bg-light-solid">
      {is_Loading ? (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[500]">
          <Spinner />
        </div>
      ) : (
        ""
      )}
      <h1 className="font-montserrat2xl md:text-[48px] text-[32px] xl:px-[300px] md:mb-[60px] mb-[25px]">
        Your Esim List
      </h1>
      {esim_list?.count ? (
        <div className="bg-white lg:rounded-[32px] rounded-[10px] grid md:grid-cols-3 grid-cols-1 lg:gap-[30px] gap-[15px] lg:px-20 lg:py-20 px-5 py-5">
          {esim_list.elements.map((item, index) => (
            <Card
              key={index}
              country_code={item.country_code}
              country_name={item.country_name}
              assigned_date={item.assigned_date.split("T")[0]}
              iccid={item.iccid}
              customer_id={currentID}
              handleDetail={handleDetail}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white lg:rounded-[32px] rounded-[10px] lg:px-20 lg:py-20 px-5 py-5">
          <p className="font-montserrat md:text-[32px] text-[26px] text-center">
            You have no Esims
          </p>
        </div>
      )}
      {is_modal?<Modal showModal={showModal} data={modal_data[0]}/>:''}
    </section>
  );
};
