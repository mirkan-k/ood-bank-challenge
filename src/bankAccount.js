//
const Statement = require('./bankStatement')

class BankAccount {
    constructor() {
        this.transactionList = [],
        this.statement = new Statement()
    }

    createTransaction() {

    }

    getTransaction() {
        
    }
}

module.exports = BankAccount