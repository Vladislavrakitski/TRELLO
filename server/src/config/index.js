module.exports = {
	server: {
		port: process.env.PORT,
	},
	jwt: {
		secret: process.env.JWT_SECRET,
		expiresIn: process.env.JWT_STORAGE,
	},
	db: {
		client: process.env.DATABASE_MS,
		connection: {
			host: process.env.DATABASE_HOST,
			port: process.env.DATABASE_PORT,
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_DB,
		},
	},
};
