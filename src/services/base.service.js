const nodemailer = require("nodemailer");
const { mailAccount, mailPass } = require("../configs/env.config");
const mailSender = async (ask_data) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailAccount, // generated ethereal user
      pass: mailPass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `Fred Foo 👻 ${mailAccount}`, // sender address
    to: ask_data.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
class BaseService {
  constructor(ask_data) {
    this.askData = ask_data;
  }
  // Methods
  async sendMail() {
    return await mailSender(this.askData);
  }
}

module.exports = BaseService;
