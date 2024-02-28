import nodemailer from 'nodemailer';
import { transporter, mailOptions } from '../../config/nodemailer';
export default async function handler(req, res) {
  console.log(req.body);
  if (req.method === 'POST') {
    const data = req.body;
    if (
      !data.fullName ||
      !data.email ||
      !data.phoneNumber ||
      !data.services ||
      !data.message
    ) {
      return res.status(400).json({ message: 'bad request!' });
    }

    try {
      const info = await transporter.sendMail({
        ...mailOptions,
        subject: data.message,
        text: 'test string',
        html: `<h1>${data?.fullName}</h1><h2>${data?.email}</h2><h3>${data?.phoneNumber}</h3><h4>${data?.services}</h4><h5>${data?.message}</h5>`,
      });
      console.log('Email sent:', info.response);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(400).json({ message: 'error' });
    }
  }
  return res.status(400).json({ message: 'bad request!' });
}
