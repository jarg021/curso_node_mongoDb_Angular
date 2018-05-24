'use strict'

var express =require("express");
var bodyparse = require("body-parser");

var app=express();

//Cargar rutas 
var user_routes = require('./ruta/user');
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());

//Configurar cabeceras http



//rutas base
app.use('/api',user_routes);

module.exports= app;
