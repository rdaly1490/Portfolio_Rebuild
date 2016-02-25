var express = require('express');

var appRoutes = require('./routes/routes');

var app = express();

app.engine('html', require('hogan-express'));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/node_modules'));

appRoutes(express, app);

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('server running on port ' + port);
});