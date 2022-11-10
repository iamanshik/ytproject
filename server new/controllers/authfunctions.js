const { creds } = require("../models/Schema");
const bycrpt = require('bcryptjs')
const createToken = require('../jwt/createToken') 
const login = async(req, res) => {
     const user = await creds.findOne({email: req.body.email});
     if(!user){
      return res.status(400).json({err: "sorry invalid creds"})
     }
     else{
      const check = bycrpt.compare(req.body.password,user.password);
      if(!check){
        return res.status(400).json({error: "sorry invalid creds"})
      }
      const payload = {
        id: user._id,
        email: user.email
      }
      const authtoken = createToken(payload);
      // console.log(authtoken)
      res.json({authtoken})
     }
};
const signup = async (req, res) => {
  let hashPasswd;
  if(req.body.password){

     hashPasswd = await bycrpt.hash(req.body.password,10);
  }
  else{
return res.send("provide passsword")
  }
  console.log(hashPasswd)

try{    
  const response = await creds.create({
    name: req.body.name,
    email: req.body.email,
    password: hashPasswd,
  });
  console.log(response);
//   console.log(req.body);
  res.send("succesfull");
}
catch(err){
	console.log("error occured")
 }
};
module.exports = {
  signup,
  login,
};
