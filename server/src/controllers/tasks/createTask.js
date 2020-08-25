const tasksService = require('../../services/tasks');

module.exports.createTask = async (req, res, next) => {
	try {
		await tasksService.create(req.body);
		res.send(`post tasks body ${JSON.stringify(req.body)}`);
	} catch (error) {
		next(error);
	}
};
