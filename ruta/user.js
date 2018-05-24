'use strict'

var express =require('express');
var UserController = require('../controladores/user');

var api = express.Router();

api.get('/probando_controlador',UserController.pruebas);
api.post('/register',UserController.saveUser);
api.post('/login',UserController.loginUser);
module.exports = api;
