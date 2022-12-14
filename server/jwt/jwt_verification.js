const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {
    console.log("req")
  const token = req.headers.jwt_token
    // req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, 'asj#jsdf');
    console.log(decoded)
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = {verifyToken};