import { token } from "@/utils/token";

export default async function getDetailsByEsim(iccid: string, customer_id: string) {
  try {
    const res = await fetch(
      "https://test.esimplified.io/customer/esimpalace/api/customer_packages_on_esim/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          iccid,
          customer_id
        }),
      }
    );
    if (res.ok === false) throw res.statusText;
    const response = await res.json();
    return response.elements;
  } catch (error) {
    return false;
  }
}
