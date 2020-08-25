module.exports.authRouter = app => {
	app.post('/auth/login', (req, res) => {
		console.log(req.body);
		res.send(req.body);
	});

	app.post('/auth/register', (req, res) => {
		console.log(req.body);
		res.send(req.body);
	});
};
