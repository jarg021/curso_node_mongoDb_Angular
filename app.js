'use strict'

var express =require("express");
var bodyparse = require("body-parser");

var app=express();

//Cargar rutas 

app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());

//Configurar cabeceras http

//rutas base
app.get('/prueba', function(req, res){
	res.status(200).send({message: 'Bienevenido a la prueba de Armando'});
});
module.exports= app;
