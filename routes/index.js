module.exports = function (app) {
  app.get('/', function (req, res, next) {
      res.render('index');

  });
	app.get('/test', function (req, res, next) {
		res.json({
			title: 'title test'
		});
	});
};
