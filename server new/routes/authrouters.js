const express = require('express')
const {upload,deleteVid} = require('../controllers/authfunctions')
const authrouters = express.Router()
authrouters.route("/upload").post(upload)
authrouters.route('/delete/:ID').delete(deleteVid)
module.exports = authrouters