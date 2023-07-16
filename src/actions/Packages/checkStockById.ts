import { token } from "@/utils/token";

export default async function checkStockById(package_type_id: number | undefined) {
  try {
    const res = await fetch(
      "https://test.esimplified.io/customer/esimpalace/api/check_stock/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          package_type_id,
        }),
      }
    );
    if (res.ok === false) throw res;
    return true;
  } catch (error) {
    return false;
  }
}
