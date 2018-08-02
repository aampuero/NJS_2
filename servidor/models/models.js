var mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/pruebaNode2');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Error de conexion'));
	db.once('open', function callback() {
		console.log('Base de datos abierta');
	});

module.exports = mongoose;