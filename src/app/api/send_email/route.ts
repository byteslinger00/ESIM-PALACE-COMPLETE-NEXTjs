import { NextResponse, NextRequest } from "next/server";
const nodemailer = require('nodemailer');

const sendEmail = async (from: string, to: string, subject: string, text: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'sandbox@esimplified.io',
        pass: 'xrscxzdjcjokvtuv',
      },
    });

    const message = {
      from: 'blackpartner712@gmail.com',
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(message);
    return(`Message sent: ${info.messageId}`);
  } catch (error) {
    console.log(error);
    return(`Error sending email: ${error}`);
  }
};

const sendMessage = async (from: string, subject: string, text: string, model: string, phone: string, iccid: string) => {
  const to = 'support@esimplified.io';
  const message = `${model? 'Device Model:'+model+'\n': ''}${phone? 'Phone Number: '+phone+ '\n': ''}${iccid? 'ICCID: '+iccid+'\n': ''}${text}`;
    return await sendEmail(from, to, subject, message);
};

export async function POST(req: NextRequest) {  
  try {
    const from = req.headers.get('from') || '';
    const subject = 'Support';
    const text = req.headers.get('message') || '';
    const model = req.headers.get('model') || '';
    const phone = req.headers.get('phone') || '';
    const iccid = req.headers.get('iccid') || '';

    const res = await sendMessage(from, subject, text, model, phone, iccid);
    const response = new NextResponse(null, {status: 200});
     response.headers.set('details', res);
    return response;
  } catch (err:any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
}