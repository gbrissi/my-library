const {Model} = require('objection');

class User extends Model {
    //Table
    static get tableName() {
        return 'user';
    }

    //Columns || NOTE: id columns are auto-generated by objection.js
    static get usernameColumn() {
        return 'username';
    }    
    static get passwordColumn() {
        return 'password';
    }

    //Columns Type
    static get jsonSchema() {
        return {
            type:'object',
            required: ['username', 'password'],
            properties: {
                id: {type: 'integer'},
                username: {type: 'string', minLength: 1, maxLength: 255},
                password: {type: 'string', minLength: 1, maxLength: 255}
            }
        }
    }
}

module.exports = User