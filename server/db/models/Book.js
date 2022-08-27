const {Model} = require('objection')

class Book extends Model {
    static get tableName() {
        return 'book'
    }
}

module.exports = Book