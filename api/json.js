const requestIp = require('request-ip');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ ip: requestIp.getClientIp(req) });
}
