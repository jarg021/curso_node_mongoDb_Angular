'use strict'

var mongoose = require('mongoose');
var Shema = mongoose.Schema;

var UserSchema = Schema({
	name: String,
	surname: String,
	email: String,
	pasword: String,
	rol: String,
	image: String
});

module.exports =mongoose.model('User',UserSchema);