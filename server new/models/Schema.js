const mongoose = require('mongoose')
const VidSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true
    },
    description:{
        type: String,
        trim: true,
        maxlength: [120,'description cannot be more than 120 digits.']
    },
    likes: {
        type: Number
    },
    dislike:{
        type: Number
    },
    tags:{
        type: String
    },
    date:{
        type: Date
    }
})
const LoginDetail = new mongoose.Schema({
    name: {
        type: String,
        unique: false
    },
    email: {
        type: String,
        unique: false
        
    },
    password: {
        type: String,
        unique: false
    }
})
const creds = mongoose.model("LoginDetail",LoginDetail)
const video = mongoose.model('vidDetails',VidSchema)
module.exports = {
    video,
    creds
}