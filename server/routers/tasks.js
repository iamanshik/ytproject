const express = require('express')
const jwt_auth = require('../jwt/jwt_verification')
const cors = require('cors')
const routers = express.Router();
const { getAllTask, getOneTask, createTask, updatetask, deleteTask} = require('../controllers/functions')

routers.route('/').get(getAllTask).post(createTask);
routers.route('/:ID').get(getOneTask).delete(deleteTask).patch(updatetask);

module.exports = routers;