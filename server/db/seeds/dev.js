exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "user" CASCADE')
  await knex('user').insert([
    {
      id: 1, 
      username: 'KellyG',
      password: '$2b$10$L5hUA/ciNVHEi/zmaPPqcufRWiyNRjWUziiX94OmeNYGw/2S8Aia.',
      role: 'admin'
    },
  ]);
};
