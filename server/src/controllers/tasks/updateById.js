const tasksService = require('../../services/tasks');

module.exports.updateTask = async (req, res, next) => {
	try {
		await tasksService.updateById(req.params.id, req.body);
		res.send(`tasks: ${JSON.stringify(req.body)}`);
	} catch (error) {
		next(error);
	}
};
