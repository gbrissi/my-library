// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');

module.exports = {
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  } || {
    host: '127.0.0.1',
    database: 'my-library',
    user: 'postgres',
    password: 'admin'
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './seeds'
  },
  ...knexSnakeCaseMappers
};
