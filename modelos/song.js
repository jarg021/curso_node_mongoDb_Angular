'use strict'

var mongoose =requiere('mongoose');
var Schema = mongoose.Schema;

var SongSchema = Schema({
	number: String,
	name: String, 
	duration: String,
	file: String,
	album: {type: Schema.ObjectId, ref: 'Album'}
});

module.exports = mongoose.model('Song', SongSchema);