import nodemailer from 'nodemailer';

const email: string = process.env.EMAIL as string;
const pass: string = process.env.EMAIL_PASS as string;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
