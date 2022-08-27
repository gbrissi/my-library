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
  await knex('book').insert([
    {
      id: 1,
      title: 'title1',
      subtitle: 'subtitle1',
      author: 'author1',
      publishing_company: 'pc1',
      quantity: 2,
      book_image: 01010101,
      isbn: '9780439023481',
    },
    {
      id: 2,
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
      return_date: '28-09-2022'
    },
    {
      user_id: 2,
      book_id: 2,
      return_date: '29-10-2022'
    }
  ])
};
