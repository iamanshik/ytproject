const { video } = require("../models/Schema");
const upload =  async(req,res)=>{
  console.log('here i am')
  const details = {
    name: req.body.name,
    description: req.body.description,
    tags: req.body.tags
  }
  const response= await video.create(details)
  res.send(response)
  // console.log(response)
}
const deleteVid = async(req,res)=>{
  console.log(req.params)
res.send("deleted")
}

module.exports = {
upload,
deleteVid
};