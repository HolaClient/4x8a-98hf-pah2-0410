const nodemailer = require("nodemailer");
const settings = require('../../settings.json');

module.exports = {
  mailer: () => {
    return mailer
  }
}

const mailer = nodemailer.createTransport({
  host: settings.smtp.host,
  port: settings.smtp.port,
  secure: true,
  auth: {
    user: settings.smtp.username,
    pass: settings.smtp.password
  },
});
