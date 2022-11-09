const express = require('express')
const authrouters = express.Router()
authrouters.get("/auth/login",(req,res)=>{
    res.send("login successfull")
})
module.exports = authrouters