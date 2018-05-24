'use strict'
var User = require('../modelos/user')
var bcrypt = require('bcrypt-nodejs')
function pruebas(req, res){
	res.status(200).send({
		message: 'probando una accion del controlador de usuraios del api rest con Node y mongo '
	});
}
function saveUser(req, res){
	var user=new User();
	var params=req.body;

	console.log(params);
	user.name= params.name;
	user.surname= params.surname;
	user.email= params.email;
	user.role = 'ROLE_USER';
	user.image = 'null';
	if(params.password){
		//Enciptar contraseña y guardar datos
		bcrypt.hash(params.password, null, null, function(err, hash){
			user.password = hash;
			if(user.name !=null && user.surname !=null && user.email!=null){
				//guardar el usuario 
				user.save((err,userStored)=> {
					if(err){
						res.status(200).send({message: 'Error al guardar el usuario'});
					}else{
						if(!userStored){
							res.status(404).send({message: 'No se ha registrado el usuario'});
						}else{
							res.status(200).send({user: userStored});
						}
					}
				});
			}else{
				res.status(200).send({message: 'Rellena todos los datos'});

			}
		});
	}else{
		res.status(200).send({message: 'Introduce la contraseña'});
	}
}


function loginUser(req, res){
	var params = req.body;
	var email = params.email;
	var password = params.password;

	User.findOne({ email: email.toLowerCase()}, function(err, user){
		if(err){
			res.status(500).send({message: 'Error en la petición'});
		}else{
			if(!user){
				res.status(404).send({mesage: 'Usuario no existe en la base de datos'})
			}else{
				//Comnparacion de la contraseña cuando el usuario si exista
				bcrypt.compare(password,user.password,function(err,check){
					if(check){
						//Devolver los datos de usurio logeado 
						if(params.gethash){
							//devolver un token de jwt
						}else{
							res.status(200).send({user})
						}
					}else{
						res.status(200).send({message: 'El usuario no ha podido loguearse'});
					}
				});
			}

		}
	});

}

module.exports ={
	pruebas,
	saveUser,
	loginUser
};