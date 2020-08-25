const { createTask } = require('../controllers/tasks/createTask');
const { deleteTask } = require('../controllers/tasks/deleteById');
const { getTaskById } = require('../controllers/tasks/getById');
const { getTasks } = require('../controllers/tasks/getTasks');
const { updateTask } = require('../controllers/tasks/updateById');

module.exports.apiRouter = app => {
	app.get('/tasks', (req, res, next) => {
		getTasks(req, res, next);
	});

	app.post('/tasks', (req, res, next) => {
		createTask(req, res, next);
	});

	app.get('/task/:id', (req, res, next) => {
		getTaskById(req, res, next);
	});

	app.post('/task/:id', (req, res, next) => {
		updateTask(req, res, next);
	});

	app.delete('/task/:id', (req, res, next) => {
		deleteTask(req, res, next);
	});
};
