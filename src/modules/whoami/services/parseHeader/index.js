const parseHeader = (req) => {
  console.log(req.headers['x-forwarded-for'])
  return {
    "ipaddress":req.ip,
    "software":req.headers['user-agent'],
    "language":req.headers['accept-language'],
  };
}

module.exports = parseHeader;
