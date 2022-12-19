import { transporter, mailOptions } from "../../config/nodemailer";

const handler = async (req, res) => {
   if (req.method == "POST") {
      const data = req.body;

      if (!data.name || !data.email || !data.message) {
         return res.status(400).json({ error: true, message: "Bad Request" });
      }

      try {
         await transporter.sendMail({
            ...mailOptions,
            subject: `Message from ${data.name} <${data.email}>`,
            text: data.message,
         });

         await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: data.email,
            subject: "Message received! :)",
            text: "Thanks for contacting me! I'll get back to you as soon as possible.",
         });
      } catch (err) {
         console.log("lol");
         return res.status(400).json({ error: true, message: err.message });
      }
   }
   console.log("lol2");
   return res.status(400).json({ error: true, message: "Bad Request" });
};

export default handler;
