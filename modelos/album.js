'use strict'

var mongoose =requiere('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
	title: String, 
	description: String,
	year: Number,
	image: String,
	artist:{type: Schema.ObjectId, ref: 'Artist'}//Se hace referencia a un documento para relacionar que el artista tiene informacion en otro esquema.
});

module.exports = mongoose.model('Album', AlbumSchema);