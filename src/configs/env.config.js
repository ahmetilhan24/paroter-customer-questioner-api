const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: process.env.PORT,
  mailAccount: process.env.MAIL_ACCOUNT,
  mailPass: process.env.MAIL_PASS,
};
