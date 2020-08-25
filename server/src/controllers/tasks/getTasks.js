const tasksService = require('../../services/tasks');

module.exports.getTasks = async (req, res, next) => {
	try {
		const data = await tasksService.getAll(req.body.id);
		res.send(`tasks: ${JSON.stringify(data)}`);
	} catch (error) {
		next(error);
	}
};
