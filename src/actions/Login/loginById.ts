'use client'
import { token } from "@/utils/token";

export const LoginByID = async (toast: any, customer_id: string, password: string) => {
    try {
        const res = await fetch(
            "https://test.esimplified.io/customer/esimpalace/api/customer_sign_in/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify({
                    customer_id,
                    password,
                }),
            }
        );
        const response = await res.json();
        if (res.ok === false) throw response.detail;
        if (response.customer_authenticated === true)
        {
            toast.success("Login success");
        }
        return response;
    } catch (error) {
        toast.error(error)
        return false;
    }
} 