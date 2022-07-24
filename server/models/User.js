const {Model} = require('objection');

class User extends Model {
    static get tableName() {
        return 'users';
    }
    static get idColumn() {
        return 'id';
    }
}

module.exports = User