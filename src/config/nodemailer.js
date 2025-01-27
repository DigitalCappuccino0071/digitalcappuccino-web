import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USERNAME_NEW,
    pass: process.env.GMAIL_PASSWORD_NEW,
  },
});

export const mailOptions = {
  from: process.env.GMAIL_USERNAME_NEW,
  // to: process.env.GMAIL_USERNAME_NEW,
};
