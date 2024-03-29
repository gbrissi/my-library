exports.up = function(knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.string('role').notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIcdfExists('user')
};