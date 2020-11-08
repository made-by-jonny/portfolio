import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    console.log(req.body);
    const mailOptions = {
      from: "hello@madebyjonny.com",
      to: "hello@madebyjonny.com",
      subject: "website Submmission" + req.body.topic + " " + req.body.budget,
      text: req.body.message,
    };

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "hello@madebyjonny.com",
        pass: "",
      },
    });

    try {
      const mailer = await transporter.sendMail(mailOptions);
      console.log(mailer);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ name: "mail sent" }));
    } catch (e) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ name: "issue sending message" }));
    }
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "request not supported" }));
  }
};
