import { token } from "@/utils/token";

export default async function buyEsimById(customer_id: string, package_type_id: number | undefined, full_name: string, phone_number: string) {
  try {
    console.log('====='+package_type_id)
    const first_name = full_name.split(' ')[0];
    const last_name = full_name.split(' ')[1];
    const res = await fetch(
      "https://test.esimplified.io/customer/esimpalace/api/buy_esim/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          customer_id,
          package_type_id,
          email: customer_id,
          first_name,
          last_name,
          full_name,
          phone_number
        }),
      }
    );
    if (res.ok === false) throw res.statusText;
    const response = await res.json();
    console.log(response);
    return response;
  } catch (error) {
    return false;
  }
}
