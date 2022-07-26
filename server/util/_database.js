const { Model } = require('objection')

const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
  });

Model.knex(knex);

module.exports = knex