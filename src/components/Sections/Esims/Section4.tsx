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
import { Details } from "@/components/elements/Homepage/Details";
import getDetailsByCountry from "@/actions/Home/getDetailsByCountry";
import { checkout } from "@/actions/Stripe/checkout";
import topUp from "@/actions/Home/topUp";

export const Section4 = () => {
  const [currentID, setCurrentID] = useState("");
  const [is_Loading, setLoading] = useState(false);
  const [esim_list, setEsimList] = useState<profiledata>();
  const [is_modal, showModal] = useState(false);
  const [modal_data, setData] = useState<any>();

  const [temp, show] = useState();
  const [selected_cardIndex, setIndex] = useState(0);
  const [detailsVisible, setVisible] = useState(false);
  const [details, setDetails] = useState();
  const [current_id, setCustomerId] = useState("");
  const [iccid, setIccid] = useState("");

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

  useEffect(() => {
    (async () => {
      const query = new URLSearchParams(window.location.search);
      if (query.get("success")) {
        const iccid = query.get('iccid');
        const customer_id = query.get('id');
        const package_type_id = query.get('type');
        const res = await topUp(iccid || '', customer_id || '', package_type_id || '');
        if(res === true){
          toast.success('Top up successfully!');
        }
        else toast.error('Connection failed');
        router.push('/esims');
      }
    })();
  }, []);

  const handleDetail = async (iccid: string, customer_id: string) => {
    setLoading(true);
    const response = await getDetailsByEsim(iccid, customer_id);
    setLoading(false);
    setData(response);
    showModal(true);
  };

  const handleTopUp = async (
    index: number,
    iccid: string,
    customer_id: string,
    country_code: string,
    country_name: string
  ) => {
    setLoading(true);
    setCustomerId(customer_id);
    setIccid(iccid);
    setVisible(false);
    const data = await getDetailsByCountry(country_name);
    if (data === false) {
      toast.error("Connection Failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
      setVisible(false);
      return;
    }
    setDetails(data);
    setIndex(index);
    setVisible(true);
    setLoading(false);
  };

  const buyHandler = async (
    package_type_id: number,
    price: string,
    name: string
  ) => {
    const response = await checkout(
      name,
      price,
      package_type_id,
      current_id,
      "topup",
      iccid
    );
    if (response) router.push(response);
    else toast.error("Connection Failed");
  };

  return (
    <section className="min-h-screen px-6 md:py-[135px] py-[40px] text-dark-solid text-center bg-light-solid">
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
        <div className="bg-white lg:rounded-[32px] rounded-[10px] !grid 2xl:!grid-cols-5 md:!grid-cols-2 !grid-cols-1 grid-containerB lg:gap-[30px] gap-[15px] px-5 py-5">
          {esim_list.elements.map((item, index) => (
            <Card
              key={index}
              index={index}
              country_code={item.country_code}
              country_name={item.country_name}
              assigned_date={item.assigned_date.split("T")[0]}
              iccid={item.iccid}
              customer_id={currentID}
              handleDetail={handleDetail}
              handleTopUp={handleTopUp}
            />
          ))}
          <div
            className={`max-xl:hidden grid-item grid-A${
              Math.floor(selected_cardIndex / 5) + 1
            }`}
          >
            <Details
              data={details}
              showModal={show}
              isVisible={detailsVisible}
              handleBuy={buyHandler}
            />
          </div>
          <div
            className={`xl:hidden grid-item grid-A${
              Math.floor(selected_cardIndex / 2) + 1
            }`}
          >
            <Details
              data={details}
              showModal={show}
              isVisible={detailsVisible}
              handleBuy={buyHandler}
            />
          </div>
        </div>
      ) : (
        <div className="bg-white lg:rounded-[32px] rounded-[10px] lg:px-20 lg:py-20 px-5 py-5">
          <p className="font-montserrat md:text-[32px] text-[26px] text-center">
            You have no Esims
          </p>
        </div>
      )}
      {is_modal ? <Modal showModal={showModal} data={modal_data[0]} /> : ""}
    </section>
  );
};
