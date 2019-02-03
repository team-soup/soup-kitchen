const db = require('../../config/dbConfig');

module.exports = {
	registerUser: async (creds) => {
		const IDs = await db('staff').insert(creds);
		const id = IDs[0];
		const query = await db('staff')
			.where({ id })
			.first();
		return query;
	},

	loginUser: async (creds) => {
		const user = await db('staff')
			.where({ email: creds.email })
			.first();
		return user;
	},

	getUsers: (id) => {
		const allUsers = db('staff').select('id', 'name', 'email');
		const user = db('staff').select('id', 'name', 'email').where({ id }).first();

		if (id) {
			return user;
		}

		return allUsers;
	},

	updateUser: async (id, user) => {
		const count = await db('staff')
			.where({ id })
			.update(user);

		return count;
	},

	deleteUser: async (id) => {
		const count = await db('staff')
			.where({ id })
			.del();

		return count;
	}
};
