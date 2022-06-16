//
const Statement = require('./bankStatement')

class BankAccount {
    constructor() {
        this.transactionList = [],
        this.statement = new Statement()
    }

    createTransaction(date, credit, debit) {
        const statement = new Statement(date, credit, debit)
        return statement.addTransaction(date, credit, debit)
    }

    getTransaction() {

    }
}

module.exports = BankAccount