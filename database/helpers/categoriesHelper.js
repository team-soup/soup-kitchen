const db = require('../../config/dbConfig');

module.exports = {
	getCategories:  (id) => {
		const categories =  db('categories').select('id', 'name');
		const category = db('categories').select('id', 'name').where({ id }).first();
		const items = db('items')
			.select('id', 'name', 'amount', 'unit', 'imageURL', 'categoryID')
			.where('categoryID', id);

		if (id) {
			return Promise.all([category, items]).then((response) => {
				let [category, items] = response;
				let result = { id: category.id, name: category.name, items: items };
				return result;
			});
		}
		return categories;
	},

	addCategory: async (name) => {
		const IDs = await db('categories').insert(name);
		return { id: IDs[0] };
	},

	updateCategory: async (id, name) => {
		const count = await db('categories')
			.where({ id })
			.update(name);

		return count;
	},

	deleteCategory: async (id) => {
		const count = await db('categories')
			.where({ id })
			.del();

		return count;
	}
};
