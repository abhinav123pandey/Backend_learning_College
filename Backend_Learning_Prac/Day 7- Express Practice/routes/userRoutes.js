const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController');

route.get('/users', userController.getUsers);
route.get('/users/:id', userController.getUserById);
route.post('/users/login',userController.login);

module.exports = route;