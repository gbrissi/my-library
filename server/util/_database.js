const { Model } = require('objection')

const knex = require('knex')({
    client: 'pg',
    ssl: {
      rejectUnauthorized: false
    },
    connection: {
        host: 'ec2-52-72-99-110.compute-1.amazonaws.com',
        port: 5432,
        user: 'ajooirahwxgbhk',
        password: 'cb090837e0a424357953e5a639ad0f5d2ad4e04c712239e7796d5fc07912b0f1',
        database: 'd12e0eeoq116b4'
    }
  });

Model.knex(knex);

module.exports = knex