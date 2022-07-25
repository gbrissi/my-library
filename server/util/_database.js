const { Model } = require('objection')

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'admin',
        database: 'my-library'
    }
  });

Model.knex(knex);

module.exports = knex