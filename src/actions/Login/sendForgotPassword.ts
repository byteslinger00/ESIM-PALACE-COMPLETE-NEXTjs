'use client'
import { token } from "@/utils/token";

export const SendForgotPassword = async (toast: any, customer_id: string) => {
    try {
        const res = await fetch(
            "/api/forgot_password/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                    customer_id,
                },
                body: JSON.stringify({
                }),
            }
        );
        console.log(res);
        // const response = await res.json();
        // if (res.ok === false) throw response.detail;
        // if (response.customer_authenticated === true)
        // {
        //     toast.success("Your request send! Please check the email.");
        // }
        // return response;
    } catch (error) {
        toast.error(error)
        return false;
    }
} 