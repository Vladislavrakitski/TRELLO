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
	async updateById(id, task) {
		return tasksRepository.updateById(id, task);
	},
	async deleteById(id) {
		return tasksRepository.deleteById(id);
	},
};
