const Knex = require('knex');

const { db } = require('../config/index');

const knex = Knex(db);
knex.on('query', ({ sql }) => console.log(`${sql}\n`));

module.exports = {
	getAll(id_users) {
		return knex('tasks')
			.select('description', 'title', 'done', 'date')
			.where('id_users', id_users);
	},

	create(task) {
		return knex('tasks').insert(task);
	},

	getById(id_tasks) {
		return knex('tasks')
			.select('description', 'title', 'done', 'date')
			.where('id_tasks', id_tasks);
	},

	updateById(id_tasks, { description, title, done, date }) {
		return knex('tasks')
			.update({ description, title, done, date })
			.where('id_tasks', id_tasks);
	},

	deleteById(id_tasks) {
		return knex('tasks').delete().where('id_tasks', id_tasks);
	},
};
