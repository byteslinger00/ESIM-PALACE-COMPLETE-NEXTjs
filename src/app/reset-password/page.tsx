"use client";
import { useState } from "react";
import { TextInput } from "@/components/SignUp/TextInput";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/elements/common/Spinner";
import { validEmail } from "@/utils/validation";
import { resetPasswordByToken } from "@/actions/Login/resetPasswordByToken";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";

export default function Page() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [is_Loading, setLoading] = useState(false);

  const clickLogin = async () => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");

    const id = getCookie("reset-email");
    if (password.length < 8) return;
      setLoading(true);
      const res = await resetPasswordByToken(toast, id as string, password, token || "");
      setLoading(false);
      if (res === true) router.push("/");
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
      <div className="mx-9 grid xl:grid-cols-2 grid-cols-1">
        <div>
          <div className="md:w-[630px] w-full md:p-[50px] md:gap-5 gap-4 bg-white xl:float-right mx-auto md:big-shadow rounded-[32px] flex flex-col font-montserrat">
            <h1 className="md:text-[48px] text-[30px] font-montserrat2xl text-center mb-[10px]">
              Reset password
            </h1>
            <TextInput
              value={password}
              setValue={setPassword}
              placeholder="Your new password"
              type="password"
            />
            <button
              className="mx-auto py-6 px-9 md:max-w-[245px] md:text-[18px] text-[16px] bg-primary-solid hover:bg-[#FBE8BB] text-dark-solid rounded-lg text-center font-montserrat font-bold"
              onClick={clickLogin}
            >
              <p className="md:leading-[13px] leading-[11px]">Reset</p>
            </button>
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
