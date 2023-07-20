"use client";
import { useEffect, useState } from "react";
import { TextInput } from "@/components/SignUp/TextInput";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/elements/common/Spinner";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
import { emailVerificationByToken } from "@/actions/Signup/emailVerificationByToken";

export default function Page() {
  const router = useRouter();
  const [is_Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const query = new URLSearchParams(window.location.search);
      const token = query.get("token");
      const email = query.get("email");
      setLoading(true);
      const res = await emailVerificationByToken(
        toast,
        email || "",
        token || ""
      );
      setLoading(false);
      if (res === true) router.push("/login");
      else router.push('/');
    })();
  }, []);

  return (
    <main className="mt-[180px]">
      {is_Loading ? (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[500]">
          <div
            className={`absolute top-0 left-0 w-full h-full bg-transparent z-[500]`}
          >
            <div className="absolute position-center w-[300px] h-[30px] ">
              <h1 className="md:text-[48px] text-[30px] font-montserrat2xl text-center">
                Email Verification...
              </h1>
            </div>
          </div>
          <Spinner />
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
