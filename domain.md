### Requirements

* You should be able to interact with your code via a JavaScript REPL - Node REPL or browser console  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

## Domain Model

nouns:
  - account
  - statement
  - date
  - credit
  - debit
  - balance
  - data
  - date
  - client

verbs:
  - deposit
  - withdraw
  - print


BankAccount (Class):
  - PROPERTIES:
    - transactionList: [] of Transaction
    - statement: new BankStatement

  - METHODS:
    - addTransaction()
    - getCurrentBal(): return sum of all balance within transactionList
    - getTransaction(date): return specific transaction
    - printStatement(): return and console.log statement.getStatement

BankStatement (Class):
  - PROPERTIES:
    - transactionList: [] of Transaction
    - balance: initially set to 0

  - METHODS:
    - addTransaction(date, debit, credit, balance): return true if date and balance are valid, else false
    - getTransaction(date): return specific transaction
    - getCurrentBal(): return sum of all balance within transactionList
    - getStatement(): return transaction list with balance

BankTransaction (Class):
  - PROPERTIES:
    - date: new Date
    - credit: Number(Number.toFixed(2))
    - debit: Number(Number.toFixed(2))

  - METHODS:
    - getDate: return this.date
    - getCredit: return this.credit
    - getDebit: return this.debit