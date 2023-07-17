import { token } from "@/utils/token";

export default async function getSearchData(search_term: string) {
  try {
    const res = await fetch(
      "https://test.esimplified.io/customer/esimpalace/api/search/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          search_term,
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
