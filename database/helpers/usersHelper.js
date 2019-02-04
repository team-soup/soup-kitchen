const db = require('../../config/dbConfig');

module.exports = {
	registerUser: async (creds) => {
		const IDs = await db('users').insert(creds);
		const id = IDs[0];
		const query = await db('users')
			.where({ id })
			.first();
		return query;
	},

	loginUser: async (creds) => {
		const user = await db('users')
			.where({ email: creds.email })
			.first();
		return user;
	},

	getUsers: (id) => {
		const allUsers = db('users').select('id', 'name', 'email', 'role');
		const user = db('users').select('id', 'name', 'email', 'role').where({ id }).first();

		if (id) {
			return user;
		}

		return allUsers;
	},

	updateUser: async (id, user) => {
		const count = await db('users')
			.where({ id })
			.update(user);

		return count;
	},

	deleteUser: async (id) => {
		const count = await db('users')
			.where({ id })
			.del();

		return count;
	}
};
