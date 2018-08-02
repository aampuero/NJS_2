var express= require('express'),
	app= express(),
	servidor= require('http').createServer(app);

var config={
	rootPath: __dirname
};

require('./servidor/config/express')(app, config);
require('./servidor/config/routes')(app);
require('./servidor/config/socket')(servidor);

servidor.listen(3000, function () {
	console.log('Servidor escuchando el puerto: 3000');
});