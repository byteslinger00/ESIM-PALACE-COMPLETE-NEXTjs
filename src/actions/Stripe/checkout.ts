export const checkout = async () => {
    const response = await fetch(
        "/api/checkout_sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          }),
        }
      )
    return response.headers.get('Location');
}