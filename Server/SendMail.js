const nodemailer = require("nodemailer");

const MailUser = process.env.MAIL_USER;
const MailUserPass = process.env.MAIL_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: MailUser,
    pass: MailUserPass,
  },
});


async function MainSender({from,subject,message}) {
  
  const info = await transporter.sendMail({
    from: `${from}`, 
    to: "ritikraj.rr87@gmail.com", 
    subject: `${subject}`, 
    html: `<p>${message}</p>`, 
  });

}

module.exports = MainSender;