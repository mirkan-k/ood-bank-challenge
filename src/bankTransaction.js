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
        return Number(this.date.toFixed(2))
    }
    getDebit() {
        return Number(this.date.toFixed(2))
    }
}