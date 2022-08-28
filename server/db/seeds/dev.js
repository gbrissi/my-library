const bcrypt = require('bcrypt')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "user" CASCADE')
  await knex('user').insert([
    {
      username: 'KellyG',
      password: await bcrypt.hash('tomatoes', 10),
      role: 'admin'
    },
    {
      username: 'user',
      password: await bcrypt.hash('user1', 10),
      role: 'user'
    }
  ]);
  await knex('book').insert([
    {
      title: 'title1',
      subtitle: 'subtitle1',
      author: 'author1',
      publishing_company: 'pc1',
      quantity: 2,
      book_image: 01010101,
      isbn: '9780439023481',
    },
    {
      title: 'title2',
      subtitle: 'subtitle2',
      author: 'author2',
      publishing_company: 'pc2',
      quantity: 3,
      book_image: 01010101,
      isbn: '9780439023482',
    }
  ])
  await knex('loan_and_return').insert([
    {
      user_id: 1,
      book_id: 1,
      return_date: '2023-01-01T00:00:00'
    },
    {
      user_id: 2,
      book_id: 2,
      return_date: '2023-01-01T00:00:00'
    }
  ])
};
