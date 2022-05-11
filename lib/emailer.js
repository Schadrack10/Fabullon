import nodemailer from "nodemailer";

export const send_email = async (title, message_html) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-2.amazonaws.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "AKIA2X2D7FAAB2K54KV3", // generated ethereal user
      pass: "BGMMOQ+b5DAxiuEq4YQXaEVNYnhKLoUKLzHsnHGAsmXd", // generated ethereal password
    },
  });

  // send mail with defined transport object
  return await transporter.sendMail({
    from: "Active Media Emailer <activemediaemailer@gmail.com>", // sender address
    to: "info@activemi.co.za", // list of receivers
    subject: title, // Subject line
    html: message_html, // html body
  });
};
