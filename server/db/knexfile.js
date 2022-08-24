// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: '127.0.0.1',
      database: 'my-library',
      user: 'postgres',
      password: 'admin'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeCaseMappers
  }
};
