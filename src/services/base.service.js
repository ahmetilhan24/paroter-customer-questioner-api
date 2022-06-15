const nodemailer = require("nodemailer");
const { mailAccount, mailPass } = require("../configs/env.config");
const mailSender = async (payload) => {
  payload = {
    email: payload?.email,
    ...payload,
  };
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      // Removed after test
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `Fred Foo 👻 ${payload.email}`, // sender address
    to: mailAccount, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou..
  return info;
};
class BaseService {
  constructor(ask_data) {
    this.askData = ask_data;
  }
  // Methods
  async sendMail() {
    const isSend = await mailSender(this.askData);
    return isSend;
  }
}

module.exports = BaseService;
