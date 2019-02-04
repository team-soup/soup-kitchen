exports.up = function(knex, Promise) {
	return knex.schema.createTable('items', (table) => {
		table.increments();
		table
			.string('name', 255)
			.notNullable()
			.unique();
		table.integer('amount').notNullable();
		table.string('unit')
		table.string('imageURL')
		table
			.integer('categoryID')
			.unsigned()
			.references('id')
			.inTable('categories');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('items');
};
