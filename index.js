'user strict'

var mongoose = require('mongoose');
var app= require('./app');
var port = process.env.PORT ||3977;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_node_angular2',(err,res)=>{
	if(err){
		throw err;
	}else{
		console.log("La conexion a la base de datos es correcta...");
		app.listen(port, function(){
			console.log("Servidor de api rest de musica escuchando en http://localhost:"+port);
		});
	}
});