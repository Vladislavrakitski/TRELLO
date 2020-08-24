const dbConfig = {
	client: process.env.DATABASE_MS,
	connection: {
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_DB,
	},
};

module.exports = dbConfig;
