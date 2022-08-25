const bcrypt = require('bcrypt')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "user" CASCADE')
  await knex('user').insert([
    {
      id: 1, 
      username: 'KellyG',
      password: await bcrypt.hash('tomatoes', 10),
      role: 'admin'
    },
    {
      id: 2,
      username: 'user',
      password: await bcrypt.hash('user1', 10),
      role: 'user'
    }
  ]);
};
