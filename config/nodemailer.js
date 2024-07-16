import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'rakeshbhavimani1@gmail.com',
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
