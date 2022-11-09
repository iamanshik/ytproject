const express = require('express')
const {login,signup} = require('../controllers/authfunctions')
const authrouters = express.Router()
authrouters.post("/login",login)
authrouters.route("/signup").post(signup)
module.exports = authrouters