import { token } from "@/utils/token";

export const CustomerEditDetails = async (toast: any, currentId: string, full_name: string, email: string, password: string, phone_number: string) => {
    let first_name = full_name.split(' ')[0];
    let last_name = full_name.split(' ')[1];
    try {
        const res = await fetch(
            "https://test.esimplified.io/customer/esimpalace/api/customer_edit_details/",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify({
                    customer_id: currentId,
                    password,
                    email,
                    first_name,
                    last_name,
                    phone_number,
                    full_name,
                    new_customer_id: email
                }),
            }
        );
        const response = await res.json();
        if (res.ok === false) throw response.detail;
        toast.success('Profile edited successfully!')
        return response;
    } catch (error) {
        toast.error(error)
        return false;
    }
} 