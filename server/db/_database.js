const knex = require('knex');
const knexfile = require('./knexfile');
const {Model} = require('objection');

function setupDb() {
    const db = knex(knexfile);
    Model.knex(db);
}

module.exports = setupDb;