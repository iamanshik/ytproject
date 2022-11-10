const jwt = require('jsonwebtoken')
jwt_secret = "my_super_saiyan_secret"
const createToken =(payload)=>{
    return jwt.sign(payload,jwt_secret)
}
module.exports = createToken;