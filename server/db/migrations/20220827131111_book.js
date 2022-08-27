exports.up = function(knex) {
    return knex.schema.createTable('book', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.string('subtitle');
        table.string('author').notNullable();
        table.string('publishing_company').notNullable();
        table.integer('quantity').notNullable();
        table.string('isbn').notNullable().unique();
        table.binary('book_image').notNullable()
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('book')
};
