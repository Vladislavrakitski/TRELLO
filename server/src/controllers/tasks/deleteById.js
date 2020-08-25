const tasksService = require('../../services/tasks');

module.exports.deleteTask = async (req, res, next) => {
	try {
		await tasksService.deleteById(req.params.id);
		res.send(`task ${req.params.id} has been deleted`);
	} catch (error) {
		next(error);
	}
};
