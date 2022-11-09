const express = require('express')
const {getAllthumb,getOneThumb,getOneVid} = require('../controllers/function')
const routers = express.Router();
// routers.route("/").get(getAllthumb)
routers.route('/thumb',getAllthumb)
routers.route('/thumb/:ID').get(getOneThumb)
routers.route('/:ID').get(getOneVid)
// routers.get('/',(req,res)=>{
//     res.send("hlo")
// })
module.exports = routers;