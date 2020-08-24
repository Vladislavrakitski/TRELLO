require('dotenv/config');
const express = require('express');
const Knex = require('knex');

const { server, dbConfig } = require('./config/index');

const PORT = server.port;
const app = express();
const knex = Knex(dbConfig);

app.use(express.json());

app.post('/auth/login', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.post('/auth/register', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.get('/tasks', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.get('/task/:id', (req, res) => {
	console.log(req.params.id);
	res.send(req.params.id);
});

app.listen(PORT, async () => {
	const user = await knex.select('*').from('tasks').where('id_users', 1);
	console.log(JSON.parse(JSON.stringify(user)));
	console.log(`Server has been started on port ${PORT}`);
});
