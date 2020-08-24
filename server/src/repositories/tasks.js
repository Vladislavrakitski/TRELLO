const Knex = require('knex');

const { db } = require('../config/index');

const knex = Knex(db);

module.exports = {
	getAll(id_users) {
		return knex('tasks')
			.select(['description', 'title', 'done', 'date'])
			.where('id_users', id_users);
	},

	create(task) {
		return knex('tasks').insert(task);
	},

	getById(id_tasks) {
		return knex('tasks')
			.select(['description', 'title', 'done', 'date'])
			.where('id_tasks', id_tasks)
			.first();
	},

	updateAllById({ id_tasks, description, title, done, date }) {
		return knex('tasks')
			.update({ description, title, done, date })
			.where('id_tasks', id_tasks);
	},
};
