//
const Statement = require('./bankStatement')

class BankAccount {
    constructor() {
        this.statement = new Statement(),
        this.transactionList = this.statement.getAllTransactions()
    }

    createTransaction(date, credit, debit) {
        return this.statement.addTransaction(date, credit, debit)
    }

    getTransaction(date) {
        return this.statement.getTransaction(date)
    }
}

const acc = new BankAccount()
console.log(acc.createTransaction('2',2,0))
console.log(acc.transactionList)
// console.log(statement.addTransaction('2',2,0))
// console.log(statement.addTransaction('2',2,0))
console.log(acc.getTransaction('2'))
// console.log(statement.transactionList)
console.log('account end')

module.exports = BankAccount