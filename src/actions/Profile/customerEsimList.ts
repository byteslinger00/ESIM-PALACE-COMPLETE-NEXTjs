import { token } from "@/utils/token";

export const CustomerEsimList = async (toast: any, currentId: string) => {
    try {
        const res = await fetch(
            "https://test.esimplified.io/customer/esimpalace/api/customer_esims_list/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify({
                    customer_id: currentId,
                }),
            }
        );
        const response = await res.json();
        if (res.ok === false) throw response.detail;
        return response;
    } catch (error) {
        toast.error(error)
        return false;
    }
} 