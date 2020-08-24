require('dotenv/config');
const express = require('express');

const { server } = require('./config/index');
const { createTask } = require('./controllers/tasks/createTask');

const PORT = server.port;
const app = express();
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
	res.send(`get params ${req.params}`);
});

app.post('/tasks/create', (req, res, next) => {
	createTask(req, res, next);
});

app.get('/task/:id', (req, res) => {
	res.send(`information for task ${req.params.id}`);
});

app.post('/task/:id', (req, res) => {
	res.send(`task ${req.params.id} have a body ${JSON.stringify(req.body)}`);
});

app.delete('/task/:id', (req, res) => {
	res.send(`task ${req.params.id} has been deleted`);
});

app.listen(PORT, async () => {
	console.log(`Server has been started on port ${PORT}`);
});
