const sendmail = require("sendmail")();

export const SendMail = (
  id,
  name,
  phonenumber,
  devicemodel,
  iccid,
  message
) => {
  sendmail(
    {
      from: id,
      to: "smtp.gmail.com",
      subject: "Support",
      html: `Full Name: ${name}\nPhone Number: ${phonenumber}\nDeviceModel: ${devicemodel}\nICCID: ${iccid}\n ${message}`,
    },
    function (err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    }
  );
};
