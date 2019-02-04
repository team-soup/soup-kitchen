
module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './database/inventory.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/inventory.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  // production: {
  //   client: 'sqlite3',
  //   migrations: {
  //     directory: './database/migrations'
  //   },
  //   seeds: {
  //     directory: './database/seeds'
  //   },
  //   useNullAsDefault: true
  // }
};