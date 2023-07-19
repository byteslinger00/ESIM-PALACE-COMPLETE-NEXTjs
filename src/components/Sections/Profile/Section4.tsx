"use client";
import { OrangeButton } from "@/components/elements/common/OrangeButton";
import { TextInput } from "@/components/elements/common/TextInput";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { GetInfoFromCookie } from "@/utils/GetInfoFromCookie";
import { user_info } from "@/types/userinfo.type";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { CustomerEditDetails } from "@/actions/Profile/customerEditDetails";
import { Spinner } from "@/components/elements/common/Spinner";
import { validEmail, validName, validPassword, validPhone } from "@/utils/validation";

export const Section4 = () => {
  const [currentID, setCurrentID] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [is_Loading, setLoading] = useState(false);
  const [nameValidation, setNameValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [phoneValidation, setPhoneValidation] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user_info: user_info = GetInfoFromCookie(getCookie("user_info"));
    if (user_info === undefined) {
      router.push("/");
      return;
    }
    setCurrentID(user_info.customer_details.customer_id);
    setFullName(user_info.customer_details.full_name);
    setEmail(user_info.customer_details.email);
    setPhone(user_info.customer_details.phone_number);
  }, [router, setCurrentID, setFullName]);

  const clickSave = async () => {
    setNameValidation(validName(fullName).response);
    setEmailValidation(validEmail(email).response);
    setPasswordValidation(validPassword(password).response);
    setPhoneValidation(validPhone(phone).response);
    if(validName(fullName).error || validEmail(email).error || validPassword(password).error || validPhone(phone).error)
      return;
    setLoading(true);
    await CustomerEditDetails(toast, currentID, fullName, email, password, phone);
    setLoading(false);
  };

  return (
    <section className="min-h-screen mi-medium:px-[300px] 2xl:px-[100px] px-6 md:py-[135px] py-[40px] text-dark-solid text-center bg-light-solid">
      {is_Loading ? (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[500]">
          <Spinner />
        </div>
      ) : (
        ""
      )}
      <h1 className="font-montserrat2xl md:text-[48px] text-[32px] md:mb-[60px] mb-[25px] xl:px-[300px]">
        Your Profile
      </h1>
      <div className="bg-white lg:rounded-[32px] rounded-[10px] grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[15px] lg:px-20 lg:py-20 px-5 py-5">
        <TextInput
          type="text"
          header="Full Name*"
          placeholder="Helex Mofidex"
          disabled={false}
          value={fullName}
          setValue={setFullName}
          validation={nameValidation}
        />
        <TextInput
          type="text"
          header="Your Email*"
          placeholder="info@example.com"
          disabled={false}
          value={email}
          setValue={setEmail}
          validation={emailValidation}
        />
        <TextInput
          type="text"
          header="Phone Number*"
          placeholder="+123 4456 7889 88"
          disabled={false}
          value={phone}
          setValue={setPhone}
          validation={phoneValidation}
        />
        <TextInput
          type="password"
          header="Current Password*"
          placeholder="**** **** ****"
          disabled={false}
          value={password}
          setValue={setPassword}
          validation={passwordValidation}
        />
        <div className="md:col-span-2" onClick={clickSave}>
          <OrangeButton text="Save Profile" />
        </div>
      </div>
    </section>
  );
};
