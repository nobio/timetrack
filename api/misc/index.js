/**
 * exposes a ping endpoint and respones with pong
 *
 * curl -X GET http://localhost:30000/api/ping
 */
exports.ping = (req, res) => {
  res.send({
    response: 'pong',
  });
};

/*
 * test and experiment endpoint
 *
 * curl -X GET http://localhost:30000/api/experiment
 */
exports.experiment = (req, res) => {
  var mail = require('mail').Mail({
    host: 'smtp.strato.de',
    username: 'gernot@die-reichels.de',
    password: 'schernoo',
    secure: 'false',
    port: '25'
  });

  console.log(JSON.stringify(mail));
  mail.message({
      from: 'gernot@die-reichels.de',
      to: ['schernoo@gmail.com'],
      subject: 'Hello from Node.JS'
    })
    .body('Node speaks SMTP!')
    .send(function(err) {
      if (err) {
        console.log((err));
        res.status(500).send(err.message);
      } else {
        console.log('Sent!');
        res.status(200).send('done:\n');
      }
    });

};
