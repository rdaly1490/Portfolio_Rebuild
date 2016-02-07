var express = require('express');

var appRoutes = require('./routes/routes');

var app = express();

app.engine('html', require('hogan-express'));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));

appRoutes(express, app);

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('server running....');
});