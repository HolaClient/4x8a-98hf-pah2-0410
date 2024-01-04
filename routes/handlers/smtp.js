const nodemailer = require("nodemailer");

module.exports = {
  mailer: () => {
    return mailer
  }
}

const mailer = nodemailer.createTransport({
  host: settings.features.smtp.host,
  port: settings.features.smtp.port,
  secure: true,
  auth: {
    user: settings.features.smtp.username,
    pass: settings.features.smtp.password
  },
});
