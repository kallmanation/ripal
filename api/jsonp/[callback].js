const requestIp = require('request-ip');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`${req.query.callback}({"ip": "${requestIp.getClientIp(req)}"})`);
}
