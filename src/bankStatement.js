//
const Transaction = require('./bankTransaction')

class BankStatement {
    constructor() {
        this.transactionList = [],
        this.totalBalance = 0
    }

    addTransaction(date, credit, debit, balance = this.totalBalance) {
        const transaction = new Transaction(date, credit, debit)
        const calcBalance = (credit - debit) + this.getCurrentBalance()
        balance = calcBalance

        const newTransaction = {
            date: transaction.getDate(),
            credit: transaction.getCredit(),
            debit: transaction.getDebit(),
            balance: balance
        }

        this.transactionList.push(newTransaction)
        return true //this.transactionList
    }

    getTransaction(date) {
        const transaction = this.transactionList.find(t => t.date === date)
        return transaction
    }

    getAllTransactions() {
        return this.transactionList
    }

    getCurrentBalance() {
        let balance = 0
        if (this.transactionList !== []) {
            const allBalance = this.transactionList.map((t) => t.balance)
            const balanceSum = allBalance.reduce((pSum, a) => pSum + a, 0)
            balance = balanceSum
        }
        return balance
    }

    getStatement() {

    }
}

module.exports = BankStatement

const statement = new BankStatement()

// console.log(statement.addTransaction('2',2,0))
// console.log(statement.addTransaction('2',2,0))
// console.log(statement.addTransaction('2',2,0))
// console.log(statement.getTransaction('2'))
console.log(statement.getAllTransactions())
console.log('statement end')