export default async function sendEmail(from: string, name: string, phone: string, model: string, iccid: string, message: string) {
  try {
    const res = await fetch(
      "/api/send_email/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          from,
          name,
          phone,
          model,
          iccid,
          message
        },
        body: JSON.stringify({
        }),
      }
    );
    if (res.ok === false) throw res.statusText;
    return true;
  } catch (error) {
    return false;
  }
}
