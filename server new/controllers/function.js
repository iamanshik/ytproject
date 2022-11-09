const {video} = require("../models/Schema");

const getOneVid = async (req, res) => {
  res.send("hhlo its working");
};
const getAllthumb = async (req, res) => {
  res.send("hhlo its working");
};
const getOneThumb = async (req, res) => {
//   const response = await video.create({
//     name: "hi there",
//     description: "i am description",
//     likes: 6,
//     dislike: 0,
//     tags: "first",
//   });

  console.log(req.params);
  res.send(response);
};

module.exports = { getAllthumb, getOneThumb, getOneVid };
