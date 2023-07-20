'use client'
import { token } from "@/utils/token";

export const emailVerificationByToken = async (toast: any, email: string, email_verification_token: string) => {
    try {
        const res = await fetch(
            "https://test.esimplified.io/customer/esimpalace/api/customer_verify_email/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                },
                body: JSON.stringify({
                    email,
                    email_verification_token
                }),
            }
        );
        if (res.status === 200) { 
            toast.success("Email Verification Successfully!");
            return true; }
        throw "Connection Error!";
    } catch (error) {
        toast.error(error)
        return false;
    }
} 