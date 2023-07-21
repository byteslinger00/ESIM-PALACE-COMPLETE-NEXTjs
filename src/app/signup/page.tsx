"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { TextInput } from "@/components/SignUp/TextInput";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/elements/common/Spinner";
import { SignUpByEmail } from "@/actions/Signup/signUpByEmail";
import { validEmail, validName, validPassword, validPhone } from "@/utils/validation";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [is_Loading, setLoading] = useState(false);
  const [nameValidation, setNameValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [phoneValidation, setPhoneValidation] = useState('');

  const router = useRouter();

  const clickSignUp = async () => {
    setNameValidation(validName(name).response);
    setEmailValidation(validEmail(email).response);
    setPasswordValidation(validPassword(password).response);
    setPhoneValidation(validPhone(phone).response);
    if(validName(name).error || validEmail(email).error || validPassword(password).error || validPhone(phone).error)
      return;
    setLoading(true);
    let res = await SignUpByEmail(toast, name, email, password, phone);
    setLoading(false);
    if (res) router.push("/login");
  };

  return (
    <main className="mt-[180px]">
      {is_Loading ? (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[500]">
          <Spinner />
        </div>
      ) : (
        ""
      )}
      <div className="mx-9 grid xl:grid-cols-2 grid-cols-1 text-dark-solid">
        <div>
          <div className="md:w-[630px] w-full md:p-[50px] md:gap-5 gap-4 bg-white xl:float-right mx-auto md:big-shadow rounded-[32px] flex flex-col font-montserrat">
            <h1 className="md:text-[48px] text-[30px] font-montserrat2xl text-center mb-[10px]">
              Sign Up
            </h1>
            <TextInput
              value={name}
              setValue={setName}
              placeholder="Helex Mofidex"
              type="text"
              validation={nameValidation}
            />
            <TextInput
              value={email}
              setValue={setEmail}
              placeholder="info@example.com"
              type="text"
              validation={emailValidation}
            />
            <TextInput
              value={phone}
              setValue={setPhone}
              placeholder="+123 4456 7889 88"
              type="text"
              validation={phoneValidation}
            />
            <TextInput
              value={password}
              setValue={setPassword}
              placeholder="**** **** **** ****"
              type="password"
              validation={passwordValidation}
            />

            <div className="md:text-[18px] text-[14px] max-md:text-center">
              By signing up you agree to eSim Palace&apos;s{" "}
              <a href="/privacy" className="font-montserratbold">
                Terms of Service
              </a>{" "}
              and
              <a href="/privacy" className="font-montserratbold">
                {" "}
                Privacy Policy.
              </a>
            </div>
            <button
              className="py-6 px-9 md:max-w-[245px] md:text-[18px] text-[16px] bg-primary-solid hover:bg-[#FBE8BB] text-dark-solid rounded-lg text-center font-montserrat font-bold"
              onClick={clickSignUp}
            >
              <p className="md:leading-[13px] leading-[11px]">Sign Up</p>
            </button>
            <hr className="border-[#DDDDDD]" />
            <div className="md:text-[18px] text-[14px] max-md:text-center">
              Already have an account?
              <a href="/login" className="font-montserratbold">
                Sign in
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-signup-background bg-cover bg-center bg-no-repeat max-xl:hidden"></div>
      </div>
      <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 my-[150px] font-montserrat text-dark-solid text-center">
        <div className="w-full flex flex-col gap-10"></div>
      </section>
    </main>
  );
}
