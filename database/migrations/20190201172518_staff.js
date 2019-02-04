exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increments();
		table.string('name', 255).notNullable();
		table
			.string('email')
			.notNullable()
			.unique();
		table.string('password', 255).notNullable();
		table.string('role', 255).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
