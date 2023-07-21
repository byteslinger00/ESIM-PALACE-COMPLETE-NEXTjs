"use client";
import { Logo } from "@/components/SignUp/Logo";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { TextInput } from "@/components/SignUp/TextInput";
import { LoginByID } from "@/actions/Login/loginById";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/elements/common/Spinner";
import { setCookie } from "cookies-next";
import { SendForgotPassword } from "@/actions/Login/sendForgotPassword";
import { loginValidation } from "@/utils/validation";

export default function Page() {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [is_Loading, setLoading] = useState(false);
  const [idvalidation, setIdValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const onGoogleBtnClicked = () => {
    signIn("google");
    
  };
  const onAppleBtnClicked = () => {
    signIn("apple");
    
  };

  const clickLogin = async () => {
    let res = loginValidation(id, password);
    if(res.error === true)
    {
      setIdValidation(res.response.id);
      setPasswordValidation(res.response.password);
      return;
    }
    setIdValidation('');
    setPasswordValidation('');
    setLoading(true);
    let data = await LoginByID(toast, id, password);
    setCookie('user_info', JSON.stringify(data));
    setLoading(false);
    if (data.customer_authenticated) router.push("/");
  };

  const clickForgotPassword = async () => {
    if(!id){
      toast.error("Enter your email id");
      return;
    }
    setLoading(true);
    const data = await SendForgotPassword(toast,id);
    if(data === true) setCookie('reset-email', id);
    setLoading(false);
  }

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
              Log In
            </h1>
            <TextInput
              value={id}
              setValue={setID}
              placeholder="User ID"
              type="text"
              validation={idvalidation}
            />
            <TextInput
              value={password}
              setValue={setPassword}
              placeholder="**** **** **** ****"
              type="password"
              validation={passwordValidation}
            />
            <div className="md:text-[18px] text-[14px] max-md:text-center">
              By Logging in you agree to Dataesim’s
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
              onClick={clickLogin}
            >
              <p className="md:leading-[13px] leading-[11px]">Log In</p>
            </button>
            <button className="underline text-left cursor-pointer w-[200px]" onClick={clickForgotPassword}>Forgot password?</button>
            <hr/>
            <p className="md:text-[18px] text-[14px] max-md:mx-auto">
              Or Sign In Using
            </p>
            <div className="flex flex-row gap-4 max-md:mx-auto">
              <button onClick={onAppleBtnClicked}>
                <Logo type="Apple" />
              </button>
              <button onClick={onGoogleBtnClicked}>
                <Logo type="Google" />
              </button>
            </div>
            <hr className="border-[#DDDDDD]" />
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
