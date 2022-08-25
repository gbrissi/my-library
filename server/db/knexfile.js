// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');

let enviroment = process.env.DATABASE_URL ? {connectionString: process.env.DATABASE_URL, ssl:{rejectUnauthorized: false}} : {host: '127.0.0.1', database: 'my-library', user:'postgres', password:'admin'} 

module.exports = {
  client: 'pg',
  connection: enviroment,
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './seeds'
  },
  ...knexSnakeCaseMappers
};

/*
  {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  } ||
*/