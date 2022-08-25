const {Model} = require('objection');

class User extends Model {
    //Table
    static get tableName() {
        return 'user';
    }

}

module.exports = User