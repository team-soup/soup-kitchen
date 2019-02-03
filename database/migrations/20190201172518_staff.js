exports.up = function(knex, Promise) {
	return knex.schema.createTable('staff', (table) => {
		table.increments();
		table.string('name', 255).notNullable();
		table
			.string('email')
			.notNullable()
			.unique();
		table.string('password', 255).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('staff');
};
