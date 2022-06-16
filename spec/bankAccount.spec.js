const BankAccount = require('../src/bankAccount.js')

describe('BankAccount', () => {
  let bankAccount

  beforeEach(() => {
    bankAccount = new BankAccount()
  })

  it('can create a transaction given a specific date', () => {
    // set up
    const date = '2022-06-16'
    const credit = 1000.00
    const debit = 0
    const expected = {
      date: date,
      credit: credit,
      debit: debit
    }
    // execute
    const create = bankAccount.createTransaction(date, credit, debit)
    const result = bankAccount.getTransaction(date)
    // verify
    expect(create).toEqual(true)
    expect(result.date).toEqual(expected.date)
    expect(result.credit).toEqual(expected.credit)
    expect(result.debit).toEqual(expected.debit)
  })

  // it('cannot create a cohort with an invalid cohort name', () => {
  //   // set up
  //   const newCohortName = null
  //   const expected = 'error'
  //   // execute
  //   const result = cohortManager.createCohort(newCohortName)
  //   // console.log(cohortManager.createCohort(newCohortName))
  //   // verify
  //   expect(result).toEqual(expected)
  // })

  // it("cannot remove a cohort that doesn't exist", () => {
  //   // set up
  //   const alienCohortName = 'Cohort D'
  //   const expected = 'error'

  //   cohortManager.createCohort('Cohort A')
  //   cohortManager.createCohort('Cohort B')
  //   cohortManager.createCohort('Cohort C')
  //   // execute
  //   const result = cohortManager.removeCohort(alienCohortName)
  //   const allCohortNames = cohortManager.getAllCohortNames()
  //   // verify
  //   expect(result).toEqual(expected)
  //   expect(allCohortNames).toEqual(['Cohort A', 'Cohort B', 'Cohort C'])
  // })
})
