const { creds } = require("../models/Schema");
const login = (req, res) => {
    res.send("pending kid")
};
const signup = async (req, res) => {
    
  const response = await creds.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(response);
//   console.log(req.body);
  res.send("succesfull");
};
module.exports = {
  signup,
  login,
};
