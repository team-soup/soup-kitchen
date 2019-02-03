exports.up = function(knex, Promise) {
	return knex.schema.createTable('categories', (table) => {
		table.increments();

		table.string('name', 255).notNullable().unique();
		
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('categories');
};
