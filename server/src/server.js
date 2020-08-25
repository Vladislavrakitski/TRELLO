require('dotenv/config');
const express = require('express');

const { server } = require('./config/index');
const { apiRouter } = require('./routes/api');
const { authRouter } = require('./routes/auth');

const PORT = server.port;
const app = express();
app.use(express.json());

authRouter(app);
apiRouter(app);

app.listen(PORT, async () => {
	console.log(`Server has been started on port ${PORT}`);
});
