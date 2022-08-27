const {Model} = require('objection')

class LoanReturn extends Model {
    static get tableName() {
        return 'loan_and_return'
    }
}

module.exports = LoanReturn