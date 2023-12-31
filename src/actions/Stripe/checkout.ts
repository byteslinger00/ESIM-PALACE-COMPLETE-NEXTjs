export const checkout = async (order: string, price: string, id: number, email: string, route?: string, iccid?: string) => {
    const response = await fetch(
        "/api/checkout_sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Order": order,
            "Price": price,
            "Id": id.toString(),
            "Route": route === 'topup' ? 'esims': 'transaction',
            "iccid": iccid || '',
            "email": email,
          },
          body: JSON.stringify({
          }),
        }
      )
    return response.headers.get('Location');
}