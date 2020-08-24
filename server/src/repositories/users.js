const knex = require('../server');

module.exports = {
	create({ id_users, name, email, password }) {
		return knex('users').insert({ id_users, name, email, password });
	},

	getByEmail(email) {
		return knex('users')
			.select(['name', 'email'])
			.where('email', email)
			.first();
	},

	updateAllById({ id_users, name, email, password }) {
		return knex('users')
			.update({ name, email, password })
			.where('id_users', id_users);
	},
};
