'use client'
import { token } from "@/utils/token";

export const resetPasswordByToken = async (toast: any, customer_id:string, new_password: string, resetToken: string) => {
    try {
        const res = await fetch(
            "https://test.esimplified.io/customer/esimpalace/api/customer_reset_password/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                },
                body: JSON.stringify({
                    customer_id,
                    "password_reset_token": resetToken,
                    new_password
                }),
            }
        );
        if (res.status === 200) { 
            toast.success("Password reset successfully!");
            return true; }
        throw "Connection Error!";
    } catch (error) {
        toast.error(error)
        return false;
    }
} 