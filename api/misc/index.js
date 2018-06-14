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

/**
 * test and experiment endpoint
 *
 * curl -X GET http://localhost:30000/api/experiment
 */
exports.experiment = (req, res) => {
  require('../../mail').sendMail('Hey there!')
    .then(res.status(200).send('ok'))
    .catch(err => res.status(500).send(err.message));
};
