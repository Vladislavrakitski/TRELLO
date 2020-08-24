const tasksRepository = require('../repositories/tasks');

module.exports = {
	async getAll(id) {
		return tasksRepository.getAll(id);
	},
	async create(task) {
		return tasksRepository.create(task);
	},
	async getById(id) {
		return tasksRepository.getById(id);
	},
	async getById(task) {
		return tasksRepository.updateAllById(task);
	},
};
