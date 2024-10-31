'use server';
import nodemailer from 'nodemailer';
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

//https://dev.to/sheraz4194/sending-emails-in-nextjs-via-nodemailer-4ai2


const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: "wayforwardmailer@gmail.com",
    pass: "mrwk cfms fvbu eazs",
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    return;
  }
  const info = await transporter.sendMail({
    from: email,
    to: sendTo || SITE_MAIL_RECIEVER,
    subject: subject,
    text: text,
    html: html ? html : '',
  });
  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', SITE_MAIL_RECIEVER);
  return info;
}