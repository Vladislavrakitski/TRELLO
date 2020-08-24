const tasksService = require('../../services/tasks');

module.exports.createTask = async (req, res, next) => {
	const body = req.body;

	try {
		const createdTask = await tasksService.create(body);
		console.log(createdTask);
		res.send(`post tasks body ${JSON.stringify(body)}`);
	} catch (error) {
		next(error);
	}
};
