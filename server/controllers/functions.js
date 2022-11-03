const { TaskSchemas, LoginSchemas } = require("../models/schema");
const {verifyToken}= require('../jwt/jwt_verification')
const cors  = require("cors")
const getAllTask = async (req, res) => {
  try {
    const tasks = await TaskSchemas.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getOneTask = async (req, res) => {
  try {
    const { ID: taskID } = req.params;
    const task = await TaskSchemas.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).send("if: no task found");
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).send("no error task found");
  }
};
const createTask = async ( req, res) => {
  console.log(req.body)
  console.log(req.user)
  try {
    const task = await TaskSchemas.create(req.body);

    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async ( req, res) => {
  console.log("fddhhh")
  try {
    const { ID: taskID } = req.params;
    console.log(taskID)
    const task = await TaskSchemas.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).send("if: no task found and unable to delete");
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).send("no error task found");
  }
};
const updatetask = async ( req, res) => {
  try {
    const { ID: taskID } = req.params;
    console.log(taskID)
    // const task = await TaskSchemas.findOneAndUpdate({ _id: taskID }, req.body, {
    //   new: true, // new true means task will store new updated value
    //   runValidators: true, // schema validators apply for this function.
    // });
    if (!task) {
      return res.status(404).json({ msg: `NO task with id: ${taskID}` });
    }
    res.status(404).json({ task });
  } catch (error) {
    res.status(200).json({ msg: error });
  }
};

module.exports = {
  getAllTask,
  getOneTask,
  createTask,
  updatetask,
  deleteTask,

};
