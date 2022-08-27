exports.up = function(knex) {
    return knex.schema.createTable('loan_and_return', (table) => {
        table.increments();
        table.integer('user_id')
            .references('id')
            .inTable('user')
            .index();
        table.integer('book_id')
            .references('id')
            .inTable('book')
            .index();
        table.timestamp('return_date').notNullable();
        table.timestamps(true, true);
    })
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('loan_and_return')
};
