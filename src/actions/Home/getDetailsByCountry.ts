import { token } from "@/utils/token";

export default async function getDetailsByCountry(country_name: string) {
    try {
      const res = await fetch(
        "https://test.esimplified.io/customer/esimpalace/api/packages_list/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            country_name,
          }),
        }
      );
      const response = await res.json();
      console.log(response)
      return response.elements;
    } catch (error) {
      console.log('Connection failed');
      return false;
    }
  }
  