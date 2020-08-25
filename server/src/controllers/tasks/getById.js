const tasksService = require('../../services/tasks');

module.exports.getTaskById = async (req, res, next) => {
	try {
		const data = await tasksService.getById(req.params.id);
		res.send(`task data: ${JSON.stringify(data)}`);
	} catch (error) {
		next(error);
	}
};
