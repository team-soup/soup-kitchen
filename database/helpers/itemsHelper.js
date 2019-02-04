const db = require('../../config/dbConfig');

module.exports = {
	getItems: (id) => {
		const allItems = db('items').select(
			'id',
			'name',
			'amount',
			'unit',
			'categoryID'
		);
		const item = db('items')
			.select('id', 'name', 'amount', 'unit', 'categoryID')
			.where('id', id)
			.first();

		if (id) {
			return item;
		}
		return allItems;
	},

	addItem: async (body) => {
		const IDs = await db('items').insert(body);
		return { id: IDs[0] };
	},

	updateItem: async (id, body) => {
		const count = await db('items')
			.where({ id })
			.update(body);

		return count;
	},

	deleteItem: async (id) => {
		const count = await db('items')
			.where({ id })
			.del();

		return count;
	}
};
