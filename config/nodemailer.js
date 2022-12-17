import nodemailer from "nodemailer";

const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = process.env;

export const transporter = nodemailer.createTransport({
   service: MAIL_SERVICE,
   secure: true, // use SSL
   auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
   },
   tls: {
      rejectUnauthorized: false,
   },
});

export const mailOptions = {
   from: MAIL_USER,
   to: MAIL_USER,
};
