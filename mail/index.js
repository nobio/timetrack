const nodemailer = require('nodemailer');
const moment = require('moment');
const mail_conf = require('./mail.conf.json');

const transporter = nodemailer.createTransport({
  host: mail_conf.host,
  port: mail_conf.port,
  auth: {
    user: mail_conf.auth.user,
    pass: mail_conf.auth.pass,
  },
  logger: true,
  debug: false, // include SMTP traffic in the logs
});

// Message object
const message = {
  from: mail_conf.from,
  // Comma separated list of recipients
  to: mail_conf.to,
  // Subject of the message
  subject: `Timetracker News ${moment().format('DD.MM.YYYY HH:mm')}`,
  // plaintext body
  text: 'I got triggered',
};

exports.sendMail = msg =>
  // console.log(message)
  new Promise((resolve, reject) => {
    message.subject = `Timetracker News ${moment().format('DD.MM.YYYY HH:mm')}`;
    message.text = msg;

    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log('Error occurred');
        console.log(error.message);
        reject(error.message);
      }
      console.log('Message sent successfully!');
      console.log(nodemailer.getTestMessageUrl(info));
      // only needed when using pooled connections
      transporter.close();
      resolve();
    });
  });

