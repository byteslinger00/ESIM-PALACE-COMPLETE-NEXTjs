export default async function getDetailsByCountry(region: string) {
    try {
      const res = await fetch(
        "https://test.esimplified.io/customer/esimpalace/api/countries_list/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token ae9819d13e176fd276a958e1e3230b3080a73a2c",
          },
          body: JSON.stringify({
            region,
          }),
        }
      );
      const response = await res.json();
      // response.elements.shift();
      console.log(response.elements)
      return response.elements;
    } catch (error) {
      console.log('Connection failed');
      return;
    }
  }
  