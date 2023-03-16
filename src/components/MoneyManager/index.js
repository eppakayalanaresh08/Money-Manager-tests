import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    listObject: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  //   getUpdateInCome = () => {
  //     const {amount} = this.state
  //     this.setState(prevState => ({
  //       Income: prevState.Income + parseInt(amount),
  //       yourBalance: prevState.yourBalance + parseInt(amount),
  //     }))
  //   }

  //   getUpdateExpenses = () => {
  //     const {amount} = this.state
  //     this.setState(prevState => ({
  //       expenses: prevState.expenses + parseInt(amount),
  //       yourBalance: prevState.yourBalance - parseInt(amount),
  //     }))
  //   }

  onSubmitForm = event => {
    const {title, amount, optionId} = this.state
    event.preventDefault()
    const updateList = {
      id: uuidv4(),
      title,
      amount,
      optionId,
    }

    this.setState(prevState => ({
      listObject: [...prevState.listObject, updateList],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))

    // switch (type) {
    //   case transactionTypeOptions[0].displayText:
    //     return this.getUpdateInCome()
    //   case transactionTypeOptions[1].displayText:
    //     return this.getUpdateExpenses()
    //   default:
    //     return null
    // }
  }

  getExpenses = () => {
    const {listObject} = this.state
    let expensesAmount = 0

    listObject.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {listObject} = this.state
    let incomeAmount = 0
    listObject.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {listObject} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    listObject.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  onClickEachDelete = id => {
    const {listObject} = this.state
    const DeleteEach = listObject.filter(eachDelete => eachDelete.id !== id)
    this.setState({listObject: DeleteEach})
  }

  render() {
    const yourBalance = this.getBalance()
    const expenses = this.getExpenses()
    const Income = this.getIncome()

    const {title, amount, listObject, optionId} = this.state

    return (
      <div className="bg-container">
        <div className="bg-container-nav">
          <h1 className="hi-richard">Hi, Richard</h1>
          <p className="welcome-back">
            Welcome back to your
            <span className="money-manager">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          yourBalance={yourBalance}
          expenses={expenses}
          Income={Income}
        />
        <div className="transaction-bg-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="container-add">
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="Amount">AMOUNT</label>
              <input
                type="text"
                id="Amount"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="Type">Type</label>
              <select onChange={this.onChangeType} value={optionId} id="select">
                {transactionTypeOptions.map(eachObject => (
                  <option key={eachObject.optionId} value={eachObject.optionId}>
                    {eachObject.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          <div className="transaction-Item">
            <ul className="container-title-name">
              <h1>History</h1>
              <li className="history-container">
                <p>title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {/* <ul className="lists-objects"> */}
              {listObject.map(eachObject => (
                <TransactionItem
                  listObjectItem={eachObject}
                  key={eachObject.id}
                  onClickEachDelete={this.onClickEachDelete}
                />
              ))}
            </ul>
            {/* </ul> */}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
