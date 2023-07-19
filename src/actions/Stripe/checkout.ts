export const checkout = async (order: string, price: string, id: number, email: string) => {
    const response = await fetch(
        "/api/checkout_sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Order": email ? order + " by " + email : order,
            "Price": price,
            "Id": id.toString(),
          },
          body: JSON.stringify({
          }),
        }
      )
    return response.headers.get('Location');
}