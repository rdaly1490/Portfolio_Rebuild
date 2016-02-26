module.exports = function(express, app) {
	var router = express.Router();

	router.get('/', function(req, res, next) {
		res.render('index', {title: 'DalyWebDev | Freelance Web Developer'});
	});

	app.use('/', router);
}