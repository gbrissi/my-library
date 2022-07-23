const client = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 4000,
        user: 'postgres',
        password: 'admin',
        database: 'my-library'
    }
  });

module.exports = client