//
class BankTransaction {
    constructor(date, credit, debit) {
        this.date = date,
        this.credit = credit,
        this.debit = debit
    }

    getDate() {
        return this.date
    }
    getCredit() {
        return Number(this.credit.toFixed(2))
    }
    getDebit() {
        return Number(this.debit.toFixed(2))
    }
}

module.exports = BankTransaction

// const bank = new BankTransaction('2', 4, 3)

// console.log('date', bank.getDate())
// console.log('depo', bank.getCredit())
// console.log('withdraw', bank.getDebit())