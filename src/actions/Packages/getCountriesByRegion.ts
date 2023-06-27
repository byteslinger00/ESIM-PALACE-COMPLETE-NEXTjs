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
    const response = await res.json();
    if (region !== "Popular") response.elements.shift();
    return response.elements;
  } catch (error) {
    console.log("Connection error!");
    return false;
  }
}
