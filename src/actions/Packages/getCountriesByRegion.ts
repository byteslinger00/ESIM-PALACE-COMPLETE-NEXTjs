import { token } from "@/utils/token";

export default async function getCountriesByRegion(region: string) {
  try {
    const res = await fetch(
      "https://test.esimplified.io/customer/esimpalace/api/countries_list/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          region,
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
