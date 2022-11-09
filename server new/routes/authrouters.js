const express = require('express')
const { creds} =require('../models/Schema')
const authrouters = express.Router()
authrouters.post("/login",(req,res)=>{
    res.send("login successfull")
})
authrouters.post("/signup",(req,res)=>{
    const response = creds.create(
      {  name: "anshik",
        email: 'hi there i am a description',
        password: "i am an strong password"}
    )
    console.log(response)
    res.send("succesfull")
})
authrouters.post("/jwtverify",(req,res)=>{
    res.send("login successfull")
})
module.exports = authrouters